import React from 'react';
import { NavLink } from 'react-router-dom'
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
                            <NavLink to='/' activeClassName='active'> Home </NavLink>
                            <NavLink to='/addStudent' activeClassName='active'> Add a Student </NavLink>
                            <NavLink to='/updateStudent' activeClassName='active'> Update a Student by ID </NavLink>
                            <NavLink to='/deleteStudent' activeClassName='active'> Delete a Student by ID </NavLink>
                            <NavLink to='/displayStudent' activeClassName='active'> Display a Student by ID </NavLink>
                            <NavLink to='/listStudents' activeClassName='active'> List all Students </NavLink>
                            <NavLink to='/search' activeClassName='active'> Search by Student's Last Name </NavLink>

                            



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </React.Fragment>

    )


}
export default Navigate;