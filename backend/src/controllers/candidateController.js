import Candidate from '../models/Candidate.js';

// Get all candidates
 export const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.create(req.body);
        res.status(201).json(candidate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};