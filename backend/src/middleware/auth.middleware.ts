import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Missing token" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = await verifyToken(token);

    (req as any).user = decoded;

    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};
