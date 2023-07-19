const initialState = {
  photos: [],
  videos: [],
  details: [],
  comments: [],
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PHOTOS':
      return { ...state.photos, type: action.type };
    case 'GET_VIDEOS':
      return { ...state.videos, type: action.type };
    case 'GET_DETAILS':
      return { ...state.details, type: action.type };
    case 'GET_COMMENTS':
      return { ...state.comments, type: action.type };
    default:
      return state;
  }
}

export default mainReducer;