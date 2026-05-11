import React from "react";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const skillsData = [
    {
      id: "1",
      label: "Frontend",
      skills: [
        {
          name: "React.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "JavaScript (ES6+)",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
        {
          name: "Bootstrap",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      id: "2",
      label: "Backend",
      skills: [
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Spring Boot",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "Spring Security",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "Hibernate",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg",
        },
        {
          name: "JPA",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "REST APIs",
          logo: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "JWT",
          logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
        },
        {
          name: "Maven",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
        },
      ],
    },
    {
      id: "3",
      label: "Languages",
      skills: [
        {
          name: "C",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
          name: "C++",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
    },
    {
      id: "4",
      label: "Core Concepts",
      skills: [
        {
          name: "DSA",
          logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
        },
        {
          name: "OOP",
          logo: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
        },
        {
          name: "DBMS",
          logo: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
        },
        {
          name: "Operating Systems",
          logo: "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
        },
        {
          name: "Computer Networks",
          logo: "https://cdn-icons-png.flaticon.com/512/2885/2885417.png",
        },
      ],
    },
    {
      id: "5",
      label: "Tools",
      skills: [
        {
          name: "VS Code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Postman",
          logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ],
    },
  ];

  return (
    <div
      className="max-w-7xl min-h-screen px-4 sm:px-6 py-8 sm:py-12 mx-auto lg:mx-56"
      id="skills"
    >
      <div className="flex flex-col space-y-6 text-center">
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white font-["Bricolage Grotesque"]'>
          <span className='text-2xl sm:text-3xl md:text-4xl font-bold font-["Bricolage Grotesque"] hover:border-b-4 border-cyan-500 pb-2 transition-all duration-100'>
            Skills
          </span>
        </h2>

        <p className='text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-white font-["Bricolage Grotesque"]'>
          Here are the technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
          {skillsData.map((category) => (
            <Tilt
              key={category.id}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.05}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareBorderRadius="20px"
              className="w-full"
            >
              <div className="bg-black/20 p-4 sm:p-6 rounded-xl border-2 border-cyan-500 hover:border-yellow-400 transition-colors h-full">
                <h3 className="text-lg sm:text-xl font-bold text-cyan-500 mb-3 sm:mb-4">
                  {category.label}
                </h3>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className='text-white text-sm sm:text-base md:text-lg min-h-[40px] sm:min-h-[48px] flex justify-center items-center gap-1 sm:gap-2 font-["Bricolage Grotesque"] border-2 rounded-full p-2 sm:p-3 hover:scale-90 transition-all duration-200'
                    >
                      <img
                        className="h-4 w-4 sm:h-6 sm:w-6 object-contain"
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                      />
                      <span className="truncate">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;