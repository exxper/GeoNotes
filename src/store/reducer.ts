import { combineReducers } from '@reduxjs/toolkit';

import { loginSlice } from '../features/login';

export default combineReducers({
  login: loginSlice,
});
