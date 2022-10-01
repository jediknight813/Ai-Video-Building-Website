import express from "express";

import { getVideos, AddVideo, removeVideo} from "../controllers/VideoActions.js";

const router = express.Router();

router.get('/', getVideos);

router.post('/newVideo', AddVideo);

router.delete('/:id', removeVideo)

export default router;