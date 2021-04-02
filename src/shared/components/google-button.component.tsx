import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  authSetLoggedIn,
  authSetUsername,
} from '../../store/reducers/auth.reducer';
import { uiSnackbarOpen } from '../../store/reducers/ui.reducer';
import {
  selectAuthLoggedIn,
  selectAuthUsername,
} from '../../store/selectors/auth.selectors';

declare const gapi: any;

/**
 * logOut
 */
// function logOut() {
//   gapi.auth2.getAuthInstance().disconnect();
//   dispatch(authSetLoggedIn({ loggedIn: false }));
//   gapi.signin2.render('loginButton', {
//     width: 200,
//     height: 50,
//     onsuccess: (profile: any) => {
//       console.log(profile);
//       dispatch(authSetLoggedIn({ loggedIn: true }));
//       dispatch(authSetUsername({ username: profile.Qs.AT }));
//     },
//   });
// }

/**
 * logOut
 * @param {dispatch} dispatch
 */
function logOut(dispatch: any) {
  gapi.auth2.getAuthInstance().disconnect();
  dispatch(authSetLoggedIn({ loggedIn: false }));
  dispatch(uiSnackbarOpen({ message: 'Logged out.', severity: 'info' }));
}

/**
 * googleInit
 * @param {dispatch} dispatch
 */
function googleInit(dispatch: any) {
  console.log('google init');
  gapi.load('auth2', function () {
    console.log('gapi.load');
    gapi.auth2.init({
      client_id: process.env.REACT_APP_CLIENT_ID,
    });
  });

  gapi.load('signin2', function () {
    gapi.signin2.render('loginButton', {
      width: 200,
      height: 50,
      onsuccess: (profile: any) => {
        console.log('onsuccess');
        console.log(profile);
        dispatch(authSetLoggedIn({ loggedIn: true }));
        dispatch(authSetUsername({ username: profile.Qs.AT }));
        dispatch(uiSnackbarOpen({ message: 'Logged in.', severity: 'success' }));
      },
    });
  });
}

const GoogleButton: React.FC<any> = () => {
  const loggedIn = useSelector(selectAuthLoggedIn);
  const username = useSelector(selectAuthUsername);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('load', () => {
      console.log('wwindow onload');
      googleInit(dispatch);
    });
  }, []);

  return (
    <React.Fragment>
      <div id="loginButton"></div>
      {/* {!loggedIn && <div id="loginButton"></div>} */}
      {loggedIn && (
        <button
          onClick={() => {
            logOut(dispatch);
          }}
        >
          {username}
        </button>
      )}
    </React.Fragment>
  );
};

export default GoogleButton;
