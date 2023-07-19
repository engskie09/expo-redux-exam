
export const isFetching = () => {
  return {
    type: 'IS_FETCHING',
  }
}

export const isFetched = () => {
  return {
    type: 'IS_FETCHED',
  }
}

export const getPhotos = (photos) => {
  return {
    type: 'GET_PHOTOS',
    payload: photos,
  }
}

export const getVideos = (videos) => {
  return {
    type: 'GET_VIDEOS',
    payload: videos,
  }
}

export const getDetails = (details) => {
  return {
    type: 'GET_DETAILS',
    payload: details,
  }
}

export const getComments = (comments) => {
  return {
    type: 'GET_COMMENTS',
    payload: comments,
  }
}

export const fetchData = () => {
  return async (dispatch) => {  
    dispatch(isFetching());
    await fetch(`https://automation.orangedigital.au/api/od/challenge/react/redux/challenge-endpoint`).then(async response => {
      const json = await response.json();

      dispatch(getPhotos(json.photos));
      dispatch(getVideos(json.videos));
      dispatch(getDetails(json.details));
      dispatch(getComments(json.comments));
      dispatch(isFetched())
    })
  } 
}