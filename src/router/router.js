import RegisterPage from "../Pages/register/registerPage";
import EventsAttended from "../Pages/events/attended/eventsAttended";
import EventsAttending from "../Pages/events/attending/eventsAttending";
import Navbar from "../components/generic/Navbar";

const { Switch, Route } = require("react-router-dom");

function Routes() {
  return (
    <Switch>
      <Route path='/register' component={RegisterPage} />
      <Route path='/events/attended' component={EventsAttended} />
      <Route path='/events/attending' component={EventsAttending} />
    </Switch>
  );
}

export default Routes;
