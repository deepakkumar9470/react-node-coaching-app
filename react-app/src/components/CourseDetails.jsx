import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = ({course}) => {

   const {id} = useParams()

   
  return (
        <div className="container">
              <div className="row">
                    <div className="col-md-6">
                        <img src={course.c_image} alt={course.name} />
                        <span>ID : {id}</span>  
                        <h2>{course.name}</h2>
                        <h2>{course.strength}</h2>
                        <h2>{course.test_series}</h2>
                    </div>
              </div>   
        </div>
  )
}

export default CourseDetails