import React from "react";
import { Navbar, Nav} from "react-bootstrap";

function HeaderFn() {
    return(
        <>
        <Navbar expand="lg" variant="light" className="navbar-class">
            <Navbar.Brand href="#home" className="logo-class">SHOEHOLICS</Navbar.Brand>
            <Navbar.Toggle  />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="nav-class-name">
                <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
                <Nav.Link href="#contactus" className="mx-2">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}

export default HeaderFn;