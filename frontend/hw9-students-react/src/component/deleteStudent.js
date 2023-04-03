import { useState } from 'react';
import React from 'react';
import Navigate from './navbar';
import axios from 'axios';
function DeleteStudent(){

    //Setting up the state variables
    const [studentId, setStudentId] = useState()
    const inputRef = React.useRef(null);
    

    const submitButton = (event) => {
        //This stop the page from refreshing
        event.preventDefault();
        
       
        //This will delete the student's info to the backend
        axios.delete('http://localhost:5678/delete/' + studentId)
            .then((res) => {
                console.log(res);
                inputRef.current.value = '';
                alert('Student Deleted');
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
            <h1>Delete Student</h1>
            <form onSubmit={submitButton}>
                <label>Student ID</label>
                <br />
                <input type="text" name="studentId" onChange={(event) => setStudentId(event.target.value)} ref={inputRef}></input>
                <br />
                <button type="submit">Submit</button>

            </form>
        </React.Fragment>

    )

} export default DeleteStudent;