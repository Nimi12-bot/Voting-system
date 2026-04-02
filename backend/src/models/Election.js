import mongoose from "mongoose";

const electionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ["active", "closed"],
    default: "active"
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  }
}, { timestamps: true });

export default mongoose.model("Election", electionSchema);