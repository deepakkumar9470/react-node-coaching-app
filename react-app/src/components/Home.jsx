import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Coaching from './Coaching'
import coaching from '../images/coaching.jpg'
const Home = () => {
   const [coachings ,setCoaching] = useState([])

      useEffect(() => {
          const fecthCoachings = async () =>{
             try {
                  const {data}= await axios.get('http://localhost:5000/api/coaching/getcoaching')
                  
                  setCoaching(data.data)
               
             } catch (error) {
                  console.log(error)
             }
          }
          fecthCoachings()
      }, []);
      
  return (
    <section>

      
     
        <div className="header">
             <img className="img-fluid header-image"
             src="https://images.pexels.com/photos/4219044/pexels-photo-4219044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
             alt="couser" />

        </div>
        <h1 className="alert alert-info text-capitalize p-2 m-5">Courses...</h1>

           {
                coachings.map((c)=>{
                     return (
                          <div>
                              <Coaching coachings={c}/>
                          </div>
                     )
                })
           }

    </section>
   )
}

export default Home