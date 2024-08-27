import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Welcome,</h1>
          <h1>I'm <b>Dok</b>yung <b>Y</b>ang.</h1>
          <Typed/>   
        </div>

        <div class="honeycomb">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
      </div>

      <div className='ExperiencePage'>
        <div className='ExperienceText'>
          <h1 className='ExperienceTextHeading'>A little bit <b>about</b> me.</h1>
          {/* <p>
            As a senior studying <b>Computer Science, Applied Math & Statistics</b> at Johns <b class="JHU">Hopkins</b> University,  
            I love solving technical challenges. I excel at breaking down complex tasks into smaller clear
            and manageable parts. That's perhaps why I enjoy being a TA. 
          </p>
          <br/>
          <br/>
          <p>
            I am interested in building a highly performant, secure, and scalable systems. 
            I am fluent in <b>Python, Java, </b> and am pretty comfortable with<b> C/C++</b>. I also have a lot of
            project experiences with full stack web development including but not limited to <b>TypeScript</b> the <b>MERN</b> stack. 
          </p>
          <br/>
          <br/>
          <p>
            In my last year at <b class="JHU">Hopkins</b>, I am studying <b>Machine Learning</b>, Parallel Computing, Networks, Computational Math for Finance, 
            and Optimization. 
            Last but not least, I love <b>football</b> and <b>poker</b>. 
          </p> */}
          <p>
            - Computer Science, Applied Math & Statistics at <b class="JHU">Hopkins</b>
            <br/>
            - fluent in <b>Python</b>, Java, C/C++
            <br/>
            - lots of experiences with TypeScript the <b>MERN</b> stack
            <br/>
            - currently studying <b>Machine Learning</b>, Parallel Computing, Networks, and Financial Math
          </p>

          <br/>
          <br/>

          <h3 className='ExperienceTextHeading'>and I <b>love</b></h3>
          <p>
          - solving technical challenges <br/>
          - building a highly performant, secure, and <b>scalable systems</b><br/>
          - breaking down complex tasks into smaller parts<br/>
           - <b>football</b> and poker. 
          </p>
        </div>
        {/* <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt> */}
        <div class="banter-loader">
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
        </div>
      </div>
    </div>
  )
}

export default Home