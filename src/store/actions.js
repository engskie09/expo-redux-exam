
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

export const fetchData = () => {
  return async (dispatch) => {  
    dispatch(isFetching());
    await fetch(`https://automation.orangedigital.au/api/od/challenge/react/redux/challenge-endpoint`).then(async response => {
      const json = await response.json();

      dispatch(getPhotos(json.photos));
      dispatch(isFetched())
    })
  } 
}