import React, { useEffect, useState } from "react";
import { usePortfolioContext } from "../components/PortfolioContext";
import Header from "../components/Header";
import Search from "../components/Search";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

const CertificatesPage = () => {
  const { pageVisits, dark, changeTheme, projects } = usePortfolioContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCertificates, setFilteredCertificates] = useState([]);

  return (
    <>
      <Header pageVisits={pageVisits} dark={dark} changeTheme={changeTheme} />
      <MainContainer>
        <div className="mx-4 lg:mx-0">
          <h1 className="text-xl lg:text-2xl font-bold mb-1 text-center lg:text-left">
            My Certificates
          </h1>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};

export default CertificatesPage;
