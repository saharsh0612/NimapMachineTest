import NavbarMenu from "./Navbar";
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'; 

function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            navigate('/login')
        }
    }, [])

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function signUp(){
        let item={name,password}
        localStorage.setItem("user-info", JSON.stringify(item));
        navigate('/')
    }

    return (
        <>
        <NavbarMenu />
        <div className="col-sm-6 offset-sm-3">
        <h1>User Login</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"></input>
            <br />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"></input>
            <br />
            <button onClick={signUp} className="btn btn-primary">Log in</button>
        </div>
        </>
    )
}

export default Login