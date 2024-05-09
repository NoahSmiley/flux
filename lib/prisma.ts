import { PrismaClient } from "@prisma/client"

declare global { var prisma: PrismaClient | undefined }

const prisma = global.prisma || new PrismaClient({ datasources: { db: { url: process.env.WEB_DATABASE_URL } } });

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
