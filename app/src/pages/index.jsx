import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faDesktop,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import ProjectRow from "../components/ProjectRow";
import SkillBar from "../components/SkillBar";
import WorkExRow from "../components/WorkExRow";
import { usePortfolioContext } from "../components/PortfolioContext";

const HomePage = () => {
  const { dark, changeTheme, projects, workExp, myself, skills } =
    usePortfolioContext();

  return (
    <>
      <Header dark={dark} changeTheme={changeTheme} />
      <MainContainer>
        <div className="flex mx-4 lg:mx-0 flex-col lg:flex-row items-start justify-between gap-4">
          <Card className="flex flex-1 flex-col gap-6 w-full lg:w-auto">
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <img
                className="h-24 w-24 rounded-lg object-cover"
                src={myself.profilePic?.fields.file.url}
              />
              <h3 className="text-xl text-gray-100 font-bold">{myself.name}</h3>
            </div>

            <span className="text-gray-500 text-lg">{myself.tagline}</span>
            <span className="text-gray-50 text-xl font-semibold">
              {myself.title}
            </span>
          </Card>

          <div className="div flex flex-1 flex-col gap-6 h-full w-full lg:w-auto">
            <div className="flex items-center gap-4 w-full justify-between lg:justify-normal">
              <a
                href={myself.github}
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
                href={myself.linkedin}
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
              <span className="text-gray-50 text-lg">{myself.basedin}</span>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500">Studying at</span>
                <span className="text-gray-50 text">{myself.studying_at}</span>
              </div>
            </Card>
          </div>

          <Card className="flex flex-1 w-full lg:w-auto flex-col gap-3 items-center">
            <h6 className="text-gray-50 font-semibold text-center">
              Other Profiles
            </h6>
            <a
              href={myself.tryhackme}
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
              href={myself.hackthebox}
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
              href={myself.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Card className="bg-gray-900 px-2 py-2 mx-auto hover:bg-orange-600 focus-xs hover:cursor-pointer flex items-center space-x-2">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                <span>Youtube Channel</span>
              </Card>
            </a>
          </Card>
        </div>

        <div className="flex mx-4 lg:mx-0 items-center justify-between">
          <h2 className="text-center text-white text-3xl my-8">
            Work Experience
          </h2>
        </div>
        <div className="mx-4 lg:mx-0 flex flex-col md:flex-row gap-4 w-full space-x-2">
          <Carousel showThumbs={false} className="w-full">
            {workExp.map((exp, i) => (
              <WorkExRow
                key={i}
                company_name={exp.company_name}
                logo={exp.logo?.fields.file.url}
                description={exp.description}
                tech_stack_arr={exp.tech_stack_arr}
                designation={exp.designation}
                duration={exp.duration}
                year={exp.year}
                months={exp.months}
                color={exp.color}
                word_lim={exp.word_lim}
              />
            ))}
          </Carousel>
        </div>

        <div className="flex mx-4 lg:mx-0 items-center justify-between">
          <h2 className="text-center text-white text-3xl my-8">Skills</h2>
        </div>
        <div className="mx-4 lg:mx-0 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full lg:space-x-2">
          <Card className="flex-1 flex flex-col gap-5">
            <h2 className="text-lg text-white">Cybersecurity</h2>
            {skills
              .filter((s) => s.category === "Cybersecurity")
              .map((skill) => (
                <SkillBar
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
          </Card>
          <Card className="flex-1 flex flex-col gap-5">
            <h2 className="text-lg text-white">Development and Devops</h2>
            {skills
              .filter((s) => s.category === "Development and Devops")
              .map((skill) => (
                <SkillBar
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
          </Card>
          <Card className="flex-1 flex flex-col gap-5">
            <h2 className="text-lg text-white">Soft Skills</h2>
            {skills
              .filter((s) => s.category === "Soft Skills")
              .map((skill) => (
                <SkillBar
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
          </Card>
        </div>

        <div className="flex mx-4 lg:mx-0 items-center justify-between">
          <h2 className="text-center text-white text-3xl my-8">My Projects</h2>
          <a
            href="/projects"
            className="flex rounded-full bg-gray-50 text-gray-900 p-4 hover:bg-gray-800 hover:text-gray-50 transition-all ease-in-out duration-150 items-center justify-center space-x-2"
          >
            <span className="hidden lg:block">View All Projects</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="flex mx-4 lg:mx-0">
          <div className="flex flex-1 flex-col gap-5">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectRow
                key={i}
                title={project.title}
                icon={faDesktop}
                description={project.description}
                tech_stack_arr={project.tech_stack}
                duration={project.duration}
                year={project.year}
                months={project.months}
                github={project.github}
                deployed_url={project.deployed_url}
                deployed_at={project.deployed_at}
                color={project.color}
              />
            ))}
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};

export default HomePage;
