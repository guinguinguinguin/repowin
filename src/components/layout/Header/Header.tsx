import React, { useEffect } from "react";
import { Navbar, Nav, Container, Col, Row} from 'react-bootstrap';
import logo from '../../../assets/images/penguin.svg';
import userAvatar from './icons/user.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Header.css';

export default function Header() {
  return (
    <div>
        <Navbar bg="light" variant="light">
            <Container>
                <Col xs={4} md={3}>
                    <Navbar.Brand href="#">      
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-blockalign-top rounded-circle"
                            alt="Penguin site logo"
                        /> 
                        <span className="logo-first-half">
                            Repo
                        </span>
                        <span className="logo-second-half">
                            Win
                        </span>
                    </Navbar.Brand>
                </Col>
                <Col xs={4} md={6}>
                    <Nav className="me-auto nav-link">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Col>
                <Col xs={4} md={3}>
                    <img
                        src={userAvatar}
                        width="50"
                        height="50"
                        className="d-inline-blockalign-top rounded-circle"
                        alt="Penguin site logo"
                    />
                    <ArrowDropDownIcon 
                        fontSize="large"
                    />
                </Col>
            </Container>
        </Navbar>
        <div className="subheader">

        </div>
    </div>
  );
}
