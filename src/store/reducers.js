const initialState = {
  photos: [],
  videos: [],
  details: [],
  comments: [],
  isFetching: false,
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'IS_FETCHING':
      return { ...state, isFetching: true };
    case 'IS_FETCHED':
      return { ...state, isFetching: false };
    case 'GET_PHOTOS':
      return { ...state, photos: action.payload, type: action.type };
    case 'GET_VIDEOS':
      return { ...state, videos: action.payload, type: action.type };
    case 'GET_DETAILS':
      return { ...state, details: action.payload, type: action.type };
    case 'GET_COMMENTS':
      return { ...state, comments: action.payload, type: action.type };
    default:
      return state;
  }
}

export default mainReducer;