import {
  faDesktop,
  faSpaceShuttle,
  faBook,
  faServer
} from '@fortawesome/free-solid-svg-icons'
import {
  faNodeJs,
  faWordpress,
  faReact,
  faPython,
  faCuttlefish,
  faLinux,
  faCodepen,
  faGit
} from '@fortawesome/free-brands-svg-icons'

export const expertise = [
  {
    title: 'Backend Developer',
    about:
      "I can build API's using Node.js, Express and MongoDB and Relational Databases (mainly MySQL & PostgreSQL).",
    icon: faNodeJs
  },
  {
    title: 'Ethical Hacker',
    about:
      'I am currently learning how to become an Ethical Hacker in order to perform Penetration Testing on newly created Systems and Websites.',
    icon: faDesktop
  },
  {
    title: 'Competitive Coder (Beginner)',
    about:
      'I am currently solving questions on Hackerrank and Leetcode in order to improve my critical thinking.',
    icon: faSpaceShuttle
  },
  {
    title: 'Wordpress Site Manager',
    about:
      'I am currently maintaining my own Wordpress Blog with a group of people. Visit the blog here https://kartscloud.com',
    icon: faWordpress
  },
  {
    title: 'Frontend Developer',
    about:
      "I can develop SPA's using React and its frameworks (React Native, Next.js).",
    icon: faReact
  },
  {
    title: 'Open to learning',
    about: 'I am open to learning new things and I enjoy Computer Science.',
    icon: faBook
  }
]

export const skillLevel = [
  {
    name: 'C/C++',
    level: '80%',
    icon: faCuttlefish
  },
  {
    name: 'Python',
    level: '90%',
    icon: faPython
  },
  {
    name: 'Node JS',
    level: '80%',
    icon: faNodeJs
  },
  {
    name: 'React',
    level: '60%',
    icon: faReact
  },
  {
    name: 'Linux',
    level: '85%',
    icon: faLinux
  }
]

export const toolLevel = [
  {
    name: 'Codepen',
    level: '70%',
    icon: faCodepen
  },
  {
    name: 'Git',
    level: '80%',
    icon: faGit
  },
  {
    name: 'VMs & VPS',
    level: '95%',
    icon: faServer
  }
]

export const projects = [
  {
    id: 1,
    name: 'Spotify Clone',
    description: 'Spotify Clone using Next.js & Spotify API',
    image_link: '/images/nextspotifyclone.png',
    github_url: 'https://github.com/abhirambsn/next-spotify-clone',
    category: ['Next.js', 'React', 'Typescript', 'Web'],
    tags: ['ts', 'nextjs', 'react', 'web', 'mobile']
  },
  {
    id: 2,
    name: 'Treeviews',
    description: 'It is a Review Application made in React Native',
    image_link: '/images/treeviews.jpeg',
    github_url: 'https://github.com/abhirambsn/treeviews',
    category: ['React Native', 'React', 'Android', 'iOS'],
    tags: ['reactnative', 'react', 'mobile']
  },
  {
    id: 3,
    name: 'Slurp',
    description: 'It is a Restaurant Review Website Made using PHP',
    image_link: '/images/slurp.png',
    github_url: 'https://github.com/abhirambsn/slurp',
    category: ['PHP', 'Web'],
    tags: ['php', 'web']
  },
  {
    id: 4,
    name: 'Library Server',
    description: 'API for a Library Management System made using TS & Mongo DB',
    image_link: '/images/libserver.png',
    github_url: 'https://github.com/abhirambsn/libraryserver',
    category: ['API', 'Backend', 'Node.js', 'Typescript'],
    tags: ['node', 'backend', 'ts', 'api']
  },
  {
    id: 5,
    name: 'vMine',
    description: 'API for a Social Media Application',
    image_link: '/images/vmine.png',
    github_url: 'https://github.com/abhirambsn/vMine-API',
    category: ['API', 'Backend', 'Node.js', 'Javascript'],
    tags: ['node', 'backend', 'js', 'api']
  },
  {
    id: 6,
    name: 'Car Rental System',
    description: 'A C++ and SQLite Project',
    image_link: '/images/carrental.png',
    github_url: 'https://github.com/abhirambsn/carRentalSystem',
    category: ['C++', 'SQLite', 'CLI'],
    tags: ['cpp', 'sqlite', 'cli']
  },
  {
    id: 7,
    name: 'Insight Expense Manager (Django)',
    description: 'An Expense Manager Using Django',
    image_link: '/images/insightdj.png',
    github_url: 'https://github.com/abhirambsn/insight',
    category: ['Django', 'PostgreSQL', 'Stripe'],
    tags: ['django', 'python', 'postgres', 'stripe']
  },
  {
    id: 8,
    name: 'Insight Expense Manager API',
    description: 'The Insight Expense Manager Standalone API',
    image_link: '/images/insightapi.png',
    github_url: 'https://github.com/abhirambsn/expense-manager-api',
    category: ['API', 'Backend', 'Node.js', 'Javascript'],
    tags: ['node', 'backend', 'js', 'web', 'api']
  },
  {
    id: 9,
    name: 'Twitter Clone',
    description: 'Twitter Clone made using Next.js, Tailwind CSS and Firebase v9',
    image_link: '/images/twitterclone.png',
    github_url: 'https://github.com/abhirambsn/twitter-clone',
    category: ['Next.js', 'React', 'Web', 'Firebase'],
    tags: ['nextjs', 'react', 'web', 'js']
  }
]

