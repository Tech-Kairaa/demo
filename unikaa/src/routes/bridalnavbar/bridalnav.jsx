import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// import Bride from "./blogimages/Bride-PNG-File.png";

import { FaBars, FaTimes } from "react-icons/fa";
import "./bridal.css";

function ColorSchemesExample() {
  const [navToggler, setNavToggler] = useState(false);
  const closeNavbar = () => setNavToggler(false);
  return (
    <>
      <nav className="bride-navbars"> 
        <div className="contain">
          <div className="navbar-content">
            <div className="brand-and-toggler flex flex-sb">
              {/* <Link
              to="/home"
              className="navbar-brand text-uppercase fw-7 text-white ls-2 fs-17"
            >
              Academy
            </Link> */}
              <button
                type="button"
                className="bride-navbar-open-btn text-white  "
                onClick={() => setNavToggler(!navToggler)}
              >
                <FaBars size={30} color="crimson" />
              </button>
              {/* <p className="brialtop">bridal</p> */}
              <div
                className={
                  navToggler
                    ? "bride-navbar-collapse bride-show-navbar-collapse"
                    : "bride-navbar-collapse"
                }
              >
                <button
                  type="button"
                  className="bride-navbar-close-btn text-white"
                  onClick={closeNavbar}
                >
                  <FaTimes size={30} color="crimson" />
                </button>

                <Navbar
                  bg=""
                  className="bridal-nav-bg"
                  data-bs-theme="dark"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(15, 61, 248, 1) 0%, rgba(46, 213, 130, 1) 92%)",
                  }}
                >
                  <Container>
                    <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
                      <div>
                        <Nav.Link href="/">
                          {/* <img src={Bride} alt="" className="bridal-name" /> */}
                          <p>Unikaa Bridal</p>{" "}
                        </Nav.Link>
                      </div>
                      <div className="d-flex mobile-nav-bride">
                        <Nav.Link href="/homes">Home</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/makeup">Makeup Experts</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        <Button href="/booknow" variant="outline-success">
                          Book Now
                        </Button>
                      </div>
                    </Nav>
                  </Container>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ColorSchemesExample;
