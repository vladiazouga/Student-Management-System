import React, { useState } from 'react';
import axios from 'axios';
import Navigate from './navbar';
import Table from 'react-bootstrap/Table';

function Search() {
    const [myArray, setMyArray] = useState([]);

    function submitButton(event) {
        event.preventDefault(); // Prevents page from reloading
        submitForm();
    }

    async function submitForm() {
        const data = await axios.get('http://localhost:5678/get/'+document.getElementById('record_id').value).then((res) => { setMyArray(res.data) });
    }
    return (
        <React.Fragment>
            <Navigate></Navigate>
            <h1>Search Students</h1>
            <form onSubmit={submitButton}>
                <label for="record_id">Student's Last Name:</label>
                <input type="text" id="record_id" name="record_id"></input>
                <br />

                <button>Search Student</button>
            </form>
            <form>
                
            </form>
            <Table striped bordered hover variant="dark" class="table" id="studentTable">
                <thead>
                    <tr>
                        <th scope = "col">ID</th>
                        <th scope = "col">First Name</th>
                        <th scope = "col">Last Name</th>
                        <th scope = "col">GPA</th>
                        <th scope = "col">Enrolled</th>
                    </tr>
                </thead>
                {myArray[0]&&myArray.map((item) => (
                    <tbody>
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.gpa}</td>
                            <td>{item.enrolled.toString()}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>

        </React.Fragment>

    )

}

export default Search;