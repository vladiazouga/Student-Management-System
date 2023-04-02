//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Index from './component/index';
import AddStudent from './component/addStudent';
import DeleteStudent from './component/deleteStudent';
import UpdateStudent from './component/updateStudent';
import ListStudents from './component/listStudents';
import DisplayStudent from './component/displayStudent';
import Search from './component/searchBy';


function App() {
  return (
    <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/addStudent' element={<AddStudent />}/>
        <Route path='/updateStudent' element={<UpdateStudent />}/>
        <Route path='/deleteStudent' element={<DeleteStudent />}/>
        <Route path='/displayStudent' element={<DisplayStudent />}/>
        <Route path='/listStudents' element={<ListStudents />}/>
        <Route path='/search' element={<Search />}/>
      </Routes>
    
  );
}

export default App;
