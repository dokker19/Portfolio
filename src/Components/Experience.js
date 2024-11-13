import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"

const Experience = () => {
  return (
    <>
      <div className='ExperiencePage'>
        <div className='ExperienceText'>
        <h1 className='ExperienceTextHeading' >Summer <b>2024</b> (NYC)</h1>
          <p>
            BMO Clearpool Group - <b>Algo Trading Team</b>
            <br/>
            Quantitative Developer Intern
          </p>

          <br/>

          <h1 className='ExperienceTextHeading' ><b>Summer </b>2023 (Suwon, Korea)</h1>
          <p>
            Samsung Electronics - Samsung Health <br/>
            Software Development Intern
          </p>
          <br/>

          <h1 className='ExperienceTextHeading' >Summer <b>2022</b> (Seoul, Korea)</h1>
          <p>
            KTB Asset Management - Equity Team <br/>
            Technology Research Intern
          </p>
          <br/>

          <h1 className='ExperienceTextHeading' >Fall 2020 - Spring 2022 <b>(??? </b> Korea)</h1>
          <p>
            Republic of Korea Army - <b>203</b> Special Assault <b>Commando</b><br/>
            Sergeant Signaller / COM (Artillery Projectile Calculator) <br/>
            Titles: <b>Brigade's Head COM</b>, Best Trainee Award (1 of 250+)
          </p>
          <br/>
        </div>

        <div>
          {/* <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt> */}
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Git' />
        <Skills skill='Docker' />
        <Skills skill='Java' />
        <Skills skill='Python' />
        <Skills skill='Typescript' />

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Postgres'/>
        <Skills skill='MongoDb' />
        <Skills skill='Express' />
        
        <Skills skill='Pandas' />
        <Skills skill='Tensorflow' />
        <Skills skill='Elastic' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        
        
        
      </div>
    </>
  )
}

export default Experience