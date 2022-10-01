import React from "react";
import { useState, useEffect } from "react";
import * as api from '../api/index.js'


//import * as api from '../api/index.js'


const VideoForm = () => {

    useEffect(() => {   
        const fetchData = async () => {
            const { data } = await api.fetchVideos()
            if (data !== undefined) {
                console.log(data)
            }
        }
        fetchData()
    }, [])


    const [VideoFromData, setVideoFromData] = useState({"youtube_url": "", "status": "Ready", "styles": ", by gregory manchess, digital illustration, trending on artstation hq, elegant.", "video_disc": "50", "steps": 50, "length": "full", "categoryId": 10, "captions": false, "tags": "", "thumbnail": "", "progress": 0, "title": "" })

    function submit_form() {
        //console.log(dispatch(testServerLocal()))
        if (VideoFromData["youtube_url"] === "") {
            alert("needs youtube url")
            return
        }
        if (VideoFromData["tags"] === "") {
            alert("add a tag")
            return
        }
        setVideoFromData({"youtube_url": "", "status": "Ready", "styles": ", by gregory manchess, digital illustration, trending on artstation hq, elegant.", "video_disc": "50", "steps": 50, "length": "full", "categoryId": 10, "captions": false, "tags": "", "thumbnail": "", "progress": 0, "title": "" })
        
        api.createVideo(VideoFromData)
    }


    return (
        <div className=" lg:w-[500px] bg-slate-800 flex flex-col items-center text-white font-serif rounded-md h-auto mb-5 mt-5 gap-5 w-full">
            <h1 className=" text-2xl mt-5"> video form </h1>
            <form className=" lg:w-[70%] w-90 flex flex-col gap-5">
                <label>Video Title: <input className=" form_buttons" placeholder="youtube_url" value={VideoFromData.title} onChange={(e) => setVideoFromData({ ...VideoFromData, title: e.target.value })} /> </label>
                <label>Youtube url: <input className=" form_buttons" placeholder="youtube_url" value={VideoFromData.youtube_url} onChange={(e) => setVideoFromData({ ...VideoFromData, youtube_url: e.target.value })} /> </label>
                <label>Styles: <input className=" form_buttons" placeholder="digital artwork.." value={VideoFromData.styles} onChange={(e) => setVideoFromData({ ...VideoFromData, styles: e.target.value })} /> </label>
                <label>length: <input className=" form_buttons" placeholder="full / 23(secs)" value={VideoFromData.length} onChange={(e) => setVideoFromData({ ...VideoFromData, length: e.target.value })} /> </label>
                <label>Captions: <input type={"checkbox"} checked={VideoForm.captions} className=" form_buttons" value={VideoFromData.captions} onChange={(e) => setVideoFromData({ ...VideoFromData, captions: !VideoFromData.captions})} /> </label>
                <label>Steps: <input type={"number"} className=" form_buttons" placeholder="50" value={VideoFromData.steps} onChange={(e) => setVideoFromData({ ...VideoFromData, steps: e.target.value })} /> </label>
                <label>Tags: <input className=" form_buttons" placeholder="ai, music video, ...." value={VideoFromData.tags} onChange={(e) => setVideoFromData({ ...VideoFromData, tags: e.target.value })}  /> </label>
                <label> Category:
                    <select className=" form_buttons" value={VideoFromData.categoryId} onChange={(e) => setVideoFromData({ ...VideoFromData, categoryId: e.target.value })}>
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
            </form>
            <button onClick={() => submit_form()} className=" mt-5 bg-slate-600 mb-5 p-1 rounded-md"> Submit </button>
        </div>
    )
}


export default VideoForm

