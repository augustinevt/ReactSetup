const initialState = {
  message: 'default message',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_MESSAGE':
      const message = action.message;

      return { message }
    default:
      return state;
  }
};

export default reducer;
