import React from 'react'
import '../style/project_style.css'

import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className='projects'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </section>
  )
}

export default Projects