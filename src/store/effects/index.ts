import watchAuthActions from './auth.effects';
import { all } from 'redux-saga/effects';
import watchTodosActions from './todos.effects';

/**
 * Root saga pattern
 * https://redux-saga.js.org/docs/advanced/RootSaga.html
 */
export default function* effects() {
  yield all([watchAuthActions(), watchTodosActions()]);
}
