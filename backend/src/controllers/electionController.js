import Election from "../models/Election.js";

// Create Election
export const createElection = async (req, res) => {

  try {

    const { title, description } = req.body;

    const election = await Election.create({
      title,
      description,
      status: "active"
    });

    res.status(201).json(election);

  } catch (error) {

    res.status(500).json({ message: "Server error" });

  }
};


// Get All Elections
export const getElections = async (req, res) => {

  try {

    const elections = await Election.find();

    res.json(elections);

  } catch (error) {

    res.status(500).json({ message: "Server error" });

  }
};