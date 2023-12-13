import React, { useEffect, useState } from 'react';
import './enroll.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export const Enroll = () => {
  const [course,setcourse]=useState()
  const [singlecourse,setsinglecourse]=useState()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const {id}=useParams()
  useEffect(()=>{
    axios.get('https://vast-cyan-tuna.cyclic.app/course')
    .then((res)=>{
      setcourse(res.data.courses)
      const filtered=res.data.courses.filter((e)=>{
        if(e._id===id){
          return e
        }
      })
      setsinglecourse()
      console.log(filtered)
    })
    .catch((err)=>{
       console.log(err)
    })
  },[])
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ENROLLMENT SUCCESSFULL")
    navigate('/')

  };

  return (
    <>
    <div className='course-detail'>
    <div className='image'>{singlecourse.image}</div>
      <div className='title'>{singlecourse.title}</div>
      <div className='category'>{singlecourse.category}</div>
      <div className='topic'>{singlecourse.topic}</div>
      <div className='created_by'>{singlecourse.created_by}</div>
      <div className='ratings'>{singlecourse.ratings}</div>
      <div className='no_of_students'>{singlecourse.no_of_students}</div>
      <div className='language'>{singlecourse.language}</div>
      <div className='price'>{singlecourse.price}</div>
      <div className='description'>{singlecourse.description}</div>
    </div>
      <div className="enrollment-form">
        <h2>Enrollment Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number :</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
  
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

