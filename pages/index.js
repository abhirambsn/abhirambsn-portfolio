import { motion } from 'framer-motion'
import Head from 'next/head'
import { expertise } from '../util/data'
import ExpertiseCard from '../components/ExpertiseCard'
import { fadeInUp } from '../animations/fadeInUp'
import { stagger } from '../animations/stagger'
import { routeAnimation } from '../animations/routeAnimation'

export default function Home() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <Head>
        <title>Abhiram BSN | Cybersec Geek | Programmer</title>
      </Head>
      <h5 className="my-3 font-medium dark:text-white">
        I am currently pursuing Integrated M.Tech in Computer Science
        Engineering from Jaypee Institute of Information Technology, Noida. I am
        developing apps and websites from Class 6th and started my
        Cybersecurity learning from 2018.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-white dark:bg-black"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h5 className="my-3 text-xl font-bold tracking-wide dark:text-white">
          My Expertise
        </h5>
        <motion.div
          className="grid gap-6 lg:grid-cols-2 "
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {expertise.map((expert) => (
            <motion.div
              variants={fadeInUp}
              key={expert.title}
              className="bg-gray-200 rounded-lg dark:bg-gray-900 dark:text-white lg:col-span-1 "
            >
              <ExpertiseCard expertise={expert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export const getServerSideProps = async (context) => {
  const data = expertise;
  return {
    props: {
      expertise: data
    }
  }
}
