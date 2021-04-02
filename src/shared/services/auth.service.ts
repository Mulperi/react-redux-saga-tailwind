// declare const gapi: any;

// gapi.load('auth2', function () {
//   console.log('auth2');
//   gapi.auth2.init({
//     client_id: process.env.REACT_APP_CLIENT_ID,
//   });
// });

// gapi.load('signin2', function () {
//   console.log('signin2');
//   gapi.signin2.render('loginButton', {
//     width: 200,
//     height: 50,
//     onsuccess: (profile: any) => {
//       console.log('onsuccess');
//       console.log(profile);
//     },
//   });
// });

/**
 * AuthService.
 */
export class AuthService {
  //   /**
  //    * googleSignIn.
  //    */
  //   static googleInit(): any {
  //     console.log('googleInit');
  //     gapi.load('auth2').then((asd: any) => {
  //       console.log('asd', asd);
  //     });
  //     // gapi
  //     //   .load('auth2', function () {
  //     //     console.log('auth2');
  //     //     return resolve(gapi.auth2.GoogleAuth);
  //     //     gapi.auth2.init({
  //     //       client_id: process.env.REACT_APP_CLIENT_ID,
  //     //     });
  //     //   })
  //     gapi.load('signin2', function () {
  //       console.log('signin2');
  //       gapi.signin2.render('loginButton', {
  //         width: 200,
  //         height: 50,
  //         onsuccess: (profile: any) => {
  //           console.log('onsuccess');
  //           console.log(profile);
  //         },
  //       });
  //     });
  //   }
  /**
  //  * googleSignIn.
  //  * @return {Promise} of wanted page
  //  */
  // static googleSignIn(): any {
  //   console.log('googleSignIn');
  //   return new Promise((resolve) => {
  //     resolve(() => {
  //       console.log('resolve');
  //       /** After google auth library is loaded. */
  //       gapi.load('auth2', function () {
  //         gapi.auth2.init({
  //           client_id:
  //             '736940532233-j9rku8qqqokfrkhshfcfr2n8ao3nf5c1.apps.googleusercontent.com',
  //         });
  //       });
  //       gapi.load('signin2', function () {
  //         // render a sign in button
  //         // using this method will show Signed In if the user is already signed in
  //         gapi.signin2.render('loginButton', {
  //           width: 200,
  //           height: 50,
  //           onSuccess: (profile: any) => {
  //             console.log(profile);
  //           },
  //         });
  //       });
  //     });
  //   });
  // }
}
