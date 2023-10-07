import React from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import Card from "../components/Card";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faDownload,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import ProjectRow from "../components/ProjectRow";

const projects = [
  {
    title: "Web Application Enumeration Suite (wapp-enum)",
    description:
      "A Complete Web Application Enumeration Suite written in Python, with extensible user scripts, deployed to docker as a Docker Image",
    tech_stack: ["Python", "Docker"],
    icon: faGlobe,
    deployed_at: "Dockerhub",
  },
  {
    title: "Web Application Enumeration Suite (wapp-enum)",
    description:
      "A Complete Web Application Enumeration Suite written in Python, with extensible user scripts, deployed to docker as a Docker Image",
    tech_stack: ["Python", "Docker"],
    icon: faGlobe,
    deployed_at: "Dockerhub",
  },
  {
    title: "Web Application Enumeration Suite (wapp-enum)",
    description:
      "A Complete Web Application Enumeration Suite written in Python, with extensible user scripts, deployed to docker as a Docker Image",
    tech_stack: ["Python", "Docker"],
    icon: faGlobe,
    deployed_at: "Dockerhub",
  },
];

const HomePage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <div className="flex mx-4 lg:mx-0 flex-col lg:flex-row items-start justify-between gap-4">
          <Card className="flex flex-1 flex-col gap-6 w-full lg:w-auto">
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <img
                className="h-24 w-24 rounded-lg object-cover"
                src="https://via.placeholder.com/150"
              />
              <h3 className="text-xl text-gray-100 font-bold">
                Abhiram B.S.N.
              </h3>
            </div>

            <span className="text-gray-500 text-lg">
              Student, Cybersecurity, Penetration Testing
            </span>
            <span className="text-gray-50 text-xl font-semibold">
              Ethical Hacker
            </span>
          </Card>

          <div className="div flex flex-1 flex-col gap-6 h-full w-full lg:w-auto">
            <div className="flex items-center gap-4 w-full justify-between lg:justify-normal">
              <a
                href="https://github.com/abhirambsn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-0 md:flex-1"
              >
                <Card className="px-5 mx-auto hover:bg-green-400 focus hover:cursor-pointer flex items-center space-x-2">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  <span className="hidden md:block">GitHub</span>
                </Card>
              </a>
              <a
                href="https://linkedin.com/in/bhallamudi-sai-narasimha-abhiram/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-0 md:flex-1"
              >
                <Card className="px-5 mx-auto hover:bg-blue-400 focus duration-150 hover:cursor-pointer flex items-center space-x-2">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  <span className="hidden md:block">Linkedin</span>
                </Card>
              </a>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-0 md:flex-1"
              >
                <Card className="px-5 mx-auto hover:bg-orange-400 focus hover:cursor-pointer flex items-center space-x-2">
                  <FontAwesomeIcon icon={faDownload} size="2x" />
                  <span className="hidden md:block">Resume</span>
                </Card>
              </a>
            </div>

            <Card className="flex flex-1 flex-col gap-4">
              <span className="text-gray-500">Based in</span>
              <span className="text-gray-50 text-lg">Noida, India 🇮🇳</span>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500">Studying at</span>
                <span className="text-gray-50 text">
                  Jaypee Institute of Information Technology, Noida
                </span>
              </div>
            </Card>
          </div>

          <Card className="flex flex-1 w-full lg:w-auto flex-col gap-3 items-center">
            <h6 className="text-gray-50 font-semibold text-center">
              Other Profiles
            </h6>
            <a
              href="https://app.hackthebox.com/profile/397089"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Card className="bg-gray-900 px-3 mx-auto hover:bg-red-500 focus-xs hover:cursor-pointer flex items-center space-x-2">
                <Icon icon="simple-icons:tryhackme" fontSize="28" />
                <span>Tryhackme</span>
              </Card>
            </a>
            <a
              href="https://tryhackme.com/p/abhirambsn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Card className="bg-gray-900 px-3 mx-auto hover:bg-green-500 focus-xs hover:cursor-pointer flex items-center space-x-2">
                <Icon icon="simple-icons:hackthebox" fontSize="28" />
                <span>Hackthebox</span>
              </Card>
            </a>
            <a
              href="https://gitlab.com/abhirambsn/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Card className="bg-gray-900 px-2 py-2 mx-auto hover:bg-orange-600 focus-xs hover:cursor-pointer flex items-center space-x-2">
                <FontAwesomeIcon icon={faGitlab} size="2x" />
                <span>GitLab</span>
              </Card>
            </a>
          </Card>
        </div>

        <div className="flex mx-4 lg:mx-0 items-center justify-between">
          <h2 className="text-center text-white text-3xl my-8">My Projects</h2>
          <button className="flex rounded-full bg-gray-800 p-4 hover:bg-gray-900 transition-all ease-in-out duration-150 items-center justify-center space-x-2">
            <span className="hidden lg:block">View All Projects</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        {/* <div className="w-full bg-red-800"> */}
        <div className="flex mx-4 lg:mx-0">
          <div className="flex flex-1 flex-col gap-5">
            {projects.map((project, i) => (
              <ProjectRow
                key={i}
                title={project.title}
                icon={project.icon}
                description={project.description}
                tech_stack_arr={project.tech_stack}
                duration="2 Months"
                year="2023"
                months="Jan - Oct"
                github="https://github.com/abhirambsn/abhirambsn.git"
                deployed_url="https://hub.docker.com/abhirambsn/wapp-enum"
                deployed_at={project.deployed_at}
                color="green"
              />
            ))}
          </div>
        </div>
        {/* </div> */}
      </MainContainer>
      <Footer />
    </>
  );
};

export default HomePage;
