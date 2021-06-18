/* eslint-disable semi */
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      }
    default: state;
  }
};

export default reducer;
