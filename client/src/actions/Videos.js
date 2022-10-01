import * as api from '../api/index.js'


export const testServerLocal = () =>  async () => {
    try {
        const { data } = await api.fetchVideos();
        console.log(data)
        console.log("here")
        return data

    } catch (error) {
        console.log(error)
    }
}

export const AddVideo = (video) => async (dispatch) => {
    try {
      const { data } = await api.createVideo(video);
      dispatch({ payload: data });

    } catch (error) {
      console.log(error);
    }
  };

export default testServerLocal