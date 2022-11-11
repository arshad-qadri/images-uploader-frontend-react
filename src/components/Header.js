import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Button} from "react-bootstrap"

const Header = () => {
  const nevigate = useNavigate()
  const location = useLocation()
  const handleLogout =() =>{
    localStorage.removeItem("userLogin")
    nevigate("/login")
  }
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Link to={"/"} className="text-light nav-link" > <h4>Upload Images</h4> </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={"/"} className="text-light nav-link fw-bold pb-0" style={{borderBottom:location.pathname==="/"? "2px solid #fff":"none"}} >Gallery</Link>
              <Link to={"/upload"} className="text-light nav-link fw-bold pb-0"  style={{borderBottom:location.pathname==="/upload"? "2px solid #fff":"none"}}>Upload</Link>
              <Button variant="light" size="sm"  className="fw-bold ms-3" onClick={handleLogout} >Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
