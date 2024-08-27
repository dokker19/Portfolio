import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <ClimbingBoxLoader
          color={'#98FF98'}
          loading={true}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      ):(
      <div>

      <Nav/>
      <MoveToTop/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Resume" element={<Resume/>}/>
      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;
