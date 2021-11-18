import NavbarMenu from "./Navbar";
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'; 

function Protected(props) {
    let Cmp = props.Cmp;
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate('/')
        }
    }, [])

    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protected