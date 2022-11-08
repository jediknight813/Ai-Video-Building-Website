import React from "react";
import { useState, useEffect } from "react";
import * as api from '../api/index.js'


const VideoPlaylistJob = () => {


    const [days_to_upload_videos, set_days_to_upload_videos] = useState([]);

    const handleSelect = function(selectedItems) {
        const days = [];
        for (let i=0; i<selectedItems.length; i++) {
            days.push(selectedItems[i].value);
        }
        console.log(days)
        set_days_to_upload_videos(days);
    }


    useEffect(() => {   
        const fetchData = async () => {
            const { data } = await api.fetchVideos()
            if (data !== undefined) {
                //console.log(data)
            }
        }
        fetchData()
    }, [])


    const [VideoPlaylistData, setVideoPlaylistData] = useState({
        "youtube_playlist_url": "",
        "video_description": "Ai used for this video: stable horde.\nSong credits:\nThis is an Ai interpreted version of the song ",
        "styles": ", stunning, disney concept art, pixar concept art, bloom, medium shot, dramatic lighting, in the style of studio ghibli, JC Leyendecker, Ilya Kuvshinov, Rossdraws, Conrad Roset",
        "thumbnail_style": ", album cover",
        "steps": 50,
        "length": "full",
        "categoryId": 10,
        "captions": false,
        "tags": "AI generated images, music video, stable diffusion, songs but every lyric is an ai generated image, every lyric is an ai generated image",
        "fullscreen": false,
        "fix_faces": false,
        "sampler": "k_euler_a",
        "negative_styles": " 3d, disfigured, bad art, deformed, poorly drawn, extra limbs, strange colors, blurry, boring, lackluster, repetitive, cropped, hands",
        "days_to_upload": days_to_upload_videos,
        "job_type": "videoPlaylist",
        })

    function submit_form() {
        //console.log(dispatch(testServerLocal()))
        if (VideoPlaylistData["youtube_url"] === "") {
            alert("needs youtube url")
            return
        }

        if (VideoPlaylistData["tags"] === "") {
            alert("add a tag")
            return
        }

        if (days_to_upload_videos.length === 0) {
            alert("add a day to upload video")
            return
        }
        VideoPlaylistData["days_to_upload"] = days_to_upload_videos
        
        setVideoPlaylistData({
            "youtube_playlist_url": "",
            "video_description": "Ai used for this video: stable horde.\nSong credits:\nThis is an Ai interpreted version of the song ",
            "styles": ", stunning, disney concept art, pixar concept art, bloom, medium shot, dramatic lighting, in the style of studio ghibli, JC Leyendecker, Ilya Kuvshinov, Rossdraws, Conrad Roset",
            "thumbnail_style": ", album cover",
            "steps": 50,
            "length": "full",
            "categoryId": 10,
            "captions": false,
            "tags": "AI generated images, music video, stable diffusion, songs but every lyric is an ai generated image, every lyric is an ai generated image",
            "fullscreen": false,
            "fix_faces": false,
            "sampler": "k_euler_a",
            "negative_styles": " 3d, disfigured, bad art, deformed, poorly drawn, extra limbs, strange colors, blurry, boring, lackluster, repetitive, cropped, hands",
            "days_to_upload": days_to_upload_videos,
            "job_type": "videoPlaylist",
            })
        
        api.createVideoPlaylistJob(VideoPlaylistData)
    }

    return (
        <div className=" lg:w-[500px] bg-slate-800 flex flex-col items-center text-white font-serif rounded-md h-auto mb-5 mt-5 gap-5 w-full">
            <h1 className=" text-2xl mt-5"> create video playlist job </h1>
            <form className=" lg:w-[80%] w-90 flex flex-col gap-5">
                <label>Youtube Playlist Url: <input className=" form_buttons" placeholder="youtube_playlist_url" value={VideoPlaylistData.youtube_playlist_url} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, youtube_playlist_url: e.target.value })} /> </label>
                <label>Video Description <input className=" form_buttons" placeholder="hello world" value={VideoPlaylistData.video_description} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, video_description: e.target.value })} /> </label>
                <label>Styles: <input className=" form_buttons" placeholder="digital artwork.." value={VideoPlaylistData.styles} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, styles: e.target.value })} /> </label>
                <label>Thumbnail Style: <input className=" form_buttons" placeholder="digital artwork.." value={VideoPlaylistData.thumbnail_style} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, thumbnail_style: e.target.value })} /> </label>
                <label>Negative Styles: <input className=" form_buttons" placeholder="bad artwork.." value={VideoPlaylistData.negative_styles} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, negative_styles: e.target.value })} /> </label>
                <label>length: <input className=" form_buttons" placeholder="full / 23(secs)" value={VideoPlaylistData.length} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, length: e.target.value })} /> </label>
                
                <label> Captions:
                    <select className=" form_buttons" value={VideoPlaylistData.captions} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, captions: e.target.value })}>
                        <option value="true">on</option>
                        <option value="false">off</option>
                    </select>
                </label>

                <label> Fix Faces:
                    <select className=" form_buttons" value={VideoPlaylistData.fix_faces} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, fix_faces: e.target.value })}>
                        <option value="true">on</option>
                        <option value="false">off</option>
                    </select>
                </label>

                <label> Fullscreen:
                    <select className=" form_buttons" value={VideoPlaylistData.fullscreen} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, fullscreen: e.target.value })}>
                        <option value="true">on</option>
                        <option value="false">off</option>
                    </select>
                </label>


                <label> Sampler:
                    <select className=" form_buttons" value={VideoPlaylistData.sampler} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, sampler: e.target.value })}>
                        <option value="k_euler_a">k_euler_a</option>
                    </select>
                </label>


                <label>Steps: <input type={"number"} className=" form_buttons" placeholder="50" value={VideoPlaylistData.steps} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, steps: e.target.value })} /> </label>
                <label>Tags: <input className=" form_buttons" placeholder="ai, music video, ...." value={VideoPlaylistData.tags} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, tags: e.target.value })}  /> </label>
                <label> Category:
                    <select className=" form_buttons" value={VideoPlaylistData.categoryId} onChange={(e) => setVideoPlaylistData({ ...VideoPlaylistData, categoryId: e.target.value })}>
                        <option value="1">Film & Animation</option>
                        <option value="2">Autos & Vehicles</option>
                        <option selected value="10">Music</option>
                        <option value="15">Pets & Animals</option>
                        <option value="17">Sports</option>
                        <option value="19">Travel & Events</option>
                        <option value="20">Gaming</option>
                        <option value="22">People & Blogs</option>
                        <option value="23">Comedy</option>
                        <option value="24">Entertainment</option>
                        <option value="25">News & Politics</option>
                        <option value="26">Howto & Style</option>
                        <option value="27">Education</option>
                        <option value="28">	Science & Technology</option>
                    </select>
                </label>

                <label>Days To Upload</label>
                <select className="  text-black" multiple={true} value={days_to_upload_videos} onChange={(e)=> {handleSelect(e.target.selectedOptions)}}>
                    <option value="Sunday">Sunday</option>
                    <option selected value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                </select>


            </form>
            <button onClick={() => submit_form()} className=" mt-5 bg-slate-600 mb-5 p-1 rounded-md"> Add Job </button>
        </div>
    )
}


export default VideoPlaylistJob

