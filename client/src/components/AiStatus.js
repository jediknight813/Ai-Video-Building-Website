import React from "react";
import { useState, useEffect } from "react";
import * as api from '../api/index.js'


const AiStatus = () => {
    const [videoData, setVideoData] = useState()
    const [refresh, setRefresh] = useState(false)


    useEffect(() => {   
        const fetchData = async () => {
            const { data } = await api.fetchVideos()
            if (data !== undefined) {
                //console.log(data)
                setVideoData(data.reverse())
            }
        }
        fetchData()
    }, [refresh])

    function isWhatPercentOf(numA, numB) {
        return (numA / numB) * 100;
    }


    function deleteVideoFromServer(id) {
        api.deleteVideo(id)
        setRefresh(!refresh)
    }

    return (
        <div>
            {videoData !== undefined &&
                <div className=" flex flex-col lg:w-[500px] overflow-hidden max-w-full items-center text-white gap-5 mb-20 font-serif rounded-md">
                    <h1 className=" text-2xl">Video Queue</h1>
                    <button onClick={() => setRefresh(!refresh)} className=" mt-1 bg-slate-800 mb-1 p-1 rounded-md">Refresh</button>
                    {videoData.map((video) => (
                         <div className=" w-full bg-slate-800 rounded-md">
                            {video["status"] !== "Rendering" && 
                                <div className=" w-full flex justify-end gap-5 p-2 ">
                                    {/*<button className=" bg-slate-600 p-1 rounded-md text-white"> Edit </button>*/}
                                    <button onClick={() => deleteVideoFromServer(video["_id"])} className=" bg-slate-600 p-1 rounded-md text-white"> Delete </button>
                                </div>
                            }
                            <div className="max-w-full flex items-center justify-center pt-2 pb-4">
                                <div className=" min-h-[100px] h-auto w-[95%] overflow-hidden">
                                    <label className=" flex gap-2 p-2 text-sm ">Title:  <h1> {video["title"]}</h1></label>
                                    <label className=" flex gap-2 p-2 text-sm ">Steps:  <h1> {video["steps"]}</h1></label>
                                    <label className=" flex gap-2 p-2 text-sm ">Styles:  <h1> {video["styles"]}</h1></label>
                                    <label className=" flex gap-2 p-2 text-sm ">Negative Styles:  <h1> {video["negative_styles"]}</h1></label>
                                    <label className=" flex gap-2 p-2 text-sm ">Captions:  <h1>  {video["captions"] !== false && <h1> on </h1>} {video["captions"] === false && <h1> off </h1>} </h1></label>
                                    <label className=" flex gap-2 p-2 text-sm ">Fullscreen:  <h1>  {video["fullscreen"] !== false && <h1> on </h1>} {video["fullscreen"] === false && <h1> off </h1>} </h1></label>
                                    <label className=" flex gap-2 p-2 text-sm ">Fix Faces:  <h1>  {video["fix_faces"] !== false && <h1> on </h1>} {video["fix_faces"] === false && <h1> off </h1>} </h1></label>
                                    <label className=" flex gap-2 p-2 text-sm ">Sampler:  <h1> {video["sampler"]}</h1></label>
                                    <label className=" flex gap-2 p-2 text-sm ">Category:  <h1> {video["categoryId"]}</h1></label>
                                    <label className=" flex gap-2 p-2 text-sm ">Tags:  <h1> {video["tags"]}</h1></label>
                                    {video["status"] === "Rendering"  && 
                                        <h1 className=" pl-[41%] items-center"> Progress: {isWhatPercentOf(video["progress"]["current"],video["progress"]["total"] )}%</h1>
                                    }
                                </div>
                                {/* <div className=" flex flex-col items-center min-h-[200px] h-auto bg-slate-700 w-[50%]">
                                    <h1>Thumbnail</h1>
                                    {video["thumbnail"] !== ""  && 
                                        <img className=" w-auto h-auto" alt="video thumbnail" src={`${video["thumbnail"]}`}/>
                                    }
                                    {video["thumbnail"] === ""  && 
                                        <h2>Thumbnail not rendered.</h2>
                                    }
                                </div> */}
                            </div>

                            <div className=" w-full h-10 flex rounded-b-md">
                                {video["status"] === "Ready"  && 
                                    <div className=" w-full h-full bg-gray-700 rounded-b-md flex items-center justify-center">Ready</div>
                                }
                                {video["status"] === "Finished"  && 
                                    <div className=" w-full h-full bg-green-700 rounded-b-md flex items-center justify-center">Finished</div>
                                }
                                {video["status"] === "Failed"  && 
                                    <div className=" w-full h-full bg-red-700 rounded-b-md flex items-center justify-center">Failed</div>
                                }
                                {video["status"] === "Rendering"  && 
                                    <div className=" w-full h-full bg-orange-700 rounded-b-md flex items-center justify-center">Rendering</div>
                                }
                            </div>
                        </div>

                    ))}  
                </div>
            }
        </div>
    )
}


export default AiStatus
