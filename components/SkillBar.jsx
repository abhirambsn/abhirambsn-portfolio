import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

const SkillBar = ({ data }) => {
  const barWidth = data.level
  const variants = {
    initial: {
      width: 0
    },
    animate: {
      width: barWidth,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100
      }
    }
  }
  return (
    <div className="my-2 text-white bg-gray-300 dark:bg-gray-900 rounded-xl">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex items-center px-4 py-1 rounded-xl bg-gradient-to-r from-custom_pink-200 to-custom_purple dark:from-custom_green dark:to-custom_cyan-50"
        style={{ width: data.level }}
      >
        <FontAwesomeIcon className="mr-3" size="1x" icon={data.icon} />
        {data.name}
        <p className="items-end justify-end mx-10">{data.level}</p>
      </motion.div>
    </div>
  )
}

export default SkillBar
