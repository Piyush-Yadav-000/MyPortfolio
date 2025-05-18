import React, { useState, useEffect } from 'react';
import { Briefcase, School, Star, Award } from 'lucide-react';

const Timeline = () => {
  const [isVisible, setIsVisible] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );
    
    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      id: "Class X",
      title: "Secondary School",
      company: "Vidya Mandir Public School",
      location: "Faridabad, Haryana",
      date: "2022 - Present",
      description: "Successfully completed Class 10 with a strong academic foundation in core subjects including Mathematics, Science, Social Science, English, and Hindi. Developed critical thinking, problem-solving abilities, and teamwork through various school assignments and extracurricular activities.",
      skills: ["English", "Maths", "Science", "Social Studies"],
      icon: "work"
    },
    {
      id: "Class XII",
      title: "Senior Secondary",
      company: "Vidya Mandir Public School",
      location: "Faridabad,Haryana",
      date: "2022 - 2023",
      description: "Completed CBSE Senior Secondary Education with core subjects in Physics, Chemistry, and Mathematics. Built a strong academic base in science and math, fostering an aptitude for problem-solving, critical thinking, and technical learning.",
      skills: ["Physics", "Chemistry", "Mathematics", "Python"],
      icon: "work"
    },
    {
      id: "Btech",
      title: "BTech in Computer Science and Engineering",
      company: "Manav rachna international institute of research and studies",
      location: "Faridabad ,Harayana",
      date: "2023 - Present",
      description: "A Studied key subjects including programming, data structures, algorithms, operating systems, databases, networking, and software engineering.Developed skills in software development, coding, and problem-solving.Worked on academic projects to apply theoretical knowledge in practical scenarios.",
      skills: ["Data Structures", "Problem Solving", "Operating System", "Computer Network","Database Management systems"],
      icon: "achievement"
    },
    // {
    //   id: "exp4",
    //   title: "Junior Software Engineer",
    //   company: "WebTech Startup",
    //   location: "Boston, MA",
    //   date: "2018 - 2020",
    //   description: "Built responsive web interfaces and collaborated on backend development. Participated in all stages of the development lifecycle from conception to deployment. Worked in an Agile environment with weekly sprints.",
    //   skills: ["JavaScript", "HTML5", "CSS3", "Node.js"],
    //   icon: "work"
    // },
    // {
    //   id: "exp5",
    //   title: "Bachelor of Science, Computer Science",
    //   company: "University of Technology",
    //   location: "Boston, MA",
    //   date: "2014 - 2018",
    //   description: "Graduated with honors. Focused on software engineering and web development. Completed thesis on modern frontend frameworks and their impact on web application architecture.",
    //   skills: ["Algorithms", "Data Structures", "Web Development"],
    //   icon: "education"
    // }
  ];

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'work':
        return <Briefcase className="w-5 h-5 text-white" />;
      case 'education':
        return <School className="w-5 h-5 text-white" />;
      case 'achievement':
        return <Award className="w-5 h-5 text-white" />;
      default:
        return <Star className="w-5 h-5 text-white" />;
    }
  };

  const getIconBackground = (iconType) => {
    switch(iconType) {
      case 'work':
        return 'bg-cyan-500';
      case 'education':
        return 'bg-purple-500';
      case 'achievement':
        return 'bg-amber-500';
      default:
        return 'bg-cyan-500';
    }
  };

  return (
    <div className="max-w-7xl min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mx-auto">
     

      {/* Timeline Container */}
      <div className="relative">
        {/* Center vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-amber-500 transform md:-translate-x-1/2"></div>

        {/* Timeline items */}
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              id={item.id}
              key={item.id} 
              className={`timeline-item relative mb-8 sm:mb-16 flex items-start ${
                isEven ? 'md:justify-start' : 'md:justify-end'
              } justify-start`}
            >
              {/* Center icon */}
              <div className={`absolute left-4 md:left-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full ${
                getIconBackground(item.icon)
              } shadow-lg flex items-center justify-center transform -translate-x-1/2 z-20 border-2 sm:border-4 border-gray-900 transition-all duration-500 ${
                isVisible[item.id] ? 'scale-100' : 'scale-0'
              }`}>
                {getIcon(item.icon)}
              </div>

              {/* Content card */}
              <div 
                className={`md:w-5/12 w-[calc(100%-3rem)] ml-12 md:ml-0 ${
                  isEven ? 'md:mr-auto' : 'md:ml-auto'
                } ${
                  isVisible[item.id] 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 ' + (isEven ? '-translate-x-12' : 'translate-x-12')
                } transition-all duration-700 ease-out`}
              >
                <div className="bg-black/20 p-4 sm:p-6 rounded-lg border border-cyan-500 hover:border-yellow-400 transition-colors duration-300 shadow-xl hover:shadow-cyan-500/20">
                  <div className="text-xs sm:text-sm text-cyan-300 font-medium mb-2">{item.date}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-500 mb-1">{item.title}</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{item.company}</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">{item.location}</p>
                  <p className="text-sm sm:text-base text-white mb-3 sm:mb-4">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    {item.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-cyan-500/20 text-cyan-300 text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-cyan-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Connector line */}
                <div 
                  className={`absolute top-4 sm:top-5 w-8 h-0.5 ${getIconBackground(item.icon)} ${
                    isEven ? 'left-10 md:left-auto md:right-full' : 'left-10 md:left-full'
                  } ${
                    isVisible[item.id] ? 'w-8' : 'w-0'
                  } transition-all duration-700 delay-300`}
                ></div>
              </div>
            </div>
          );
        })}

        {/* Final star marker */}
        <div className="absolute bottom-0 left-4 md:left-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-amber-500 shadow-lg flex items-center justify-center transform -translate-x-1/2 border-2 sm:border-4 border-gray-900">
          <Star className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;