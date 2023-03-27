import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './AppBarcss.css'

function AppBar() {
    const data=useSelector(state=>state.table)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">TABLE:<span className='tablenum'>{data.table}</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/table">Change Table</NavLink>
            <NavLink className="nav-link" to="/cart">CheckOut</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;