import express from 'express';
const router = express.Router();
import { getCandidates, createCandidate } from '../controllers/candidateController.js'; 

router.get('/', getCandidates);
router.post('/', createCandidate); 

export default router;