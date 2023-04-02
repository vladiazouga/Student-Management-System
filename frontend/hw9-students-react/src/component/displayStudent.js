import React from "react"
import Navigate from './navbar'
import axios from 'axios'
import { useState } from 'react'

function DisplayStudent() {

    const [studentId, setStudentId] = useState()
    const [myArray, setMyArray] = useState([]);
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
        axios.get(('http://localhost:5678/students/' + studentId))
            .then((res) => {
                addValue(res);
                console.log(res);
                alert('Displayed Student');
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
                <input type="text" onChange={Change} id="sid" name="sid" />
                <button onClick={submitButton}>Submit</button>
            </form>
            {/* //If the array is empty, then display nothing but if there is something in the array,} */}
            {myArray.length === 1 && <table>
                <tr>
                    <th>Student ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>GPA</th>
                    <th>Enrolled</th>
                </tr>
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
            </table>}
        </React.Fragment>
    )
    // }



} export default DisplayStudent;