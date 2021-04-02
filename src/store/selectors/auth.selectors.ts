import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';
import { AuthState } from '../reducers/auth.reducer';

const selectFeatureAuth = (state: RootState) => state.auth as AuthState;

export const selectAuthLoggedIn = createSelector(
  [selectFeatureAuth],
  (state) => state.loggedIn
);
export const selectAuthUsername = createSelector(
  [selectFeatureAuth],
  (state) => state.user.username
);
