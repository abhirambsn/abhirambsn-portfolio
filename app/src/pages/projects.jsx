import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import { usePortfolioContext } from "../components/PortfolioContext";
import ProjectRow from "../components/ProjectRow";
import Search from "../components/Search";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const ProjectsPage = () => {
  const { dark, changeTheme, projects } = usePortfolioContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    document.title = "Abhiram B.S.N. | Projects"
  }, []);
  
  useEffect(() => {
    if (searchTerm.length === 0 || searchTerm === "")
      setFilteredProjects(projects);
    setFilteredProjects(
      projects.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tech_stack.includes(searchTerm)
      )
    );
  }, [searchTerm]);

  return (
    <>
      <Header dark={dark} changeTheme={changeTheme} />
      <MainContainer>
        <div className="mx-4 lg:mx-0">
          <h1 className="text-xl lg:text-2xl font-bold mb-1 text-center lg:text-left">
            My Projects
          </h1>
          <p className="text-sm lg:text font-light text-center lg:text-left text-gray-300">
            All of my projects are available Here, search using the bar below :)
          </p>
        </div>
        <div className="my-5 mx-4 lg:mx-0">
          <Search
            placeHolder={"Search Certificates"}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
        <div className="flex mx-4 lg:mx-0 flex-1 flex-col gap-5 divide-y-2 lg:divide-y-0">
          {filteredProjects.map((project, i) => (
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
      </MainContainer>
      <Footer />
    </>
  );
};

export default ProjectsPage;
