import express, { NextFunction, Request, Response } from 'express';
import { router } from './routes/v1';
import { userRouter } from './routes/v1/user';
import { spaceRouter } from './routes/v1/space';
import { adminRouter } from './routes/v1/admin';
import client from "@repo/db/client";

const app = express();
app.use(express.json());

app.use("/api/v1/", router);
app.use("/api/v1/", userRouter);
app.use("/api/v1/", spaceRouter);
app.use("/api/v1/", adminRouter);

declare global {
    namespace Express {
        export interface Request {
            role?: "Admin" | "User"
            userId?: string
        }
    }
}

app.listen(process.env.PORT || 3000);