import express from "express";

import { AddVideoPlaylistJob } from "../controllers/VideoPlaylistActions.js";

const router2 = express.Router();

router2.post('/newVideoPlaylistJob', AddVideoPlaylistJob);

export default router2
