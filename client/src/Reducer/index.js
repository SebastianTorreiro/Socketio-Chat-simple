const initialState = {
  user: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.payload) {
    case a: {
      return;
    }
    default:
      return { ...state };
  }
}
