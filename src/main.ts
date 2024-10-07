// import prisma from './application/db-client.app';
//
// async function main() {
//     const allUsers = await prisma.user.findMany();
//     console.info(allUsers);
// }
//
// main()
//     .catch((error) => {
//         throw error;
//     })
//     .finally(() => {
//         prisma.$disconnect();
//     });
import { Express } from 'express';

import { appInstance } from './application/app';

(async function bootstrap(): Promise<void> {
    const app: Express = await appInstance();
    const server = app.listen(3000);
    console.info(server.address());
})();
