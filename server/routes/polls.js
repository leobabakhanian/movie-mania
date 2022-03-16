import express from "express";
import { votePoll, getPolls } from "../controllers/polls.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPolls);
router.patch("/:id/votePoll", auth, votePoll);

export default router;
