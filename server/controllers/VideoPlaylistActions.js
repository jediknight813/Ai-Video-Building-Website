import VideoPlaylistModel from "../model/VideoPlaylistModel.js";


export const AddVideoPlaylistJob = async (req, res) => {
    console.log(req.body)
    const video = req.body;
    const newVideoPlaylist = new VideoPlaylistModel(video)
    try {
        await newVideoPlaylist.save();
        res.status(201).json(newVideoPlaylist);
    } catch (error) {
        res.status(409),json({ message: error.message })
    }
}

