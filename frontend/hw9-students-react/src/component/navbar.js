import React from 'react';
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';



function Navigate() {
    
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" className='nav'>
                <Container>
                    <Navbar.Brand>Student Database Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link> <Link to='/' className='active'> Home </Link> </Nav.Link>
                            <Nav.Link> <Link to='/addStudent' className='active'> Add a Student </Link> </Nav.Link>
                            <Nav.Link> <Link to='/updateStudent' className='active'> Update a Student by ID </Link> </Nav.Link>
                            <Nav.Link> <Link to='/deleteStudent' className='active'> Delete a Student by ID </Link> </Nav.Link>
                            <Nav.Link> <Link to='/displayStudent' className='active'> Display a Student by ID </Link> </Nav.Link>
                            <Nav.Link> <Link to='/listStudents' className='active'> List all Students </Link> </Nav.Link>
                            <Nav.Link> <Link to='/search' className='active'> Search by Student's Last Name </Link> </Nav.Link>

                            



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </React.Fragment>

    )


}
export default Navigate;