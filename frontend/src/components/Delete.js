import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Delete = () => {

    const {id} = useParams();
    const navigate = useNavigate()

    function deleteStudent(){
        axios
      .delete(`http://localhost:4000/student/delete/${id}`)
      .then(() => {
        navigate('/showstudents')
      })
      .catch((error) => {
        alert('An error happened. Please Chack console');
        console.log(error);
      });
    }
  return (
    <div>
        <div>Do you realy want to delete?</div>
    <button onClick={deleteStudent}>Yes</button>
  
    </div>
  )  
}
