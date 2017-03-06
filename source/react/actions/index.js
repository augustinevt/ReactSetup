import api from '../helpers/api';

export const changeMessage = message => (dispatch, getState) => {
  console.log('hello from the action', api)
  api.default.get().then((data) => {
    dispatch({ type: 'CHANGE_MESSAGE', message: data.body });
  });
};
