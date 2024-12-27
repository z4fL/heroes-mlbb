import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

let prisma;
const connectionString = process.env.DATABASE_URL;

if (process.env.NODE_ENV === "production") {
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  prisma = new PrismaClient({ adapter });
} else {
  if (!global.prisma) {
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    global.prisma = new PrismaClient({ adapter });
  }
  prisma = global.prisma;
}

export default prisma;
