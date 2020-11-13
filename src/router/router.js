import DemoPage from '../Pages/Page1'
const { Switch, Route } = require("react-router-dom");

function Routes() {
    return (
        <Switch>
            <Route path="/demo" component={ DemoPage } />
        </Switch>
    )
}

export default Routes;