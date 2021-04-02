import { takeEvery } from 'redux-saga/effects';
// import { AuthService } from '../../shared/services/auth.service';
import { authGoogleInit } from '../reducers/auth.reducer';

// declare const gapi: any;

// /**
//  * App component
//  * @param {dispatch} dispatch dispatch.
//  */
// export function googleInit(dispatch: any) {
//   gapi.load('auth2', function () {
//     gapi.auth2.init({
//       client_id: process.env.REACT_APP_CLIENT_ID,
//     });
//   });
//   gapi.load('signin2', function () {
//     gapi.signin2.render('loginButton', {
//       width: 200,
//       height: 50,
//       onsuccess: (profile: any) => {
//         console.log(profile);
//         dispatch();
//         dispatch();
//       },
//     });
//   });
// }

/**
 *authGoogleInitEffect.
 * @param {action} action Action.
 */
function* authGoogleInitEffect(action: any) {
  console.log('authGoogleInitEffect');

  // const { profile } = yield call(AuthService.googleInit);
  // console.log(profile);

  try {
    // const { profile } = yield call(AuthService.googleSignIn);
    // yield all([
    //   put(authSetLoggedIn({ loggedIn: true })),
    //   put(authSetUsername({ username: profile.Qs.AT })),
    // ]);
  } catch (errorMessage) {
    // yield put(googleSignInFailed({ errorMessage }));
  }
}

// /**
//  *authGoogleInitEffect.
//  * @param {action} action Action.
//  */
// function* authGoogleInitEffect(action: any) {
//   //   const { page, pageSize } = action.payload;
//   try {
//     const { profile } = yield call(AuthService.googleSignIn);
//     yield put(googleSignInSuccess({ profile }));
//   } catch (errorMessage) {
//     // yield put(googleSignInFailed({ errorMessage }));
//   }
// }

/**
 * watchTodosActions.
 */
function* watchAuthActions() {
  yield takeEvery(authGoogleInit, authGoogleInitEffect);
}

export default watchAuthActions;
