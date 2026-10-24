require("dotenv/config");

const { PrismaClient } = require("../../generated/prisma");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
        ca: process.env.CA_FILE,
    },
});

const prisma = new PrismaClient({ adapter });

async function testConnection() {
  try {
    await prisma.$connect();
    const test = await prisma.user.count();
    console.log(test) 
    console.log("✅ Prisma đã kết nối thành công!");
  } catch (err) {
    console.error("❌ Lỗi kết nối Prisma:", err);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = { testConnection, prisma };   