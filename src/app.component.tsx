import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.component.css';
import './index.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './shared/components/header.component';
import Footer from './shared/components/footer.component';
import Navigation from './shared/components/navigation.component';
import HomeContainer from './features/home';
import ProfileContainer from './features/profile';
import TodosContainer from './features/todos';
import { selectAuthLoggedIn } from './store/selectors/auth.selectors';
import LoginContainer from './features/login';
import { Button } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { uiSnackbarOpen } from './store/reducers/ui.reducer';
import { toast } from 'react-toastify';
import GridContainer from './features/grid';
/**
 * App component
 * @return {App} component.
 */
const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const loggedIn = useSelector(selectAuthLoggedIn);

  useEffect(() => {
    toast.configure();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(
            uiSnackbarOpen({
              severity: 'error',
              message: 'Test error message',
            })
          );
        }}
      >
        Show warning
      </Button>

      <main className="flex-grow p-4">
        <Switch>
          <Route path="/home" component={HomeContainer} />
          <Route path="/grid" component={GridContainer} />
          <Route path="/login" component={LoginContainer} />
          {loggedIn ? (
            <Route path="/todos" component={TodosContainer} />
          ) : (
            <Redirect to="/login" />
          )}
          {loggedIn ? (
            <Route path="/profile" component={ProfileContainer} />
          ) : (
            <Redirect to="/login" />
          )}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/signin-redirect">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
