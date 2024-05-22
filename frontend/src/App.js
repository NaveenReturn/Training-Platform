import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from './components/layout/Header';
import Home from './components/Home';
// import Footer from './components/layout/Footer';
import Register from './components/Register';
import Login from './components/Login';
import StudentList from './components/StudentList';
import store from "./store"
import { useEffect } from 'react';
import { loadUser } from './actions/autherAction';
import UserTable from './components/UserTable';
import Update from './components/Update';
import Course from './components/Course';
import CourseRegister from './components/CourseRegister';
function App() {
  useEffect(()=>{
    store.dispatch(loadUser);
},[]);
  return (
    <div className="App">
       <Header/>
        <Routes>
             <Route path='/'   element={<Home/>} />
             <Route path='/register' element={<Register/>} />
             <Route path='/login' element={<Login/>} />
             <Route path='/studentlist/:id' element={<StudentList/>} />
             <Route path='/studenttable' element={<UserTable/>} />
             <Route path='/update/:id' element={<Update/>} />
             <Route path='/coursetable' element={<Course/>} />
             <Route path='/courseregister'  element={<CourseRegister/>}/>
        </Routes>
         {/* <Footer/> */}
    </div>
  );
}

export default App;
