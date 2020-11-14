import DemoPage from "../Pages/Page1";
import RegisterPage from "../Pages/register/registerPage";
const { Switch, Route } = require("react-router-dom");

function Routes() {
  return (
    <Switch>
      <Route path="/demo" component={DemoPage} />
      <Route path="/register" component={RegisterPage} />
    </Switch>
  );
}

export default Routes;
