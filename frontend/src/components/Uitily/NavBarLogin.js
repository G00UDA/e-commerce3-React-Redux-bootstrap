import React from "react";
import { Navbar, Container, FormControl, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import login from "../../assets/images/login.png";
import cart from "../../assets/images/cart.png";
const NavBarLogin = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" width="50px" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto" style={{display:"flex" , alignItems:"center"}}>
            <Nav.Link
              href="/login"
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            > 
            <div style={{display:"flex" , flexDirection:"row" , marginTop:"20px", gap:3}}>
              <img
                src={login}
                className="login-img"
                alt="sfvs"
                width="20px"
                height="20px"
              />
              <p style={{ color: "white" }}>دخول</p>
              </div>
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img
                src={cart}
                className="login-img"
                alt="sfvs"
                width="20px"
                height="20px"
              />
              <p style={{ color: "white" }}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
