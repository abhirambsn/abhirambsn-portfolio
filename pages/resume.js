import React from 'react'
import { skillLevel, toolLevel } from '../util/data'
import SkillBar from '../components/SkillBar'
import { motion } from 'framer-motion'
import { fadeInUp } from '../animations/fadeInUp'
import { routeAnimation } from '../animations/routeAnimation'
import Head from 'next/head'

export default function Resume() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-4 px-6"
    >
      <Head>
        <title>Abhiram BSN | Resume</title>
      </Head>
      <div className="grid gap-6 md:grid-cols-2 dark:text-white">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Integrated M.Tech in Computer Science Engineering
            </h5>
            <p className="font-semibold">
              Jaypee Institute of Information Technology, Noida (2020-2025)
            </p>
            <p className="my-3">
              I am currently pursuing Integrated M.Tech in Computer Science
              Engineering from JIIT Noida
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <p className="my-3">
              Searching for Internships for Industry Experience...
            </p>
            <p className="my-2">
              <img
                src="https://tryhackme-badges.s3.amazonaws.com/abhirambsn.png"
                alt="TryHackMe"
              />
            </p>
          </div>
        </motion.div>
      </div>
      {/* Languages and Tools */}
      <div className="grid gap-6 md:grid-cols-2 dark:text-white">
        <div>
          <h5 className="my-3 text-2xl font-bold">
            Languages &amp; Framework Proficiency
          </h5>
          <div className="my-2">
            {skillLevel.map((language) => (
              <SkillBar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools Proficiency</h5>
          <div className="my-2">
            {toolLevel.map((tool) => (
              <SkillBar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
