import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    
    TutorHubDesc:"Comprehensive tutor matching platform at Hopkins built with MERN. NOTE: This is a private repo. But you can check out the demo! Guest user email: guest@jhu.edu Guest password: guest@Jhu",
    TutorHubGithub:"",
    TutorHubWebsite:"https://project-team-02.vercel.app/",

    IssueTrackerDesc: "Collaborative ticket tracking. Manage your projects, create, assign and manage your projects and tickets easily",
    IssueTrackerGithub: "https://github.com/dokker19/IssueTracker",
    IssueTrackerWebsite: "",
  }

  let showGithub ='';
  let showWebsite = '';

  if(desc[projectName + 'Github']===""){
    showGithub="none";
  }
  if (desc[projectName + 'Website'] ===""){
    showWebsite="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:showGithub}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a style={{display:showWebsite}} href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox