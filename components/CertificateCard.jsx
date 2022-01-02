import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCertificate, faGlobe, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp } from '../animations/fadeInUp'
import { stagger } from '../animations/stagger'

const CertificateCard = ({ certificate, showDetail, setShowDetail }) => {
  return (
    <div>
      <Image
        src={certificate.image_link}
        alt={certificate.name}
        className="cursor-pointer"
        width={250}
        height={150}
        layout="responsive"
        onClick={() => setShowDetail(certificate.id)}
      />
      <p className="my-2 text-center">{certificate.name}</p>

      {showDetail === certificate.id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-4 text-black bg-gray-200 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-custom_black-100">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center my-4 space-x-3"
          >
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image
                src={certificate.image_link}
                alt={certificate.name}
                width={250}
                height={150}
                layout="responsive"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-row p-2">
              <a
                href={certificate.certificate_url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center w-full px-4 py-2 mx-2 my-4 space-x-3 text-lg transition-all duration-200 rounded-lg hover:dark:text-black trans hover:dark:bg-white hover:bg-custom_black1 hover:scale-125 hover:text-white bg-gray-50 dark:bg-custom_black1"
              >
                <FontAwesomeIcon icon={faCertificate} />
                <span>Certificate</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {certificate.name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {certificate.description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 tracking-wider text-small"
            >
              {certificate.category.map((tag) => (
                <span
                  className="px-2 py-1 my-1 rounded-lg bg-gray-50 dark:bg-custom_black1"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 rounded-full bg-gray-50 top-3 right-3 focus:outline-none dark:bg-custom_black-100"
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </div>
      )}
    </div>
  )
}

export default CertificateCard
