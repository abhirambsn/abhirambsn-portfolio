import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faEnvelope,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div>
      <Image
        src="/avatar.jpg"
        alt="User Avatar"
        width={200}
        height={200}
        layout="intrinsic"
        className="mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wide font-nunito dark:text-white">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-custom_purple via-custom_red to-custom_orange dark:from-lightblue dark:to-lightgreen">
          Abhiram B.S.N
        </span>
      </h3>
      <p className="px-2 py-1 my-3 transition-all duration-200 bg-gray-100 rounded-md dark:bg-gray-700 dark:text-white hover:scale-125">
        Cybersecurity Enthusiast
      </p>
      <p className="px-2 py-1 my-3 transition-all duration-200 bg-gray-100 rounded-md dark:bg-gray-700 dark:text-white hover:scale-125">
        Programmer
      </p>
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center justify-center px-2 py-1 my-3 transition-all duration-200 bg-gray-100 rounded-md hover:scale-125 hover:bg-gradient-to-r dark:hover:from-blue-400 dark:hover:to-green-400 hover:from-custom_pink hover:via-custom_red hover:to-custom_orange hover:text-white dark:bg-gray-700 dark:text-white"
      >
        <FontAwesomeIcon icon={faDownload} className="dark:text-white" />
        <p className="mx-2">Get My Resume</p>
      </a>
      <div className="flex flex-row justify-around w-9/12 mx-auto my-5 md:w-full">
        <button
          onClick={() =>
            window.open(
              `https://linkedin.com/in/bhallamudi-sai-narasimha-abhiram/`
            )
          }
        >
          <FontAwesomeIcon
            className="w-8 h-8 text-blue-500 transition-all duration-200 hover:scale-125"
            size="3x"
            icon={faLinkedin}
          />
        </button>
        <button onClick={() => window.open(`https://twitter.com/AbhiramBSN1`)}>
          <FontAwesomeIcon
            className="w-8 h-8 transition-all duration-200 text-custom_cyan hover:scale-125"
            size="3x"
            icon={faTwitter}
          />
        </button>
        <button
          onClick={() =>
            window.open(
              `https://www.youtube.com/channel/UC8_X1XmYj7Yw3xqLr-tCoJQ`
            )
          }
        >
          <FontAwesomeIcon
            className="w-8 h-8 text-red-600 transition-all duration-200 hover:scale-125"
            size="3x"
            icon={faYoutube}
          />
        </button>
        <button onClick={() => window.open(`https://github.com/abhirambsn`)}>
          <FontAwesomeIcon
            className="w-8 h-8 text-black transition-all duration-200 dark:text-white hover:scale-125"
            size="3x"
            icon={faGithub}
          />
        </button>
      </div>
      <div
        className="py-4 my-5 bg-gray-100 dark:bg-black dark:text-white"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <FontAwesomeIcon icon={faLocationArrow} />
          <span>Noida, IN</span>
        </div>
        <p className="my-4">abhirambsn@gmail.com</p>
      </div>
      <button
        onClick={() => window.open('mailto:abhirambsn@gmail.com')}
        className="flex items-center justify-center w-full px-5 py-2 my-2 text-white transition-all duration-200 rounded-lg hover:scale-125 bg-gradient-to-r from-custom_pink via-custom_red to-custom_orange dark:from-blue-400 dark:to-green-400 focus:outline-none"
      >
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
        <p className="px-1">Email</p>
      </button>
      <div className="flex items-center py-3 space-x-2 justify-evenly">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Sidebar
