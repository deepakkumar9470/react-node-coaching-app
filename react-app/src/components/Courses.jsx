import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Cards from './Cards'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
  const fetchCourses = async () =>{
       try {
            const res= await axios.get('http://localhost:5000/api/course/getcourse')
            setCourses(res.data.allcourses)
       } catch (error) {
            console.log(error)
       }
    }
    fetchCourses()
}, []);
  return (
    <div className='container p-2'>
      <h4 className="all_card_text">List of All courses</h4>
      
         {
          courses.map((courses) =>{
             return  (
               <div key={courses._id}>
                 <Cards courses = {courses} id={courses._id}/>
               </div>
             )
           })
         }
    </div>
  )
}

export default Courses