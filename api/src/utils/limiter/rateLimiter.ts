import rateLimit from "express-rate-limit";

// Create a rate limiter for authentication and registration endpoints
export const authLimiter = rateLimit({
  windowMs: 60 * 60 * 100, // 1 hour window
  max: 30, // Allowing 10 requests per windowMs per IP
  message: "Too many login or registration attempts, please try again later.",
});

// Create a rate limiter for API endpoints
export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Number of requests allowed in the defined windowMs
  message: "Too many requests from this IP, please try again later.",
});

// Create a rate limiter for user actions (e.g., bookings, messages)
export const userActionRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // Number of actions allowed in the defined windowMs
  message:
    "You've exceeded the rate limit for this action. Please try again later.",
});
