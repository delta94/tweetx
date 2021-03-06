import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Head from './components/head/Head';
import Navbar from './components/layouts/Navbar';
import HamburgerMenu from './components/hamburger/HamburgerMenu';
import Routes from './components/routing/Routes';
import store from './store';
import { loadUser } from './actions/auth';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Head />
          <Navbar />
          <HamburgerMenu />
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
