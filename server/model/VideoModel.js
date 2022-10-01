import mongoose from "mongoose";


const VideoSchema = mongoose.Schema({
    title: String,
    progess: Number,
    thumbnail: String,
    youtube_url: String,
    styles: String,
    steps: Number,
    length: String,
    categoryId: Number,
    status: String,
    captions: Boolean,
    tags: String    
})


//{"youtube_url": "", "status": "Ready", "styles": ", by gregory manchess, digital illustration, trending on artstation hq, elegant.",  "steps": 50, "length": "full", "categoryId": 10, "captions": false, "tags": "" }

const VideoModel = mongoose.model('VideoModel', VideoSchema);

export default VideoModel;