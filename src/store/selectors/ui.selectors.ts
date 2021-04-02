import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';
import { UiState } from '../reducers/ui.reducer';

const selectFeatureUi = (state: RootState) => state.ui as UiState;

export const selectUiSnackbarOpen = createSelector(
  selectFeatureUi,
  (state) => state.snackbar.open
);
export const selectUiSnackbarSeverity = createSelector(
  selectFeatureUi,
  (state) => state.snackbar.severity
);
export const selectUiSnackbarMessage = createSelector(
  selectFeatureUi,
  (state) => state.snackbar.message
);
