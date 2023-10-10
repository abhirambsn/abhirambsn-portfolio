import { createContext, useContext, useEffect, useState } from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import useContentful from "../hooks/useContentful";
import { CirclesWithBar } from "react-loader-spinner";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [education, setEducation] = useState([]);
  const [myself, setMyself] = useState({});
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(true);
  const { getData } = useContentful();

  const setWorkExperience = (data) => {
    setWorkExp(data.map((d) => ({ ...d, icon: faGlobe })));
  };
  const changeTheme = (dark) => setDark(dark);

  useEffect(() => {
    setLoading(true);
    getData("myself", true).then((resp) => setMyself(resp));
    getData("projects").then((resp) => setProjects(resp));
    getData("workExperience").then((resp) => setWorkExperience(resp));
    getData("education").then((resp) => setEducation(resp));
    getData("certificates").then((resp) => setCertificates(resp));
    getData("skill").then((resp) => setSkills(resp));
    setLoading(false);
  }, []);
  return (
    <PortfolioContext.Provider
      value={{
        dark,
        changeTheme,
        workExp,
        projects,
        certificates,
        education,
        myself,
        skills,
      }}
    >
      {loading ? (
        <CirclesWithBar
          height="100"
          width="100"
          visible={true}
          ariaLabel="circles-with-bar-loading"
          color="#f9fafb"
          wrapperStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        children
      )}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("useMyContext must be used within a PortfolioProvider");
  }

  return context;
};
