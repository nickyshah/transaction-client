import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

export const TopNav = () => {

    const userJson = sessionStorage.getItem("user") 
    const userObject = JSON.parse(userJson)

    const handleOnLogOut = () => {
        sessionStorage.removeItem('user')
    }
  return (
    <Navbar expand="md" className="bg-info ">
      <Container fluid>
        <Navbar.Brand href="#home">TR{''} {"Welcome"} {userObject?.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
        {
            userObject?._id ?
            (<Link onClick={handleOnLogOut} to="/" className='nav-link'>LogOut</Link>) : 
            <>
            <Link  to="/" className='nav-link'>SigIn</Link> 
            <Link to="/signup" className='nav-link'>Register</Link>
            </>
        }

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default BasicExample;