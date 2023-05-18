import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';

function Guest() {
    const routesArr = [
        { path: '/', name: 'Home', Component: Home, exact: true },
        { path: '/login', name: 'Login', Component: Login, exact: false },
        { path: '/register', name: 'Register', Component: Register, exact: false },
    ];
    return(
        <Router basename="/laravel-react/public/">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact="true">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
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
        </Router>
    );
}
export default Guest;
