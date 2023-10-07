import React from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import { usePortfolioContext } from "../components/PortfolioContext";

const EducationPage = () => {
  const { pageVisits, dark, changeTheme, projects } = usePortfolioContext();
  return (
    <>
      <Header pageVisits={pageVisits} dark={dark} changeTheme={changeTheme} />
    </>
  );
};

export default EducationPage;
