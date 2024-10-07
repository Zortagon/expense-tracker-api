import express, { Express, Request, Response, NextFunction } from 'express';

async function appInstance(): Promise<Express> {
    const app: Express = express();

    app.get('/', (_req: Request, res: Response) => {
        res.status(200).json({ message: 'Hello World' });
    });

    return app;
}

export { appInstance };
