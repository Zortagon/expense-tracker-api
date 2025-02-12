import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: [
        { emit: 'stdout', level: 'query' },
        { emit: 'event', level: 'info' },
        { emit: 'event', level: 'warn' },
        { emit: 'event', level: 'error' },
    ],
});

export default prisma;
