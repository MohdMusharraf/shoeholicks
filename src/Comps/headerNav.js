import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import {auth} from '../firebase/firebase.utils';

function HeaderFn({currentUser}) {
    return(
        <>
        <Navbar expand="lg" variant="light" className="navbar-class">
            <Navbar.Brand href="#home" className="logo-class">SHOEHOLICS</Navbar.Brand>
            <Navbar.Toggle  />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="nav-class-name">
                <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
                {
                    currentUser ? 
                    
                    <div onClick={() => {auth.signOut()}} className="mx-2"><Nav.Link href="/"
                    className = "mx-2">SignOut</Nav.Link></div>:
                    <Nav.Link href="/Form"
                    className = "mx-2">SignIn</Nav.Link>
                }
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        </>
    );
}

export default HeaderFn;