import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Hamburger from './components/layouts/Hamburger';
import Feed from './components/feed/Feed';
import Profile from './components/profile/Profile';
import ProfileFollowers from './components/profile/ProfileFollowers';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Hamburger />
        <div id="main" className="container">
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/profile" component={Profile} />
            <Route
              exact
              path="/profile-followers"
              component={ProfileFollowers}
            />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
