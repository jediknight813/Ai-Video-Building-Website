import React from "react";



const Header = (toggle_menu) => {


    return (
        <div className="bg-slate-800 w-full h-14 flex font-serif items-center justify-center shadow-2xl text-white drop-shadow-2xl">
            <h1 className="ml-5">Ai-Video-Builder</h1>
            <button className=" ml-auto mr-5 cursor-pointer font-sans font-extralight" onClick={() => toggle_menu['toggle_menu']()}>video jobs</button>
            <button className="mr-5 cursor-pointer font-sans font-extralight"  onClick={() => toggle_menu['toggle_menu']()} >video playlist jobs</button>
        </div>
    )
}

//setVideoPlaylistJobVisibility['show_video_playlist_job'](true)}
export default Header
