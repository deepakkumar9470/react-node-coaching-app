import React from 'react'
import { Link } from 'react-router-dom'


const Coaching = ({coachings}) => {
  return (
    <div>
        <div className="row d-flex justify-content-evenly">
           <div className="col-md-3">
             <p>You can cutomize</p>
              <Link to="/courses"><button className="btn btn-dark">Check all courses</button></Link>
           </div>
           <div className="col-md-8">
           <div className="card coaching_card">
            <img src={coachings.photo} className="card-img-top" alt="coachingimage"/>
            <div className="card-body">
              <h3 className="text-center text-decoration-underline">{coachings.name}</h3>
              <p className="card-text">{coachings.coachinginfo}</p>
              <p className="card-text">{coachings.teacherdetails}</p>
              <button className="btn btn-primary">Edit</button>
            </div>
            
          </div>
           </div>
         </div>
    </div>
  )
}

export default Coaching