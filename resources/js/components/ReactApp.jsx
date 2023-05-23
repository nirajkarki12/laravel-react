import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from "./AuthUser";
import Guest from '../navbar/Guest';
import Admin from "../navbar/Admin";

export default function ReactApp() {
    const {getToken} = AuthUser();

    if(!getToken()) {
        return <Guest />
    } else {
        return <Admin />
    }
}

if (document.getElementById('react-app')) {
    ReactDOM.render(
        <BrowserRouter basename="/laravel-react/public/">
            <ReactApp />
        </BrowserRouter>
    , document.getElementById('react-app'));
}
