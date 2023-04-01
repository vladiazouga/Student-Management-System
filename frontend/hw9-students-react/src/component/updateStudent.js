import { useState } from 'react';
import React from 'react';
import Navigate from './navbar';
import axios from 'axios';

function UpdateStudent() {

    //Setting up the state variables
    const [studentId, setStudentId] = useState()
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [gpa, setGpa] = useState()
    const [enrolled, setEnrolled] = useState('')


    const submitButton = (event) => {
        //This stop the page from refreshing
        event.preventDefault();
        //This is the object (student's info) that will be sent to the backend
        const updateStudent = {
            _id: studentId,
            first_name: firstName,
            last_name: lastName,
            gpa: gpa,
            enrolled: enrolled
        }
        //This will send the student's info to the backend
        axios.put(('http://localhost:5678/students/' + studentId), updateStudent)
            .then((res) => {
                console.log(res);
                alert('Student Updated');
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
            <h1>Update Student</h1>
            <form onSubmit={submitButton}>
                <label>Student ID</label>
                <input type="text" name="studentId" onChange={(event) => setStudentId(event.target.value)}></input>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={(event) => setfirstName(event.target.value)}></input>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={(event) => setlastName(event.target.value)}></input>
                <label>GPA</label>
                <input type="text" name="gpa" onChange={(event) => setGpa(event.target.value)}></input>
                <label>Enrolled</label>
                <input type="text" name="enrolled" onChange={(event) => setEnrolled(event.target.value)}></input>
                <button type="submit">Submit</button>

            </form>
        </React.Fragment>

    )

} export default UpdateStudent;