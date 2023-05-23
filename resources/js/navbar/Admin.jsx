import { Routes, Route, NavLink } from 'react-router-dom';
import AuthUser from "../components/AuthUser";
import Home from "../components/Home";

export default function Admin() {
    const {token, logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined) {
            logout();
        }
    }
    const routesArr = [
        { path: '/dashboard', name: "Dashboard", Component: Home, exact: true },
    ];

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard" exact="true">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={logoutUser}>Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <Routes>
                    {routesArr.map(({path, Component, exact}) => (
                        <Route path={path} element={<Component />} key={path} exact={exact} />
                    ))}
                    <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
                </Routes>
            </div>
        </>
    )
}