import DemoPage from '../Pages/Page1'
import Event from '../Pages/event/Event'

const { Switch, Route } = require("react-router-dom");

function Routes() {
    return (
        <Switch>
            <Route path="/demo" component={ DemoPage } />
            <Route path="/event" component={ Event } />
        </Switch>
    )
}

export default Routes;