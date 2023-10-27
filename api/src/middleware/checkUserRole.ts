import { Request, Response, NextFunction } from "express";

type ExtendedRequest = Request & {
  role?: string;
};

// Define a union type for valid roles
type ValidRoles = "talent" | "user" | "admin" | "staff";

export const checkUserRole = (requiredRole: ValidRoles) => async (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const userRole = req.role;

    if (userRole === requiredRole) {
      // User has the required role, allow access
      next();
    } else {
      // User does not have the required role, deny access
      res
        .status(403)
        .json({ error: "Access denied. Insufficient permissions." });
    }
};

// Convert the middleware to RequestHandler
const checkUserRoleHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return checkUserRole("talent")(req as ExtendedRequest, res, next);
};

export { checkUserRoleHandler };

