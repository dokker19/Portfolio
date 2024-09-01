import React from 'react';
import ProjectBox from './ProjectBox';
import TutorhubImage from '../images/TutorhubImage.png';
import IssueTrackerImage from '../images/IssueTrackerImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={TutorhubImage} projectName="TutorHub" />
        <ProjectBox projectPhoto={IssueTrackerImage} projectName="IssueTracker" />
      </div>

    </div>
  )
}

export default Projects