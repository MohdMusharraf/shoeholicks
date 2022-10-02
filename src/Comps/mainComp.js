import React from "react";
import { Card, Dropdown, Button, ButtonGroup } from "react-bootstrap";

function MainComp() {
    return (
        <div className='container'>
            <div className='row align-items-start mt-2'>
                <div className='col-12 col-md m-1'>
                    <Card id="custom-card-1">
                        <Card.Img className="p-2" variant="top" src=".\images\blue.png"></Card.Img>
                        <Card.Body>
                            <Card.Title className="title-text-class">Adidas Yeezy Boost 700</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted" id="sub-card-class">$6499</Card.Subtitle>
                            <div className="custom-div-buy">
                                <Dropdown as={ButtonGroup}>
                                    <Button id="custom-btn">Size</Button>
                                    <Dropdown.Toggle  id="dropdown-custom">
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu id="custon-menu">
                                        <Dropdown.Item>7</Dropdown.Item>
                                        <Dropdown.Item>8</Dropdown.Item>
                                        <Dropdown.Item>9</Dropdown.Item>
                                        <Dropdown.Item>10</Dropdown.Item>
                                        <Dropdown.Item>11</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>                      
                                <Button id="button-24">BUY</Button>            
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-md m-1'>
                    <Card id="custom-card-2">
                        <Card.Img className="p-2" variant="top" src=".\images\white.png"></Card.Img>
                        <Card.Body>
                            <Card.Title className="title-text-class">Nike Air 270</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted" id="sub-card-class">$8999</Card.Subtitle>
                            <div className="custom-div-buy">
                                <Dropdown as={ButtonGroup}>
                                    <Button id="custom-btn">Size</Button>
                                    <Dropdown.Toggle  id="dropdown-custom">
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu id="custon-menu">
                                        <Dropdown.Item>7</Dropdown.Item>
                                        <Dropdown.Item>8</Dropdown.Item>
                                        <Dropdown.Item>9</Dropdown.Item>
                                        <Dropdown.Item>10</Dropdown.Item>
                                        <Dropdown.Item>11</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>                      
                                <Button id="button-25">BUY</Button>            
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-md m-1'>
                    <Card id="custom-card-3">
                        <Card.Img className="p-2" variant="top" src=".\images\green.png"></Card.Img>
                        <Card.Body>
                            <Card.Title className="title-text-class">Puma RX-2k</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted" id="sub-card-class">$5199</Card.Subtitle>
                            <div className="custom-div-buy">
                                <Dropdown as={ButtonGroup}>
                                    <Button id="custom-btn">Size</Button>
                                    <Dropdown.Toggle  id="dropdown-custom">
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu id="custon-menu">
                                        <Dropdown.Item>7</Dropdown.Item>
                                        <Dropdown.Item>8</Dropdown.Item>
                                        <Dropdown.Item>9</Dropdown.Item>
                                        <Dropdown.Item>10</Dropdown.Item>
                                        <Dropdown.Item>11</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>                      
                                <Button id="button-26">BUY</Button>            
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default MainComp;