export const certificates = [
  {
    id: 1,
    name: 'Udemy Android Development Course',
    description: 'Android Oreo Developer Course from Udemy',
    image_link: '/certificates/androiddev.png',
    certificate_url: 'https://www.udemy.com/certificate/UC-7ce7e4ae-fa21-4f0f-909d-71adff3e8022/',
    category: ['Udemy', 'Android', 'Java', 'Education'],
    tags: ['android', 'mobile', 'java', 'edu']
  },
  {
    id: 2,
    name: 'Ethical Hacking from Scratch by Zaid Sabih',
    description: 'Ethical Hacking Course on Udemy',
    image_link: '/certificates/ehudemy.png',
    certificate_url: 'https://www.udemy.com/certificate/UC-ec18abad-6f22-4fb9-a5f8-35355f6664cd/',
    category: ['Udemy', 'Cybersecurity', 'Ethical Hacking', 'Education'],
    tags: ['eh', 'cybersecurity', 'edu']
  },
  {
    id: 3,
    name: 'Introduction to Cyber Security',
    description: 'Introduction to Cybersecurity by Cisco Networking Academy',
    image_link: '/certificates/introcybersec.png',
    certificate_url: '/certificates/introcybersec.png',
    category: ['Cisco Networking Academy', 'Cybersecurity', 'Education'],
    tags: ['edu', 'cybersecurity']
  },
  {
    id: 4,
    name: 'NDG Unhatched Linux Essentials',
    description: 'Linux Essentials Course by Cisco Networking Academy',
    image_link: '/certificates/linuxndg.png',
    certificate_url: '/certificates/linuxndg.png',
    category: ['Linux', 'Education', 'Cisco Networking Academy'],
    tags: ['edu', 'linux']
  },
  {
    id: 5,
    name: 'Bug Bounty Using Burp Suite',
    description: 'Bug Bountry Course from Eduonix',
    image_link: '/certificates/bugbountyburp.png',
    certificate_url: 'https://www.eduonix.com/certificate/911e7105c5',
    category: ['Eduonix', 'Cybersecurity', 'Bug Bounty', 'Education'],
    tags: ['edu', 'cybersecurity', 'bugbounty']
  },
  {
    id: 6,
    name: 'Practical Ethical Hacking using Projects',
    description: 'Practical Ethical Hacking by Eduonix',
    image_link: '/certificates/ehprojects.png',
    certificate_url: 'https://www.eduonix.com/certificate/b66a062124',
    category: ['Eduonix', 'Cybersecurity', 'Ethical Hacking', 'Education'],
    tags: ['edu', 'cybersecurity', 'eh']
  },
  {
    id: 7,
    name: 'Practical Linux using Projects',
    description: 'Practical Linux Learning by Projects from Eduonix',
    image_link: '/certificates/linuxproj.png',
    certificate_url: 'https://www.eduonix.com/certificate/62d89d7b91',
    category: ['Eduonix', 'Linux', 'Education'],
    tags: ['edu', 'linux']
  },
  {
    id: 8,
    name: 'Android Penetration Testing',
    description: 'Android Penetration Testing Course from Eduonix',
    image_link: '/certificates/pentestandroid.png',
    certificate_url: 'https://www.eduonix.com/certificate/411a564477',
    category: [
      'Eduonix',
      'Cybersecurity',
      'Ethical Hacking',
      'Pentesting',
      'Education'
    ],
    tags: ['edu', 'cybersecurity', 'eh', 'pentesting']
  },
  {
    id: 9,
    name: 'Web Penetration Testing',
    description: 'Website Penetration Testing Course from Eduonix',
    image_link: '/certificates/pentestweb.png',
    certificate_url: 'https://www.eduonix.com/certificate/85b335f2d5',
    category: [
      'Eduonix',
      'Cybersecurity',
      'Ethical Hacking',
      'Pentesting',
      'Education'
    ],
    tags: ['edu', 'cybersecurity', 'eh', 'pentesting']
  },
  {
    id: 10,
    name: 'Tryhackme Advent of Cyber 2020',
    description: "Completion of Tryhackme's Advent of Cyber 2020 edition",
    image_link: '/certificates/aoc2020.png',
    certificate_url: '/certificates/aoc2020.png',
    category: ['Tryhackme', 'Cybersecurity', 'Ethical Hacking', 'Achievement'],
    tags: ['cybersecurity', 'eh', 'achievement']
  },
  {
    id: 11,
    name: '30 Days of Google Cloud',
    description: 'Completion of 30 Days of Google Cloud',
    image_link: '/certificates/googlecloud.png',
    certificate_url: '/certificates/googlecloud.png',
    category: ['Google', 'Achievement', 'Cloud'],
    tags: ['cloud', 'achievement']
  }
]
