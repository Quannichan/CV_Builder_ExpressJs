require("dotenv/config");

const { PrismaClient } = require("../../generated/prisma");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

const ca = process.env.CA_FILE?.replace(/\\n/g, "\n");

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca,
    rejectUnauthorized: true,
  },
  connectionLimit: 5,
  connectTimeout: 10000,
});

const prisma = new PrismaClient({ adapter });

async function testConnection() {
  try {
    await prisma.$connect();
    const count = await prisma.user.count();
    console.log("Prisma connected successfully. User count:", count);
  } catch (err) {
    printError(err);
    throw err;
  }
}

function printError(err, depth = 0) {
  if (!err || depth > 5) return;

  console.error(`DB error level ${depth}:`, {
    name: err.name,
    message: err.message,
    code: err.code,
    errno: err.errno,
    sqlState: err.sqlState,
  });

  if (err.cause) {
    printError(err.cause, depth + 1);
  }

  if (err.originalError) {
    printError(err.originalError, depth + 1);
  }
}

module.exports = { testConnection, prisma };