import User from "../models/User.js";
import Election from "../models/Election.js";
import Candidate from "../models/Candidate.js";

// Get dashboard stats
export const getDashboardStats = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const electionCount = await Election.countDocuments();
    const candidateCount = await Candidate.countDocuments();

    res.json({
      users: userCount,
      elections: electionCount,
      candidates: candidateCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a candidate (Admin only)
export const deleteCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findByIdAndDelete(req.params.id);
    if (!candidate) return res.status(404).json({ message: "Candidate not found" });
    res.json({ message: "Candidate removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};