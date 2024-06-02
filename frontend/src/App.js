
import './App.css';
import StudentAdd from './components/StudentAdd';
import { ShowStudents } from './components/ShowStudents';
import { Homepage } from './components/Homepage';
import { StudentEdit } from './components/StudentEdit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Delete } from './components/Delete';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/studentadd' element={<StudentAdd />}></Route>
        <Route path='/showstudents' element={<ShowStudents />}></Route>
        <Route path='/studentedit/:id' element={<StudentEdit />}></Route>
        <Route path='/delete/:id' element={<Delete />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
