import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import usersRoute from "./routes/userRoutes";
import productsRoute from "./routes/productRoutes";
import commentsRoute from "./routes/commentRoutes";

import { ENV } from "./config/env";

const app = express();

const PORT = ENV.PORT;

app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true })); // allows request from frontend with cookies
app.use(clerkMiddleware()); // auth obj attached to req
app.use(express.json({ limit: "5mb" })); // Parses json in request body
app.use(express.urlencoded({ extended: true })); // parses form data (like HTML forms)

app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to Productify API - Powered by PostgreSQL, Drizzle ORM & Clerk Auth",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});

app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);
app.use("/api/comments", commentsRoute);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Health check passed" });
});

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});
