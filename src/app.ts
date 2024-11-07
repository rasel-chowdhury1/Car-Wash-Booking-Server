import cors from "cors";
// import { Routes } from "./app/routes";
import cookieParser from "cookie-parser";
import express, { Application } from "express";
// import { NotFound } from "./app/middlewares/NotFound";
// import { GlobalError } from "./app/middlewares/GlobalError";

const app: Application = express();

// Middleware parser
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://car-wash-pearl.vercel.app"],
    credentials: true,
  }),
);

// Application routes
app.use("/api", Routes);

app.get("/", (req, res) => {
  res.send("Welcome car wash booking backend");
  Promise.reject();
});

// Global error handler
app.use(GlobalError);

// Not found error handler
app.use("*", NotFound);

export default app;
