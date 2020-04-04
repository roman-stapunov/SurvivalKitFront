import 'bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from "./components/header";
import RegisterForm from "./components/forms/registerForm";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Home from "./components/home";


const React = require('react');

class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter forceRefresh={false}>
                    <Header/>
                    <Route path="/home" component={Home}/>
                    <AuthenticatedRoute path="/profile" component={Home}/>
                    <AuthenticatedRoute path="/organizations" component={Home}/>
                    <AuthenticatedRoute path="/my-orders" component={Home}/>
                    <Route path="/register" component={RegisterForm}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
