/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import App from './App';
import AdminLayout from "layouts/Admin.jsx";

// class Root extends React.Component {
//     state = {
//         loading: true
//     };
//
//     componentDidMount() {
//         // this simulates an async action, after which the component will render the content
//         demoAsyncCall().then(() => this.setState({loading: false}));
//     }
//
//     render() {
//         const {loading} = this.state;
//
//         if (loading) { // if your component doesn't have to wait for async data, remove this block
//             return null; // render null when app is not ready
//         }
//
//         return (
//             <div>I'm the app</div>
//         );
//     }
// }
//
// function demoAsyncCall() {
//     return new Promise((resolve) => setTimeout(() => resolve(), 2500));
// }

ReactDOM.render(
    // <Root />,
    <BrowserRouter>
        <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />} />
            <Route path="/">
                <App />
            </Route>
            {/*<Redirect from="/" to="/admin/dashboard" />*/}
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
