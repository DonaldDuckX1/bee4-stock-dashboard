// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

declare global {
  // avoid multiple instances in dev
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma
}
