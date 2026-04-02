import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
    required: true
  },
  electionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Election",
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Vote", voteSchema);