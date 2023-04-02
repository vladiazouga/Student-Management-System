import React from "react"
import Navigate from './navbar'
import axios from 'axios'
import { useState } from 'react'

function ListStudents() {


    const [myArray, setMyArray] = useState([]);
   
    //This stop the page from refreshing
    const submitButton = (event) => {
        event.preventDefault();
        //This is the object (student's info) that will be sent to the backend
        // const displayStudent = {
        //     _id: studentId
        // }
       
        //This will send the student's info to the backend
        axios.get('http://localhost:5678/students')
            .then((res) => {
                setMyArray(res.data);
                console.log(myArray);
                alert('Displays all Student');
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    }



    return (
        <React.Fragment>
            <Navigate></Navigate>
            <h1>Lists All Student</h1>
            <form id='display'>
                <button onClick={submitButton}>Click to get all students info</button>
            </form>
           {/* //If the array is empty, then display nothing but if there is something in the array,} */}
            {myArray.length > 0 && <table>
                <tr>
                    <th>Student ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>GPA</th>
                    <th>Enrolled</th>
                </tr>
                <tbody>
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



} export default ListStudents;