import express from 'express';
import mongoose from 'mongoose';

import VideoModel from '../model/VideoModel.js';


const router = express.Router();

export const getVideos = async (req, res) => { 
    try {
        const VideoModels = await VideoModel.find();
        res.status(200).json(VideoModels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const AddVideo = async (req, res) => {
    console.log(req.body)
    const video = req.body;
    const newVideo = new VideoModel(video)
    try {
        await newVideo.save();
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(409),json({ message: error.message })
    }
}


export const removeVideo = async (req, res ) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No video with id: ${id}`);

    await VideoModel.findByIdAndRemove(id);

    res.json({ message: "video deleted "})


}