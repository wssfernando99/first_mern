import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import axios from 'axios';
import {Link} from 'react-router-dom';


export const ShowStudents = () => {

    const [students, setStudents] = useState([]);
   

    useEffect(()=>{
        function getstudent(){
            axios.get('http://localhost:4000/student/').then((res)=>{
                console.log(res.data);
                setStudents(res.data);
            }).catch((err)=>{
                alert(`chechout the console`)
                console.log(err)
            })
        }
        getstudent();
    },[])


  return (
    <div className='container'>
        <div><Navbar /></div>
        <div>All students</div>
        <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {students &&students.map((user, index) => (
        <tr key={user._id}>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td><Link to= {`/studentedit/${user._id}`}><h6>Edit</h6></Link>
            <Link to= {`/delete/${user._id}`}><button>Delete</button></Link></td>
        </tr>
    ))}
    
  </tbody>
</table>
        </div>
    </div>
    
  )
}
