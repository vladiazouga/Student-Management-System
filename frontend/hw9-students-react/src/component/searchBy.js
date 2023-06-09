import React, { useState } from 'react';
import axios from 'axios';
import Navigate from './navbar';
import Table from 'react-bootstrap/Table';

// This is the component that will be rendered when the user clicks on the Search Student button
//and will allow the user to search for a student by their last name
function Search() {
    const [myArray, setMyArray] = useState([]);
    const inputRef = React.useRef(null);
    

    function submitButton(event) {
        event.preventDefault(); // Prevents page from reloading
        submitForm();
    }

    // This is the function that will be called when the form is submitted and 
    // will send the data to the backend
    async function submitForm() {
        const data = await axios.get('http://localhost:5678/get/'+document.getElementById('record_id').value).then((res) => { setMyArray(res.data);  inputRef.current.value = '';} );
        //setInputValue(''); // Reset the input field
    }

    // function handleInputChange(event) {
    //     setInputValue(event.target.value);
    // }
    return (
        <React.Fragment>
            <Navigate></Navigate>
            <h1>Search Students</h1>
            <form onSubmit={submitButton}>
                <label for="record_id">Student's Last Name:</label>
                <input type="text" id="record_id" name="record_id" ref={inputRef}></input>
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
                {/** This will map through the array 
                 * and display the data in the table
                 */}
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