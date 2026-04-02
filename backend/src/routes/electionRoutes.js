import express from "express";
import { createElection, getElections } from "../controllers/electionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin creates an election
router.post("/", protect, createElection);

// Get all elections (any logged-in user)
router.get("/", protect, getElections);

export default router;