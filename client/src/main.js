import React, { useState } from "react";
import Header from "./components/Header";
import VideoForm from "./components/VideoForm";
import AiStatus from "./components/AiStatus";
import VideoPlaylistJob from "./components/VideoPlaylistJob";
import './input.css'


const Main = () => {


    const [VideoJobState, setVideoJobVisibility] = useState(true)
    const [VideoPlaylistJobState, setVideoPlaylistJobVisibility] = useState(false)


    const show_current_job_menu = () => {
        setVideoJobVisibility(!VideoJobState)
        setVideoPlaylistJobVisibility(!VideoPlaylistJobState)
    }


    return (
    <div className="flex flex-col w-full h-auto bg-slate-600 min-h-screen gap-5 items-center">
        <Header toggle_menu={show_current_job_menu} />
        
        {VideoJobState === true  && 
            <VideoForm />
        }
        {VideoJobState === true &&
            <AiStatus />
        }
        {VideoPlaylistJobState === true &&
            <VideoPlaylistJob />
        }
    </div>
    )
}

export default Main