import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';

export const StudentEdit = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const {id} = useParams();


    useEffect(()=>{

        axios.get(`http://localhost:4000/student/get/${id}`)
        .then((res)=>{
           setName(res.data.name)
           setAge(res.data.age)
           setGender(res.data.gender) 

        }).catch((err)=>{
            alert(`checkout console`);
            console.log(err);
        })
        
       
        
    },[])

    function updateStudent(e){
        e.preventDefault(); 
        const updateStudent = {
            name,
            age,
            gender
          }
        axios.put(`http://localhost:4000/student/update/${id}`,updateStudent)
        .then((res)=>{
            alert(`update Successful`)
            navigate('/showstudents')
            
        }).catch((err)=>{
            alert(`check console`);
            console.log(err);
        })
    }

  return (
    <div className="container">
    <div><Navbar /></div>
    
    <div><h3>Edit Student</h3></div>
    <form  onSubmit={updateStudent}>
  <div className="mb-3">
    <label htmlFor="exampleInputname" className="form-label">Edit Student Name</label>
    <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp"
    value={name}
    onChange={(e)=>
        setName(e.target.value)
    }/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputage" className="form-label">Edit Age</label>
    <input type="number" className="form-control" id="exampleInputage" 
    value={age}
    onChange={(e)=>
        setAge(e.target.value)
    }/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputgender" className="form-label">Edit Gender</label>
    <input type="text" className="form-control" id="exampleInputgender" 
    value={gender}
    onChange={(e)=>
        setGender(e.target.value)
    }/>
  </div>
  <button type="submit" className="btn btn-primary" >Update</button>
    </form>
</div>
  )
}
