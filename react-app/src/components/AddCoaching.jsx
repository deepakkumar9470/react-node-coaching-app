import React,{useState} from 'react'
import axios from 'axios'

const AddCoaching = () => {
    const [name, setName]  = useState('')
    const [address, setAddress]  = useState('')
    const [phone, setPhone] = useState('') 
    const [coachinginfo, setCoachinginfo] = useState('') 
    const [photo, setPhoto] = useState('') 
    const [teacherdetails, setTeacherdetails] = useState('') 
   

    const handleAdd = async (e) =>{
          e.preventDefault()
          const formData = new FormData();
          formData.append('name', name)
          formData.append('address', address)
          formData.append('phone', phone)
          formData.append('coachinginfo', coachinginfo)
          formData.append('myimage',photo)
          formData.append('teacherdetails',teacherdetails)
          const newcoaching = {
              name,
              address,
              phone,
              coachinginfo,
              photo,
              teacherdetails
          }
          setName('')
          setAddress('')
          setPhone('')
          setCoachinginfo('')
          setPhoto('')
          setTeacherdetails('')

          const res = await axios.post(`http://localhost:5000/api/coaching/create`, newcoaching)
          console.log(res)
          alert('Data addes successfully..') 
    };

  return (
    <div className=' p-5 shadow-md'>
 
    <div className="row justify-content-center mt-4">
       <div className="col-md-5">
          <h1 className='mb-2 alert alert-dark'>Add Coaching</h1>
        
          <form onSubmit={handleAdd} encType="multipart/form-data">
          <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control"
              required
              value={name}
              onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control"
              required
              value={address}
              onChange={(e)=> setAddress(e.target.value)}/>
          </div>
          <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="number" className="form-control"
              required
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}/>
          </div>
          <div className="mb-3">
              <label htmlFor="coachinginfo" className="form-label">Coachinginfo</label>
              <input type="text" className="form-control"
              required
              value={coachinginfo}
              onChange={(e)=> setCoachinginfo(e.target.value)}/>
          </div>
          <div className="mb-3">
              <label htmlFor="file" className="form-label">CoachingPhoto</label>
              <input type="file" className="form-control"
              name = "myimage"
              onChange={(e)=> setPhoto(e.target.files[0])}/>
          </div>
          <div className="mb-3">
              <label htmlFor="teacherdetails" className="form-label">Teacherdetails</label>
              <input type="text" className="form-control"
              required
              value={teacherdetails}
              onChange={(e)=> setTeacherdetails(e.target.value)}/>
          </div>
          </form>
        
          <button type="submit" className="btn btn-primary">Add</button>
         
        </div>

        

       
    </div>

</div>
  )
}

export default AddCoaching