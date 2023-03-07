import "express-async-errors";
import express from "express";
import { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import "reflect-metadata";
// import routes from "./src/shared/routes";
import cors from "cors";

const app = express();

const limiter = rateLimit({
  windowMs: 1000, // 1 seconds
  max: 2, // Limit each IP to 2 requests per `window` (here, per 15 seconds)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (request: Request, response: Response) => {
  return response.json({
    status: true,
    message: "This is invest application entry point",
  });
});

// API routes
// app.use("/api/v1", routes);

export default async () => app;
