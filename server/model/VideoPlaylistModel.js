import mongoose from "mongoose";


const VideoPlaylistSchema = mongoose.Schema({
    youtube_playlist_url: String,
    video_description: String,
    styles: String,
    thumbnail_style: String,
    steps: Number,
    length: String,
    categoryId: Number,
    captions: Boolean,
    tags: String,
    
    fullscreen: Boolean,
    fix_faces: Boolean,
    sampler: String,
    negative_styles: String,

    days_to_upload: Array,
    job_type: String,
    finished_videos: Array,
})


const VideoPlaylistModel = mongoose.model('VideoPlaylistModel', VideoPlaylistSchema);

export default VideoPlaylistModel;