import 'bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from "./components/header";
import RegisterForm from "./components/forms/registerForm";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Home from "./components/home";
import ProfileScreen from "./components/profile";


const React = require('react');

class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter forceRefresh={false}>
                    <Header/>
                    <Route path="/home" component={Home}/>
                    <Route path="/profile" component={ProfileScreen}/>
                    <Route path="/organizations" component={Home}/>
                    <Route path="/my-orders" component={Home}/>
                    <AuthenticatedRoute path="/my-orders" component={Home}/>
                    <Route path="/register" component={RegisterForm}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
