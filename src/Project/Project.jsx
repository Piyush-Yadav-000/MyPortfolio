import React from "react";

const projects = [
  {
    title: "Jobhook - Job portal",
    description:
      "A full-stack job portal application that connects job seekers with employers. Features include Login/SignUp, advanced search filters, resume upload, application tracking, and real-time notifications. Built with responsive design and modern authentication. !!!!!!Backend not deployed yet!!!!!!",
    tech: ["HTML", "CSS", "JavaScript", "React JS", "RestAPI","Java","Springboot","Tailwind","MySQL",],
    image: "assets/images/JobHook Portfolio image.png",
    // liveLink: "https://jobhookbypy.netlify.app/",
    backendVideo:"https://drive.google.com/file/d/19JauO_Xmgx0tWEPqKoa3AWREN-tp4jU-/view?usp=drivesdk",
    githubLink: "https://github.com/Piyush-Yadav-000/jobhook-portal.git"
  },
  {
  title: "AlgoLes - A Online Coding Platform",
  description:
    "A comprehensive competitive programming platform enabling real-time code execution across multiple languages (Java, C++, Python). Features include Monaco code editor, Judge0 API integration for secure compilation, problem management system, automated test case validation, user submission tracking, and JWT authentication. Built with enterprise-grade architecture achieving 95% code execution accuracy. !!!!!!Live deployment in progress!!!!!!",
  tech: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "Judge0 API", "Monaco Editor", "JWT", "REST API", "Hibernate", "JUnit"],
  image: "assets/images/AlgoLens Portflio image.png",
  // liveLink: "https://mockarena-frontend.netlify.app/", // Update with your actual deployment link
  backendVideo: "https://drive.google.com/file/d/1RbvFx2NEvOT7CFTuv9Ds5fo7smIJz2hy/view?usp=drivesdk", // Add your demo video
  githubLink: "https://github.com/Piyush-Yadav-000/AlgoLens_Coding_Platform_Backend.git"
},
  {
    title: "My Portfolio ",
    description:
       "A modern, responsive portfolio website built with React and TailwindCSS. Features include dark/light mode, smooth scrolling, interactive project cards, and a contact form integrated with EmailJS. Showcases my projects, skills, and professional experience with elegant animations and transitions.",
    tech: ["React.js", "TailwindCSS", "EmailJS", "JavaScript", "HTML5", "CSS3"],
    image: "assets/images/Portfolio.png",
    liveLink: "https://piyushyadav15.netlify.app/",
    githubLink: "https://github.com/Piyush-Yadav-000/MyPortfolio.git"
  },
  {
    title: "Currency Converter",
    description:
     "A dynamic currency conversion application built with vanilla JavaScript, HTML5, and CSS3. Features include real-time exchange rates, support for multiple currencies, and an intuitive user interface. Implements responsive design for seamless usage across all devices and integrates with Exchange Rate API for accurate conversions.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API", "Responsive Design"],
    image: "assets/images/currencycoverter.png",
      liveLink: "https://currencyconvertorbypy.netlify.app/",
    githubLink: "https://github.com/Piyush-Yadav-000/Projects/tree/d834b88a04dbf63e9242a1072acd4bb50f9588b2/currency%20convertor"
  },
  {
    title: "Web Quiz App",
    description:
     "An interactive quiz application built with vanilla JavaScript, HTML5, and CSS3. Features include multiple choice questions, timer functionality, score tracking, and instant feedback. Implements local storage for high scores, responsive design for mobile devices, and smooth animations for enhanced user experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Responsive Design"],
    image: "assets/images/Quizapp.png",
    liveLink: "https://quizappbypy.netlify.app/",
    githubLink: "https://github.com/Piyush-Yadav-000/Projects/tree/d834b88a04dbf63e9242a1072acd4bb50f9588b2/Quiz%20App"    
  },
  {
    title: "Tic Tac Toe",
    description:
     "A classic Tic Tac Toe game built using HTML, CSS, and JavaScript, where two players take turns to mark X and O in a 3×3 grid. The game provides an interactive user experience with sound effects and real-time win",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: "assets/images/Tictactoe.png",
      liveLink: "https://gamebypy.netlify.app/",
    githubLink: "https://github.com/Piyush-Yadav-000/Projects/tree/d834b88a04dbf63e9242a1072acd4bb50f9588b2/Tictac%20Toe"
  },
];

const Projects = () => {
  const handleProjectClick = (project) => {
    if (project.liveLink) {
      window.open(project.liveLink, '_blank');
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 text-white max-w-7xl mx-auto" id="projects">
      <h2 className="text-4xl font-bold text-center mb-2">PROJECTS</h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto mb-6 rounded-full"></div>
      <p className="text-center text-gray-300 mb-12">
        A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div 
            key={index} 
            onClick={() => handleProjectClick(project)}
            className="bg-gradient-to-t from-10% to-indigo-950 rounded-xl p-6 shadow-lg border border-cyan-700 
              hover:scale-105 transition-transform duration-300 cursor-pointer
              w-full max-w-sm mx-auto group relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 w-full h-48 object-cover bg-gray-800"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-purple-950 text-sm px-2 py-1 rounded-md text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300"
                >
                  Live Demo
                </a>
              )}

                {project.backendVideo && (
                <a 
                  href={project.backendVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300"
                >
                  Backend Video
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
