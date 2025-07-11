import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    console.log("Authorization Header:", header);

    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization header missing or malformed" });
    }

    const token = header.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

        // @ts-ignore
        req.userId = decoded.id;
        next();
    } catch (err) {
        console.log("JWT verification error:", err);
        return res.status(403).json({ message: "Invalid token" });
    }
};
