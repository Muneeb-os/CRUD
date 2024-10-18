import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import StudentRecord from "./Components/StudentRecord";
import StudentRecordById from "./Components/StudentGetById";
import AddStudent from "./Components/AddNewStudent";
import DeleteStudentById from "./Components/Delete";
import UpdateStudentRecord from "./Components/UpDate";
import Footer from "./Components/Footer";

const App = () => {
  const [progress, setProgress] = useState(0);

  
  const updateProgress = (progressValue) => {
    setProgress(progressValue);
  };
  return(
   <>
   <Router>
     <NavBar title="Student Record Management System" liitemHO="All" liitemE="Get By Id" liitemB="Add Student" liitemH="Remove Student" liitemS="Update Student"/>
     <LoadingBar color="#ff0000" progress={progress} />
     <Routes>
      <Route path="/all-student-data" element={
       <StudentRecord  setProgress={updateProgress}/>
      }/>
    <Route path="/get-by-id" element={
      <StudentRecordById  setProgress={updateProgress}/>
     }/>
    <Route path="/add-student" element={
      <AddStudent setProgress={updateProgress}/>
    }/>
    <Route path="/delete-student" element={
      <DeleteStudentById setProgress={updateProgress}/>
    }/>
    <Route path="/update-student"  element={
      <UpdateStudentRecord setProgress={updateProgress}/>
    }/>
    </Routes>
    <Footer/>
    </Router>
   </>
  )
};
export default App;