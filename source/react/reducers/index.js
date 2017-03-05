const initialState = {
  language: 'english',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      const lang = action.language;

      return { language: lang }
    default:
      return state;
  }
};

export default reducer;
