//
// export const changeLanguage = language => (dispatch, getState) => {
//   console.log('actions', getState())
//   dispatch({
//     type: 'CHANGE_LANGUAGE',
//     language,
//   });
// };

export const changeLanguage = (language) => {
  console.log(language);

  return {
    type: 'CHANGE_LANGUAGE',
    language,
  };
};
