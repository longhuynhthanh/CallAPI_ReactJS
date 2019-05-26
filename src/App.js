import React from 'react';
import Navigation from './components/Menu/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routes from './routes';
class App extends React.Component {
    render() {
        const elm = routes.map((route, index) => {
            return (
                <Route 
                    key = {index}
                    path = {route.path}
                    exact = {route.exact}
                    component = {route.main}
                />
            );
        });
        return (
            <Router>
                <Navigation />
                <Switch>
                    {elm}
                </Switch>
            </Router>
        );
    }
}

export default App;
