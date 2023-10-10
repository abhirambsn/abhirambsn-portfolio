import React from "react";
import { usePortfolioContext } from "../components/PortfolioContext";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import CertificateCard from "../components/CertificateCard";

const CertificatesPage = () => {
  const { dark, changeTheme, certificates } = usePortfolioContext();

  return (
    <>
      <Header dark={dark} changeTheme={changeTheme} />
      <MainContainer>
        <div className="mx-4 lg:mx-0">
          <h1 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-1 text-center lg:text-left">
            My Certificates
          </h1>
        </div>
        <div className="my-4 mx-4 lg:mx-0 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((certificate, i) => (
            <CertificateCard
              key={i}
              name={certificate.name}
              description={certificate.description}
              image={certificate.image?.fields.file.url}
              url={certificate.url}
              awarded_by={certificate.awarded_by}
              awarded_on={certificate.awarded_on}
            />
          ))}
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};

export default CertificatesPage;
