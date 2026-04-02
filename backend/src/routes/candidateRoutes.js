import express from 'express';
const router = express.Router();
import { getCandidates, createCandidate } from '../controllers/candidateController.js'; // Make sure you have this controller!

router.get('/', getCandidates);
router.post('/', createCandidate); // Assuming you have a createCandidate controller for adding new candidates

export default router;