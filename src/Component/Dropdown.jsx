import React from 'react';
import { Dropdown } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'; 

const DropdownMenu = () =>  {

    const navigate = useNavigate();

    function Info1() {
        navigate('/information')
    }

    function Info2() {
        navigate('/information2')
    }

    return(
        <div>
            <>
                <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" onClick={Info1} active>Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={Info2}>Another action</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </>
        </div>
        
    )
    
}

export default DropdownMenu