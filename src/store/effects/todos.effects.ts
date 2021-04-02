import { put, takeEvery, call } from 'redux-saga/effects';
import { TodosService } from '../../shared/services/todos.service';
import {
  todosGet,
  todosGetSuccess,
  todosGetFailed,
} from '../reducers/todos.reducer';
import { uiSnackbarOpen } from '../reducers/ui.reducer';

/**
 * todosGetEffect.
 * @param {action} action Action.
 */
function* todosGetEffect(action: any) {
  try {
    const { todos } = yield call(TodosService.todosGet);
    yield put(
      todosGetSuccess({
        todos,
      })
    );
  } catch (errorMessage) {
    yield put(todosGetFailed({ errorMessage }));
  }
}

/**
 * todosGetSuccessEffect.
 * @param {action} action Action.
 */
function* todosGetSuccessEffect(action: any) {
  yield put(
    uiSnackbarOpen({
      severity: 'success',
      message: 'Todos loaded.',
    })
  );
}
// /**
//  * todosGetEffect.
//  * @param {action} action Action.
//  */
// function* todosGetEffect(action: any) {
//   const { page, pageSize } = action.payload;
//   try {
//     const { total, todos } = yield call(TodosService.todosGet, page, pageSize);
//     yield put(
//       todosGetSuccess({
//         total,
//         todos,
//       })
//     );
//   } catch (errorMessage) {
//     yield put(todosGetFailed({ errorMessage }));
//   }
// }

// /**
//  * todosDeleteEffect.
//  * @param {action} action Action.
//  */
// function* todosDeleteEffect(action: any): any {
//   const { id } = action.payload;
//   try {
//     const todos = yield call(TodosService.todosDelete, id);
//     yield put(
//       todosDeleteSuccess({
//         todos,
//       })
//     );
//   } catch (errorMessage) {
//     yield put(todosDeleteFailed({ errorMessage }));
//   }
// }

/**
 * watchTodosActions.
 */
function* watchTodosActions() {
  yield takeEvery(todosGet, todosGetEffect);
  yield takeEvery(todosGetSuccess, todosGetSuccessEffect);
  // yield takeEvery(todosDelete, todosDeleteEffect);
}

export default watchTodosActions;
