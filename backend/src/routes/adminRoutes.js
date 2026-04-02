import express from "express";
const router = express.Router();
import { getDashboardStats, deleteCandidate } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";

// All routes here require being logged in AND being an admin
router.get("/stats", protect, admin, getDashboardStats);
router.delete("/candidate/:id", protect, admin, deleteCandidate);

export default router;