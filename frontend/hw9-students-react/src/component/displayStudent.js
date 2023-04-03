import React from "react"
import Navigate from './navbar'
import axios from 'axios'
import { useState } from 'react'
import Table from 'react-bootstrap/Table';


function DisplayStudent() {

    const [studentId, setStudentId] = useState()
    const [myArray, setMyArray] = useState([]);
    const inputRef = React.useRef(null);
    //This stop the page from refreshing
    const Change = (event) => {
        event.preventDefault();
        setStudentId(event.target.value);
    }
    const submitButton = (event) => {
        event.preventDefault();
        //This is the object (student's info) that will be sent to the backend
        // const displayStudent = {
        //     _id: studentId
        // }
        const addValue = (res) => {
            setMyArray([...myArray, res.data])
        }
        //This will send the student's info to the backend
        // const form = document.querySelector('form');
        // const formData = new FormData(form);
        axios.get(('http://localhost:5678/students/' + studentId))
            .then((res) => {
                addValue(res);
                console.log(res);
                inputRef.current.value = '';
                // formData.reset();
                // alert('Displayed Student');
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    }



    //These are the user inputs that will update the state variables every time the user 
    //types something in the input field

    return (
        <React.Fragment>
            <Navigate></Navigate>
            <h1>Display Student</h1>
            <form id='display'>
                <label >Student ID:</label>
                <br />
                <input type="text" onChange={Change} id="sid" name="sid" ref={inputRef}/>
                <br />
                <button onClick={submitButton}>Submit</button>
            </form>
            {/* //If the array is empty, then display nothing but if there is something in the array,} */}
            {myArray.length === 1 && <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th scope = "col">Student ID</th>
                    <th scope = "col">First Name</th>
                    <th scope = "col">Last Name</th>
                    <th scope = "col">GPA</th>
                    <th scope = "col">Enrolled</th>
                </tr>

                </thead>
                <tbody>
                    {/* //This will map through the array and display the student's info */}
                    {myArray.map(item => {
                        return (
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.gpa}</td>
                                <td>{item.enrolled}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>}
        </React.Fragment>
    )
    // }



} export default DisplayStudent;