import React from "react"
import Navigate from './navbar'
import axios from 'axios'
import {useState} from 'react'

function DisplayStudent(){

    const [studentId, setStudentId] = useState()
    //This stop the page from refreshing
    const submitButton = (event) => {
    event.preventDefault();
    //This is the object (student's info) that will be sent to the backend
    const displayStudent = {
        _id: studentId,
        
    }
    //This will send the student's info to the backend
    axios.get(('http://localhost:5678/students/' + studentId), displayStudent)
    
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
        <h1>Display Student</h1>
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

} export default DisplayStudent;