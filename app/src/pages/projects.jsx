import React from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import { usePortfolioContext } from "../components/PortfolioContext";

const ProjectsPage = () => {
  const { pageVisits, dark, changeTheme } = usePortfolioContext();
  return (
    <>
      <Header pageVisits={pageVisits} dark={dark} changeTheme={changeTheme} />
      <MainContainer>
        <h1 className="text-white text-3xl underline">ProjectsPage</h1>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ProjectsPage;
