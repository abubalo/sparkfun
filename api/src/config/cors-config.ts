const corsConfig = {
  allowedOrigins: process.env.ALLOWED_ORIGINS || [
    "http://localhost:5173",
    "https://sparkfun.vercel.app",
  ],
  allowedHeaders:
    process.env.ALLOWED_HEADERS ??
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  allowedMethods:
    process.env.ALLOWED_METHODS || "POST, PUT, PATCH, GET, DELETE",
};

export default corsConfig;
