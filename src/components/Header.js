import React from 'react'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "../styles/header.css"


 const Header = () => {
    return (
        <>
           <Navbar  className={"yellotail"}>
            
            <LinkContainer  to={"/"}>

                <Navbar.Brand className={"brand"} > daily news </Navbar.Brand>
            
            </LinkContainer>
            
           </Navbar>

           {/* ......................................................................... */}


           <Nav className={"nav"}>
                     
                     <LinkContainer to={"/"}>

                <Nav.Link className={"nav-item"}>Home</Nav.Link>
                 
                      
                     </LinkContainer>

                        <LinkContainer to={"/"}>

                <Nav.Link className={"nav-item"}>contact</Nav.Link>
                 
                      
                     </LinkContainer>

                        <LinkContainer to={"/"}>

                <Nav.Link className={"nav-item"}>Contact</Nav.Link>
                 
                      
                     </LinkContainer>
                     
            </Nav>
        </>
    )
}
export default Header;
