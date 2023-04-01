import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Index from './component/index';
import AddStudent from './component/addStudent';
import DeleteStudent from './component/deleteStudent';
import UpdateStudent from './component/updateStudent';
// import listStudents from './component/listStudents';
// import displayStudent from './component/displayStudent';


function App() {
  return (
    <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/addStudent' element={<AddStudent />}/>
        <Route path='/updateStudent' element={<UpdateStudent />}/>
        <Route path='/deleteStudent' element={<DeleteStudent />}/>
      </Routes>
    
  );
}

export default App;
