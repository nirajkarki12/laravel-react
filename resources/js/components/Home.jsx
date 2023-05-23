import React, { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

export default function Home() {
    const {http} = AuthUser();
    const [userDetail, setUserDetail] = useState('');

    useEffect(() => {
        fetchUserDetail();
    }, []);

    const fetchUserDetail = () => {
        http.post('/auth/me').then((res) => {
            setUserDetail(res.data)
        });
    }

    function renderUserDetail() {
        if(userDetail) {
            return <div>
                <h4>Name</h4>
                <p>{userDetail.name}</p>
                <h4>Email</h4>
                <p>{userDetail.email}</p>
            </div>
        } else{
            return <p>Loading....</p>
        }
    }

    return(
        <div>
            <h1 className="mb-4 mt-4">Dashboard Page</h1>
            { renderUserDetail() }
        </div>
    );
}