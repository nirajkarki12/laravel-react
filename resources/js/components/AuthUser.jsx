import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser() {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return tokenString ? JSON.parse(tokenString) : null;
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        return userString ? JSON.parse(userString) : {};
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/dashboard');
    }

    const logout = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');

        navigate('/login');
    }

    const http = axios.create({
        baseURL: "http://localhost/laravel-react/public/api",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return {
        setToken: saveToken,
        token,
        user,
        getToken,
        http,
        logout,
    }
}