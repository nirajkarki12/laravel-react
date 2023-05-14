import React from "react";
import ReactDOM from "react-dom";

export default function ReactApp() {
    return (
        <div>
            Hello from ReactApp Component
        </div>
    );
}

if (document.getElementById('react-app')) {
    ReactDOM.render(<ReactApp />, document.getElementById('react-app'));
}
