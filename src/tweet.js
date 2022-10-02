import { useState } from "react";
import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, Nav, NavbarText } from "reactstrap";

const Tweet = (props) => {

    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter+1)
    }
    const decreaseCounter = () => {
        setCounter(counter-1)
    }

    const text = props.text
    const author = props.author
    const date = props.date

    return (
        <div>
        </div>
    );
}

export default Tweet