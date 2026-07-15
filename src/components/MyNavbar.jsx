import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background: rgba(20, 20, 35, 0.55);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  border-bottom: 1px solid rgba(255,255,255,0.15);

  .navbar {
    width: 100%;
    padding: 12px 0;
  }

  .navbar-brand {
    color: white !important;
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  .nav-link {
    color: rgba(255,255,255,0.9) !important;
    margin-left: 18px;
    transition: 0.3s;
    font-weight: 500;
  }

  .nav-link:hover {
    color: #66d9ff !important;
  }

  .navbar-toggler {
    border: 1px solid rgba(255,255,255,0.35);
    background: rgba(255,255,255,0.08);
    padding: 6px 10px;
    box-shadow: none !important;
  }

  .navbar-toggler:hover {
    background: rgba(255,255,255,0.15);
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .navbar-toggler-icon {
    background-image: var(--bs-navbar-toggler-icon-bg) !important;
  }

  @media (max-width: 991px) {

    .navbar-collapse {
      margin-top: 12px;
      padding: 18px;

      background: rgba(30, 30, 45, 0.75);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);

      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 18px;

      box-shadow: 0 15px 35px rgba(0,0,0,.35);
    }

    .nav-link {
      text-align: center;
      margin: 12px 0;
      padding: 10px;
      border-radius: 10px;
    }

    .nav-link:hover {
      background: rgba(255,255,255,0.08);
    }
  }
`;

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Content>
      <Navbar
        expand="lg"
        bg="transparent"
        variant="dark"
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
      >
        <Container>
          <Navbar.Brand href="#home">
            Portfolio
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={closeMenu}>Home</Nav.Link>
              <Nav.Link href="#about" onClick={closeMenu}>About</Nav.Link>
              <Nav.Link href="#skills" onClick={closeMenu}>Skills</Nav.Link>
              <Nav.Link href="#projects" onClick={closeMenu}>Projects</Nav.Link>
              <Nav.Link href="#education" onClick={closeMenu}>Education</Nav.Link>
              <Nav.Link href="#contact" onClick={closeMenu}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Content>
  );
}

export default MyNavbar;