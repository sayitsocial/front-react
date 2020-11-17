import React from "react";
import { withRouter } from "react-router-dom";
import Routes from "./router/router";
import { Route, Switch } from "react-router-dom";

const { routesMain, routesNav, routesFooter } = Routes();

class App extends React.Component {
  render() {
    return (
      <>
        <div
          className='n
        avbar'
        >
          <Switch>
            {routesNav.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.topbar}
              />
            ))}
          </Switch>
        </div>

        <div className='main'>
          <Switch>
            {routesMain.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.main}
              />
            ))}
          </Switch>
        </div>

        <div className='footer'>
          <Switch>
            {routesFooter.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.footer}
              />
            ))}
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(App);
