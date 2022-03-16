import express from "express";
import mongoose from "mongoose";
import VotePoll from "../models/moviePoll.js";

const router = express.Router();

export const getPolls = async (req, res) => {
  try {
    const pollsMessages = await VotePoll.find();

    res.status(200).json(pollsMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const votePoll = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Not authenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No polls with id: ${id}`);

  const polls = await VotePoll.findById(id);

  const index = polls.poll.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    polls.poll.push(req.userId);
  } else {
    polls.poll = polls.poll.filter((id) => id !== String(req.userId));
  }
  const updatedPoll = await VotePoll.findByIdAndUpdate(id, polls, {
    new: true,
  });
  res.status(200).json(updatedPoll);
};
