import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.route.map((data, i) => (
            <Route key={i} path={data.path} exact={data.exact} component={data.component}></Route>
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
