import { createContext, useContext, useEffect, useState } from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const projects = [
    {
      title: "Web Application Enumeration Suite (wapp-enum)",
      description:
        "A Complete Web Application Enumeration Suite written in Python, with extensible user scripts, deployed to docker as a Docker Image",
      tech_stack: ["Python", "Docker"],
      icon: faGlobe,
      deployed_at: "Dockerhub",
      duration: "2 Months",
      year: "2023",
      months: "Jan - Oct",
      github: "https://github.com/abhirambsn/abhirambsn.git",
      deployed_url: "https://hub.docker.com/abhirambsn/wapp-enum",
      color: "green",
    },
    {
      title: "Web Application Enumeration Suite (wapp-enum)",
      description:
        "A Complete Web Application Enumeration Suite written in Python, with extensible user scripts, deployed to docker as a Docker Image",
      tech_stack: ["Python", "Docker"],
      icon: faGlobe,
      deployed_at: "Dockerhub",
      duration: "2 Months",
      year: "2023",
      months: "Jan - Oct",
      github: "https://github.com/abhirambsn/abhirambsn.git",
      deployed_url: "https://hub.docker.com/abhirambsn/wapp-enum",
      color: "blue",
    },
    {
      title: "Web Application Enumeration Suite (wapp-enum)",
      description:
        "A Complete Web Application Enumeration Suite written in Python, with extensible user scripts, deployed to docker as a Docker Image",
      tech_stack: ["Python", "Docker"],
      icon: faGlobe,
      deployed_at: "Dockerhub",
      duration: "2 Months",
      year: "2023",
      months: "Jan - Oct",
      github: "https://github.com/abhirambsn/abhirambsn.git",
      deployed_url: "https://hub.docker.com/abhirambsn/wapp-enum",
      color: "blue",
    },
    {
      title: "Web Application Enumeration Suite (wapp-enum)",
      description:
        "A Complete Web Application Enumeration Suite written in Python, with extensible user scripts, deployed to docker as a Docker Image",
      tech_stack: ["Python", "Docker"],
      icon: faGlobe,
      deployed_at: "Dockerhub",
      duration: "2 Months",
      year: "2023",
      months: "Jan - Oct",
      github: "https://github.com/abhirambsn/abhirambsn.git",
      deployed_url: "https://hub.docker.com/abhirambsn/wapp-enum",
      color: "blue",
    },
    {
      title: "Web Application Enumeration Suite (wapp-enum)",
      description:
        "A Complete Web Application Enumeration Suite written in Python, with extensible user scripts, deployed to docker as a Docker Image",
      tech_stack: ["Python", "Docker"],
      icon: faGlobe,
      deployed_at: "Dockerhub",
      duration: "2 Months",
      year: "2023",
      months: "Jan - Oct",
      github: "https://github.com/abhirambsn/abhirambsn.git",
      deployed_url: "https://hub.docker.com/abhirambsn/wapp-enum",
      color: "blue",
    },
    {
      title: "Web Application Enumeration Suite (wapp-enum)",
      description:
        "A Complete Web Application Enumeration Suite written in Python, with extensible user scripts, deployed to docker as a Docker Image",
      tech_stack: ["Python", "Docker"],
      icon: faGlobe,
      deployed_at: "Dockerhub",
      duration: "2 Months",
      year: "2023",
      months: "Jan - Oct",
      github: "https://github.com/abhirambsn/abhirambsn.git",
      deployed_url: "https://hub.docker.com/abhirambsn/wapp-enum",
      color: "blue",
    },
  ];

  const workExp = [
    {
      company_name: "PwC India",
      designation: "Intern / Trainee",
      color: "orange",
      logo: "https://logos-world.net/wp-content/uploads/2022/01/PwC-PricewaterhouseCoopers-Logo.png",
      description:
        "freestar freestar \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl eget neque placerat porta id in augue. Proin risus est, faucibus a iaculis sit amet, placerat nec odio. Proin eget lorem nulla. In laoreet massa aliquet dui dignissim, at malesuada felis accumsan. Phasellus posuere nisl id facilisis ultrices. Pellentesque ut elementum ipsum. Ut euismod, mauris id bibendum vehicula, dolor sapien malesuada leo, imperdiet hendrerit arcu ipsum sed quam. Donec faucibus in purus sed ultrices. Duis sed lobortis ante, sit.",
      tech_stack_arr: [
        "Docker",
        "Ethical Hacking",
        "Cyber Security",
        "Penetration Testing",
        "Kali Linux",
      ],
      duration: "3 Months",
      months: "May to Aug",
      year: "2023",
      word_lim: 70,
    },
    {
      company_name: "Nucleus Software Exports Ltd.",
      designation: "Project Intern",
      color: "sky",
      logo: "https://stories.nucleussoftware.com/wp-content/uploads/2021/10/Logo_white.png",
      description:
        "freestar freestar \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl eget neque placerat porta id in augue. Proin risus est, faucibus a iaculis sit amet, placerat nec odio. Proin eget lorem nulla. In laoreet massa aliquet dui dignissim, at malesuada felis accumsan. Phasellus posuere nisl id facilisis ultrices. Pellentesque ut elementum ipsum. Ut euismod, mauris id bibendum vehicula, dolor sapien malesuada leo, imperdiet hendrerit arcu ipsum sed quam. Donec faucibus in purus sed ultrices. Duis sed lobortis ante, sit.",
      tech_stack_arr: ["Java", "HTML", "CSS3", "JSP Servelets"],
      duration: "1 Month",
      months: "Jan to Feb",
      year: "2022",
      word_lim: 100,
    },
    {
      company_name: "IEEE Student Branch JIIT",
      designation: "Webmaster",
      color: "blue",
      logo: "https://yt3.googleusercontent.com/ytc/AOPolaQatLZbIphjHuBVOcxO71FhCFclxQ0ya_mrPbYEdQ=s900-c-k-c0x00ffffff-no-rj",
      description:
        "freestar freestar \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl eget neque placerat porta id in augue. Proin risus est, faucibus a iaculis sit amet, placerat nec odio. Proin eget lorem nulla. In laoreet massa aliquet dui dignissim, at malesuada felis accumsan. Phasellus posuere nisl id facilisis ultrices. Pellentesque ut elementum ipsum. Ut euismod, mauris id bibendum vehicula, dolor sapien malesuada leo, imperdiet hendrerit arcu ipsum sed quam. Donec faucibus in purus sed ultrices. Duis sed lobortis ante, sit.",
      tech_stack_arr: [
        "Docker",
        "Javascript",
        "Website Administration",
        "Web Development",
      ],
      duration: "1 Year",
      months: "Jun 2022 to May 2023",
      year: "2022 - 2023",
      word_lim: 55,
    },
    {
      company_name: "Google Developer Students Club",
      designation: "Technical Coordinator",
      color: "",
      logo: "https://logogen.gdscasu.com/logos/gdsc-logo.png",
      description:
        "freestar freestar \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl eget neque placerat porta id in augue. Proin risus est, faucibus a iaculis sit amet, placerat nec odio. Proin eget lorem nulla. In laoreet massa aliquet dui dignissim, at malesuada felis accumsan. Phasellus posuere nisl id facilisis ultrices. Pellentesque ut elementum ipsum. Ut euismod, mauris id bibendum vehicula, dolor sapien malesuada leo, imperdiet hendrerit arcu ipsum sed quam. Donec faucibus in purus sed ultrices. Duis sed lobortis ante, sit.",
      tech_stack_arr: [
        "Docker",
        "Web Development",
        "Android",
        "App Development",
      ],
      duration: "1 Year",
      months: "Jul 2022 to Jun 2023",
      year: "2022 - 2023",
      word_lim: 75,
    },
  ];

  const certificates = [
    {
      name: "Smart India Hackathon - Winner",
      description: "",
      image: "https://via.placeholder.com/200",
      url: "https://picsum.photos/300",
      awarded_by: "Ministry of Education, Government of India",
      awarded_on: "29th August 2022",
    },
    {
      name: "Techacks 3.0 Winner",
      description: "",
      image: "https://picsum.photos/200",
      url: "https://picsum.photos/300",
      awarded_by: "Ministry of Education, Government of India",
      awarded_on: "29th August 2022",
    },
    {
      name: "ETH For All - Winner",
      description: "",
      image: "https://via.placeholder.com/200",
      url: "https://picsum.photos/300",
      awarded_by: "Ministry of Education, Government of India",
      awarded_on: "29th August 2022",
    },
    {
      name: "ETH For All - Winner",
      description: "",
      image: "https://via.placeholder.com/200",
      url: "https://picsum.photos/300",
      awarded_by: "Ministry of Education, Government of India",
      awarded_on: "29th August 2022",
    },
    {
      name: "ETH For All - Winner",
      description: "",
      image: "https://via.placeholder.com/200",
      url: "https://picsum.photos/300",
      awarded_by: "Ministry of Education, Government of India",
      awarded_on: "29th August 2022",
    },
  ];

  const education = [
    {
      institute_name: "Jaypee Institute of Information Technology",
      percentage: "8.3",
      course_name: "Integrated M.Tech",
      discipline: "Computer Science and Engineering",
      start: "2020",
      end: "2025",
      metric: "CGPA",
      color: "sky"
    },
    {
      institute_name: "Indirapuram Public School, Indirapuram",
      percentage: "91.0",
      course_name: "Class 12",
      discipline: "Central Board of Secondary Education",
      start: "2018",
      end: "2020",
      metric: "Percentage",
      color: "red"
    },
    {
      institute_name: "Indirapuram Public School, Indirapuram",
      percentage: "92.6",
      course_name: "Class 10",
      discipline: "Central Board of Secondary Education",
      start: "2017",
      end: "2028",
      metric: "Percentage",
      color: "red"
    },
  ];

  const [pageVisits, setPageVisits] = useState(0);
  const [dark, setDark] = useState(true);

  const changeTheme = (dark) => setDark(dark);
  useEffect(() => {
    const storedCount = localStorage.getItem("pageVisits");
    const initialCount = Number(storedCount) || 0;
    const newCount = initialCount + 1;
    setPageVisits(newCount);
    localStorage.setItem("pageVisits", newCount);
  }, []);
  return (
    <PortfolioContext.Provider
      value={{
        pageVisits,
        dark,
        changeTheme,
        workExp,
        projects,
        certificates,
        education
      }}
    >
      {children}
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
