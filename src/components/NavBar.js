import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../assets/css/nav.css"

function NavBar() {
    return (

        <>
            <Navbar variant="dark" expand="lg" fixed='top' className='Navbar'>
                <Container className=''>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="#home" className='itemsNav text-white-50'>NOMBRE</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end d-flex'>
                        <Nav className="  ">
                            <Nav.Item>
                                <Nav.Link href="#home" className='itemsNav'>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link" className='itemsNav'>About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#home" className='itemsNav'>My reservations</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link" className='itemsNav'>Contact</Nav.Link>
                            </Nav.Item>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default NavBar;