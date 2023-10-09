import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import { usePortfolioContext } from "../components/PortfolioContext";
import ProjectRow from "../components/ProjectRow";
import Search from "../components/Search";
import EducationCard from "../components/EducationCard";

const ProjectsPage = () => {
  const { pageVisits, dark, changeTheme, education } = usePortfolioContext();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header pageVisits={pageVisits} dark={dark} changeTheme={changeTheme} />
      <MainContainer>
        <div className="mx-4 lg:mx-0">
          <h1 className="text-xl lg:text-2xl font-bold mb-1 text-center lg:text-left">
            Educational Qualifications
          </h1>
        </div>

        <div className="my-5 mx-4 lg:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {education.map((ed, i) => (
            <EducationCard
              key={i}
              institute_name={ed.institute_name}
              course_name={ed.course_name}
              percentage={ed.percentage}
              discipline={ed.discipline}
              start={ed.start}
              end={ed.end}
              metric={ed.metric}
              color={ed.color}
            />
          ))}
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ProjectsPage;
