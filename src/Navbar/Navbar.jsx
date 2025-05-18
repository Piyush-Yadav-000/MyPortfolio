import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ isLightMode, onModeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track active link

  const navLinks = [
    { id: "2", label: "About", href: "#about" },
    { id: "3", label: "Skills", href: "#skills" },
     { id:"4", label: "Education", href: "#education" },
    { id: "5", label: "Projects", href: "#projects" },
    { id: "6", label: "Contact", href: "#contact" },
  ];

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach((section, index) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveLink(navLinks[index].href.substring(1));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full flex pt-4 z-50">
      <div className="max-w-7xl mx-auto flex space-x-10 drop-shadow-amber-950 border-b-4 bg-black p-2 px-6 rounded-4xl justify-between relative">
        {/* Logo - Always visible */}
        <h1 className="font-bold text-xl drop-shadow-2xl drop-shadow-black stroke-black text-yellow-400 font-['Bricolage Grotesque']">
          <span className="text-2xl text-red-600">&lt;</span>Piyush / Yadav<span className="text-2xl text-red-600">&gt;</span>
        </h1>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX fill="white" /> : <HiMenu fill="white"/>}
        </button>

        <button 
          className="sm:hidden text-2xl "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX fill="white" /> : <HiMenu fill="white"/>}
        </button>

        {/* Nav Links */}
        <ul className={`absolute md:relative top-full left-0 md:top-0 w-full md:w-auto 
          bg-black md:bg-transparent p-4 rounded-tr-xs md:p-0 mt-2 md:mt-0
          flex flex-col md:flex-row items-center gap-8 md:gap-16 
          ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
          {navLinks.map((link) => (
            <li key={link.id} className="w-full md:w-auto text-center">
              <a
                href={link.href}
                className={`text-xl font-bold font-['Bricolage Grotesque'] text-white 
                  transition-all duration-300 block py-2 md:py-0 relative
                  hover:text-cyan-400
                  ${activeLink === link.href.substring(1) ? 'text-cyan-400' : ''}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 
                  after:w-full after:h-1 after:bg-cyan-500
                  after:transition-transform after:duration-300
                  ${activeLink === link.href.substring(1) 
                    ? 'after:scale-x-100' 
                    : 'after:scale-x-0 hover:after:scale-x-100'
                  }
                  after:origin-left`}
                onClick={(e) => {
                  setActiveLink(link.href.substring(1));
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          
          {/* Theme Toggle */}
          <div
            className="flex justify-center items-center text-3xl cursor-pointer text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={onModeToggle} 
          >
            {isLightMode ? <MdOutlineDarkMode fill="currentColor" /> : <MdLightMode fill="currentColor" />}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
