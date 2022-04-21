import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({courses,id}) => {
 

  return (
    <Link className="link_tag" to={`course/${id}`}>
        <div className="row d-flex flex-wrap  m-5 ">
       
        
       <div className="row">
       <div className="col-md-4 p-3">
         <div className="card">
    <img  src={courses.c_image} 
      className="card-img-top card_img" alt="courseimage"/>
    <div class="card-body">
      <h4>{courses.name}</h4>
      <span>Price: {courses.price} Rs/-</span> &nbsp;
     <Link to={`${id}`}><button className="btn btn-info">Edit</button></Link>
    </div>
         </div>
       </div>
       </div>
  
 
</div>
    </Link>
  )
}

export default Cards