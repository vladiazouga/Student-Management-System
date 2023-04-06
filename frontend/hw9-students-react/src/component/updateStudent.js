import { useState } from 'react';
import React from 'react';
import Navigate from './navbar';
import axios from 'axios';

//This is the function that will update a student by their ID
function UpdateStudent() {

    //Setting up the state variables
    const [studentId, setStudentId] = useState()
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [gpa, setGpa] = useState()
    const [enrolled, setEnrolled] = useState('')
    const inputRef = React.useRef(null);


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
                inputRef.current.value = '';
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
                <br />
                <input type="text" name="studentId" onChange={(event) => setStudentId(event.target.value)} ref={inputRef}></input>
                <br />
                <label>First Name</label>
                <br />
                <input type="text" name="firstName" onChange={(event) => setfirstName(event.target.value)}ref={inputRef}></input>
                <br />
                <label>Last Name</label>
                <br />
                <input type="text" name="lastName" onChange={(event) => setlastName(event.target.value)}ref={inputRef}></input>
                <br />
                <label>GPA</label>
                <br />
                <input type="text" name="gpa" onChange={(event) => setGpa(event.target.value)}ref={inputRef}></input>
                <br />
                <label>Enrolled</label>
                <br />
                <input type="text" name="enrolled" onChange={(event) => setEnrolled(event.target.value)}ref={inputRef}></input>
                <br />
                <button type="submit">Submit</button>

            </form>
        </React.Fragment>

    )

} export default UpdateStudent;