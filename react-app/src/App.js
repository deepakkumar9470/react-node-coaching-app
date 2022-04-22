import React,{useState,useEffect} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';
import AddCoaching from './components/AddCoaching';
import axios from 'axios';

function App() {
 

  const [course, setCourse] = useState([])

  useEffect(() => {
  const fetchCourses = async () =>{
       try {
            const res= await axios.get(`http://localhost:5000/api/course/getcourse`)
            console.log(res.data)
            setCourse(res.data.allcourses)
       } catch (error) {
            console.log(error)
       }
    }
    fetchCourses()
}, []);

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
         <Routes>
            <Route index element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/:id' element={<CourseDetails course={course}/>}/>
            <Route path='/coaching' element={<AddCoaching/>}/>           
         </Routes>
      </BrowserRouter>
       
       
    </div>
  );
}

export default App;
