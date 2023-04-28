const initialState = {
  user: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.payload) {
    case '': {
      return;
    }
    default:
      return { ...state };
  }
}
