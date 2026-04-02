import Vote from "../models/Vote.js";
import Candidate from "../models/Candidate.js";

// Cast Vote
export const castVote = async (req, res) => {

  try {

    const { candidateId, electionId } = req.body;
    const userId = req.user._id;

    const existingVote = await Vote.findOne({
      userId,
      electionId
    });

    if (existingVote) {
      return res.status(400).json({
        message: "You have already voted in this election"
      });
    }

    await Vote.create({
      userId,
      candidateId,
      electionId
    });

    await Candidate.findByIdAndUpdate(candidateId, {
      $inc: { votes: 1 }
    });

    res.json({
      message: "Vote submitted successfully"
    });
    } catch (error) {
    console.error("VOTE ERROR:", error); // This prints the real error in your VS Code terminal
    res.status(500).json({ 
        message: "Server error", 
        errorDetails: error.message // This sends the real error back to Postman
    });
}


};


// Get Election Results
export const getResults = async (req, res) => {

  try {

    const { electionId } = req.params;

    const candidates = await Candidate.find({ electionId });

    res.json(candidates);

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }
};