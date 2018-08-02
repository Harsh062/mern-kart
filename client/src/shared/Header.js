// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import '../styles/header.css';

export const Header = (props) => {
    const { isLoggedIn, user } = props;
    return (
        <Fragment>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to="/">MERN KART</NavLink>
                </Navbar.Brand>
            </Navbar.Header> 
            {
                !isLoggedIn && 
                <Nav>
                <NavItem eventKey={1}>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </NavItem>
                <NavItem eventKey={2}>
                    <NavLink to="/signup">
                        Sign Up
                    </NavLink>
                </NavItem>
            </Nav>
            }
            {
                isLoggedIn && 
                <Nav>
                <NavItem eventKey={1}>
                    <div onClick={props.onUserClick}>
                        Welcome {user.local.email}
                    </div>
                </NavItem>
                <NavItem eventKey={1}>
                    <NavLink to="/settings">
                        Settings
                    </NavLink>
                </NavItem>
                <NavItem eventKey={1}>
                    <div onClick={props.onLogout}>
                        Logout
                    </div>
                </NavItem>
            </Nav>
            }
                
        </Navbar>
    </Fragment>
    )
} 