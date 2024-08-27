import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaFigma, FaDocker, FaLinux, FaJava} from "react-icons/fa";
import {DiNodejs } from "react-icons/di";
import {SiExpress, SiPandas, SiMongodb, SiPostman, SiVercel, SiTypescript, SiElastic, SiPostgresql, SiTensorflow} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        Docker: <FaDocker/>,
        'C++': <CgCPlusPlus/>,
        Linux: <FaLinux />,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Typescript: <SiTypescript/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Python : <FaPython/>,
        Figma : <FaFigma/>,
        Tensorflow: <SiTensorflow/>,
        Vercel : <SiVercel/>,
        Java: <FaJava />,
        Elastic: <SiElastic/>,
        Postgres: <SiPostgresql/>,
        Pandas: <SiPandas />
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
