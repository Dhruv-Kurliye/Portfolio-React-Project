import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
const Header = () => {

    const common = {
        marginRight:15,
        fontSize:20,
        letterSpacing:".5px"
    }
    const Header={
        fontSize:30
    }

    const Git={
        marginLeft:50,
        marginRight:0
    }
    return (
        <div>
            <Navbar className="opacity-100" bg="dark" data-bs-theme="dark">
                <Container>
                    <h2><Navbar.Brand href="#home" style={Header}>Dhruv Kurliye</Navbar.Brand></h2>
                    <Nav className="mt-2 ">
                        <div>
                        <NavLink to="/" className="text-decoration-none" style={common}>Home </NavLink>
                        <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
                        <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
                        <NavLink to="/playlist" className="text-decoration-none" style={common}>Playlist</NavLink>
                        </div>
                        <div><Button variant="danger" style={Git}>GitHub</Button>{' '}</div>
                      
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header