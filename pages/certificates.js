import React, { useState } from 'react'
import { certificates as certificateData } from '../util/data'
import CertificateCard from '../components/CertificateCard'
import CertificatesNav from '../components/CertificatesNav'
import { motion } from 'framer-motion'
import { fadeInUp } from '../animations/fadeInUp'
import { stagger } from '../animations/stagger'
import { routeAnimation } from '../animations/routeAnimation'
import Head from 'next/head'

export default function Projects() {
  const [certificate, setCertificate] = useState(certificateData)
  const [activeItem, setactiveItem] = useState('all')
  const [showDetail, setShowDetail] = useState(null)
  const handleFilter = (category) => {
    if (category === 'all') {
      setCertificate(certificateData)
      setactiveItem(category)
      return
    }
    const filterProjects = certificateData.filter((project) =>
      project.tags.includes(category)
    )
    console.log(filterProjects)
    setCertificate(filterProjects)
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
        <title>Abhiram BSN | Certificates</title>
      </Head>
      <CertificatesNav categoryHandler={handleFilter} active={activeItem} />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3 text-black bg-gray-100 dark:text-white dark:bg-black"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {certificate.map((cert) => (
          <motion.div
            variants={fadeInUp}
            key={cert.name}
            className="col-span-12 p-2 bg-gray-200 border rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-black dark:border-white"
          >
            <CertificateCard
              certificate={cert}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
