import * as pkg from "@prisma/client";

// Support both named and default exports depending on the installed @prisma/client build
const PrismaClient: any = (pkg as any).PrismaClient ?? (pkg as any).default ?? pkg;

export const prisma = new PrismaClient();
