import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Guest from '../navbar/Guest';

export default function ReactApp() {
    return (
        <Guest />
    );
}

if (document.getElementById('react-app')) {
    ReactDOM.render(<ReactApp />, document.getElementById('react-app'));
}
