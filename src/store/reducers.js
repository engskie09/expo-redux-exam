const initialState = {
  photos: [],
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'ACTION_HERE':
      return { ...state };
    default:
      return state;
  }
}

export default mainReducer;