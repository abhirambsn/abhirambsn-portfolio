import React, { useState } from 'react'
import { projects as projectData } from '../util/data'
import ProjectCard from '../components/ProjectCard'
import ProjectNav from '../components/ProjectNav'
import { motion } from 'framer-motion'
import { fadeInUp } from '../animations/fadeInUp'
import { stagger } from '../animations/stagger'
import { routeAnimation } from '../animations/routeAnimation'
import Head from 'next/head'

export default function Projects() {
  const [projects, setProjects] = useState(projectData)
  const [activeItem, setactiveItem] = useState('all')
  const [showDetail, setShowDetail] = useState(null)
  const handleFilter = (category) => {
    if (category === 'all') {
      setProjects(projectData)
      setactiveItem(category)
      return
    }
    const filterProjects = projectData.filter((project) =>
      project.tags.includes(category)
    )
    console.log(filterProjects)
    setProjects(filterProjects)
    setactiveItem(category.toLowerCase())
    return
  }
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: '65vh' }}
    >
      <Head>
        <title>Abhiram BSN | Projects</title>
      </Head>
      <ProjectNav categoryHandler={handleFilter} active={activeItem} />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3 text-black bg-gray-100 dark:text-white dark:bg-black"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.name}
            className="col-span-12 p-2 bg-gray-200 border rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-black dark:border-white"
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
