import React, { useState } from 'react';
import axios from 'axios';
import Navigate from './navbar';

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
                <label for="record_id">RecordID:</label>
                <input type="text" id="record_id" name="record_id"></input>

                <button>Delete Votes</button>
            </form>
            <form>
                
            </form>
            <table class="table" id="studentTable">
                <thead>
                    <tr>
                        <th scope = "col">ID</th>
                        <th scope = "col">First Name</th>
                        <th scope = "col">Last Name</th>
                        <th scope = "col">GPA</th>
                        <th scope = "col">Enrolled</th>
                    </tr>
                </thead>
                {myArray[0]&&myArray.map((student) => (
                    <tbody>
                        <tr key={student._id}>
                            <td>{student._id}</td>
                            <td>{student.first_name}</td>
                            <td>{student.last_name}</td>
                            <td>{student.gpa}</td>
                            <td>{student.enrolled.toString()}</td>
                        </tr>
                    </tbody>
                ))}
            </table>

        </React.Fragment>

    )

}

export default Search;