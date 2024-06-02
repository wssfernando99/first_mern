import React, { useState } from "react"; 
import { Navbar } from "./Navbar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const StudentAdd = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    function sendData(e){
        e.preventDefault();
        const newStudent = {
            name,
            age,
            gender
        }
        axios.post('http://localhost:4000/student/add',newStudent)
        .then(()=>{
            alert(`Student Details Add Succssfuly`)
            navigate('/showstudents')
            
        }).catch((err)=>{
            alert(`check consolelog`)
            console.log(err)
        })
    }

  

  return (
<div className="container">
    <div><Navbar /></div>
    <div><h3>Add Student</h3></div>
    <form onSubmit={sendData}>
  <div className="mb-3">
    <label for="exampleInputname" className="form-label">Student name</label>
    <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" 
    onChange={(e)=>{
        setName(e.target.value)
    }}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputage" className="form-label">Age</label>
    <input type="number" className="form-control" id="exampleInputage" 
    onChange={(e)=>{
        setAge(e.target.value)
    }}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputgender" className="form-label">Gender</label>
    <input type="text" className="form-control" id="exampleInputgender" 
    onChange={(e)=>{
        setGender(e.target.value)
    }}/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
    </form>
</div>
    
  )
}

export default StudentAdd