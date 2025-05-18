import React from "react";
import Tilt from 'react-parallax-tilt'

const Skills = () => {
  const skillsData = [
    {
      id: "1",
      label: "Frontend",
      skills: [
        { name: "React", logo: "src/assets/logoimage/react.png" },
        { name: "JavaScript", logo: "src/assets/logoimage/javascript.png" },
        { name: "HTML5", logo: "src/assets/logoimage/html-5.png" },
        { name: "CSS3", logo: "src/assets/logoimage/css-3.png" },
        { name: "Tailwind", logo: "src/assets/logoimage/tailwind.png" },
      ],
    },
    {
      id: "2",
      label: "Backend",
      skills: [
        { name: "Java", logo: "src/assets/logoimage/java.png" },
        { name: "Springboot", logo: "src/assets/logoimage/spring.png" },
        { name: "MySQL", logo: "src/assets/logoimage/mysql.png" },
      ],
    },  
    {
      id: "3",
      label: "Languages",
      skills: [
        { name: "C", logo: "src/assets/logoimage/C.png" },
        { name: "C++", logo: "src/assets/logoimage/C++ (CPlusPlus).png" },
        { name: "Python", logo: "src/assets/logoimage/python.png" },
        { name: "Java", logo: "src/assets/logoimage/java.png" },
      ],
    },
    {
      id: "4",
      label: "Tools",
      skills: [
        { name: "VS Code", logo: "src/assets/logoimage/vs-code.png" },
        { name: "Postman", logo: "src/assets/logoimage/postman.png" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl min-h-screen px-4 sm:px-6 py-8 sm:py-12 mx-auto lg:mx-56" id="skills">
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
              <div
                className="bg-black/20 p-4 sm:p-6 rounded-xl border-2 border-cyan-500 hover:border-yellow-400 transition-colors h-full"
              >
                <h3 className="text-lg sm:text-xl font-bold text-cyan-500 mb-3 sm:mb-4">
                  {category.label}
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {category.skills.map((skill, index) => (
                    <li
                      key={index}
                      className='text-white text-sm sm:text-base md:text-lg h-10 sm:h-12 flex justify-center items-center gap-1 sm:gap-2 font-["Bricolage Grotesque"] border-2 rounded-full p-2 sm:p-3 hover:scale-90 transition-all duration-200'
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
