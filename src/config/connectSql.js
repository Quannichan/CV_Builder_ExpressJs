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
    console.error("Prisma connection failed:", err);
    throw err;
  }
}

module.exports = { testConnection, prisma };