import { requireAuth } from "@clerk/express";
import express from "express";
import { syncUser } from "../controllers/userController";

const router = express.Router();

// sync user - sync the clerk user to DB
// requireAuth function - middleware to check user for authentication
router.post("/sync", requireAuth(), syncUser);

export default router;
