
const { prisma } = require("../config/connectSql");

async function main() {
  try {
    console.log("1. Kiểm tra $connect...");
    await prisma.$connect();
    console.log("Kết nối thành công.");

    console.log("2. Thử truy vấn SQL trực tiếp...");
    const result = await prisma.$queryRaw`SELECT 1 AS ok`;
    console.log("SQL thành công:", result);

    console.log("3. Kiểm tra bảng PostSample...");
    const sample = await prisma.postSample.findFirst();
    console.log("PostSample:", sample);
  } catch (error) {
    console.error("LỖI:", error.message);
    console.error("CODE:", error.code);
    console.error("META:", error.meta);
    console.error("CAUSE:", error.cause);
    console.error("STACK:", error.stack);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main();
