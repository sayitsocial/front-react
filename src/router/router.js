import RegisterPage from "../Pages/register/registerPage";
const { Switch, Route } = require("react-router-dom");

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={RegisterPage} />
    </Switch>
  );
}

export default Routes;
