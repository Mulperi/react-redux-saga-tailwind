import { combineReducers } from '@reduxjs/toolkit';
import todos from './reducers/todos.reducer';
import auth from './reducers/auth.reducer';
import ui from './reducers/ui.reducer';

const rootReducer = combineReducers({
  todos,
  auth,
  ui,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
