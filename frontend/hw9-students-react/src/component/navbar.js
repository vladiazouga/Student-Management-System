import React from 'react';
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigate() {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Student Database Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link> <Link to='/'> Home </Link> </Nav.Link>
                            <Nav.Link> <Link to='/addStudent'> Add a Student </Link> </Nav.Link>
                            <Nav.Link> <Link to='/updateStudent'> Update a Student by ID </Link> </Nav.Link>
                            <Nav.Link> <Link to='/deleteStudent'> Delete a Student by ID </Link> </Nav.Link>
                            <Nav.Link> <Link to='/displayStudent'> Display a Student by ID </Link> </Nav.Link>
                            <Nav.Link> <Link to='/listStudents'> List all Students </Link> </Nav.Link>
                            <Nav.Link> <Link to='/search'> Search by Student's Last Name </Link> </Nav.Link>

                            



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </React.Fragment>

    )


}
export default Navigate;