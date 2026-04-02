import express from "express";
import { castVote, getResults } from "../controllers/voteController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Cast a vote
router.post("/cast", protect, castVote);

// Get results for a specific election
router.get("/results/:electionId",  getResults);

export default router;