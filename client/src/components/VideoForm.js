import React from "react";
import { useState, useEffect } from "react";
import * as api from '../api/index.js'


//import * as api from '../api/index.js'


// image_zoom: Boolean,
// image_zoom_amount: Number,
// skip_videoplaylist_job: Boolean


const VideoForm = () => {

    useEffect(() => {   
        const fetchData = async () => {
            const { data } = await api.fetchVideos()
            if (data !== undefined) {
                //console.log(data)
            }
        }
        fetchData()
    }, [])


    const [VideoFromData, setVideoFromData] = useState({"youtube_url": "", "status": "Ready", "styles": ", stunning, disney concept art, pixar concept art, bloom, medium shot, dramatic lighting, in the style of studio ghibli, JC Leyendecker, Ilya Kuvshinov, Rossdraws, Conrad Roset", "thumbnail_style": ", album cover", "video_disc": "50", "steps": 50, "length": "full", "categoryId": 10, "captions": false, "tags": "auto", "thumbnail": "", "progress": {"current": 0, "total": 0}, "title": "", "fullscreen": true, "fix_faces": false, "sampler": "k_euler_a", "negative_styles": " 3d, disfigured, bad art, deformed, poorly drawn, extra limbs, strange colors, blurry, boring, lackluster, repetitive, cropped, hands", "job_type": "video", "image_zoom": true, "image_zoom_amount": 0.007, "skip_videoplaylist_job": true})

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
        setVideoFromData({"youtube_url": "", "status": "Ready", "styles": "stunning, disney concept art, pixar concept art, bloom, medium shot, dramatic lighting, in the style of studio ghibli, JC Leyendecker, Ilya Kuvshinov, Rossdraws, Conrad Roset","thumbnail_style": ", album cover", "video_disc": "50", "steps": 50, "length": "full", "categoryId": 10, "captions": false, "tags": "auto", "thumbnail": "", "progress": {"current": 0, "total": 0}, "title": "", "fullscreen": true, "fix_faces": false, "sampler": "k_euler_a", "negative_styles": " 3d, disfigured, bad art, deformed, poorly drawn, extra limbs, strange colors, blurry, boring, lackluster, repetitive, cropped, hands", "job_type": "video", "image_zoom": true, "image_zoom_amount": 0.007, "skip_videoplaylist_job": true})
        
        api.createVideo(VideoFromData)
    }


    return (
        <div className=" lg:w-[500px] bg-slate-800 flex flex-col items-center text-white font-serif rounded-md h-auto mb-5 mt-5 gap-5 w-full">
            <h1 className=" text-2xl mt-5"> create video </h1>
            <form className=" lg:w-[70%] w-90 flex flex-col gap-5">
                <label>Video Title: <input className=" form_buttons" placeholder="video title" value={VideoFromData.title} onChange={(e) => setVideoFromData({ ...VideoFromData, title: e.target.value })} /> </label>
                <label>Youtube url: <input className=" form_buttons" placeholder="youtube_url" value={VideoFromData.youtube_url} onChange={(e) => setVideoFromData({ ...VideoFromData, youtube_url: e.target.value })} /> </label>
                <label>Styles: <input className=" form_buttons" placeholder="digital artwork.." value={VideoFromData.styles} onChange={(e) => setVideoFromData({ ...VideoFromData, styles: e.target.value })} /> </label>
                <label>Thumbnail Style: <input className=" form_buttons" placeholder="digital artwork.." value={VideoFromData.thumbnail_style} onChange={(e) => setVideoFromData({ ...VideoFromData, thumbnail_style: e.target.value })} /> </label>
                <label>Negative Styles: <input className=" form_buttons" placeholder="bad artwork.." value={VideoFromData.negative_styles} onChange={(e) => setVideoFromData({ ...VideoFromData, negative_styles: e.target.value })} /> </label>
                <label>length: <input className=" form_buttons" placeholder="full / 23(secs)" value={VideoFromData.length} onChange={(e) => setVideoFromData({ ...VideoFromData, length: e.target.value })} /> </label>
                
                <label> Captions:
                    <select className=" form_buttons" value={VideoFromData.captions} onChange={(e) => setVideoFromData({ ...VideoFromData, captions: e.target.value })}>
                        <option value="true">on</option>
                        <option value="false">off</option>
                    </select>
                </label>

                <label> Fix Faces:
                    <select className=" form_buttons" value={VideoFromData.fix_faces} onChange={(e) => setVideoFromData({ ...VideoFromData, fix_faces: e.target.value })}>
                        <option value="true">on</option>
                        <option value="false">off</option>
                    </select>
                </label>

                <label> Fullscreen:
                    <select className=" form_buttons" value={VideoFromData.fullscreen} onChange={(e) => setVideoFromData({ ...VideoFromData, fullscreen: e.target.value })}>
                        <option value="true">on</option>
                        <option value="false">off</option>
                    </select>
                </label>


                <label> Sampler:
                    <select className=" form_buttons" value={VideoFromData.sampler} onChange={(e) => setVideoFromData({ ...VideoFromData, sampler: e.target.value })}>
                        <option value="k_euler_a">k_euler_a</option>
                    </select>
                </label>


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

                <label> Image Zoom:
                    <select className=" form_buttons" value={VideoFromData.image_zoom} onChange={(e) => setVideoFromData({ ...VideoFromData, image_zoom: e.target.value })}>
                        <option value="true">on</option>
                        <option value="false">off</option>
                    </select>
                </label>

                <label>Zoom Amount: <input type={"number"} className=" form_buttons" placeholder="50" value={VideoFromData.image_zoom_amount} onChange={(e) => setVideoFromData({ ...VideoFromData, image_zoom_amount: e.target.value })} /> </label>

                <label> skip videoplaylist job:
                    <select className=" form_buttons" value={VideoFromData.skip_videoplaylist_job} onChange={(e) => setVideoFromData({ ...VideoFromData, skip_videoplaylist_job: e.target.value })}>
                        <option value="true">on</option>
                        <option value="false">off</option>
                    </select>
                </label>

            </form>
            <button onClick={() => submit_form()} className=" mt-5 bg-slate-600 mb-5 p-1 rounded-md"> Add Job </button>
        </div>
    )
}


export default VideoForm

