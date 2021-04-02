import { AppBar, Button, Toolbar } from '@material-ui/core';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';

const Header: React.FC<any> = () => {
  // const loggedIn = useSelector(selectAuthLoggedIn);
  // const username = useSelector(selectAuthUsername);
  // const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Toolbar className="flex flex-row justify-between">
        <IconButton edge="start" color="inherit" aria-label="menu">
          React App
          {/* <MenuIcon /> */}
        </IconButton>
        <div>
          {/* <Typography variant="h6">React App</Typography> */}
          <NavLink activeClassName="text-purple-700 font-bold" to={'/login'}>
            <Button color="inherit">Login</Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
    // <header className="bg-purple-600 p-4 text-purple-200 font-black flex flex-row flex-wrap justify-between items-center">
    //   <h1>React application</h1>
    //   {/* {!loggedIn && <div id="loginButton"></div>} */}
    //   {/* {loggedIn && <button onClick={logOut}>{username}</button>} */}
    // </header>`
  );
};

export default Header;
