import { useState, useEffect } from 'react'
import Home from './Home/Home'
import './index.css'
import './Home/Home.css'
import Skills from './Skills/Skills'
import Experience from './Education/Education'
import Navbar from './Navbar/Navbar'
import Contact from './Contact/Contact'
import Project from './Project/Project'
import Footer from './Footer/Footer'

function App(prop) {
    const [isLightMode, setIsLightMode] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [gradientColors, setGradientColors] = useState({});

    // Handle scroll event with gradient updates
    const handleScroll = () => {
        const position = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (position / maxScroll) * 100;
        
        setScrollPosition(position);

        // Calculate gradient colors based on mode and scroll position
        const lightModeColors = {
            primary: `hsl(${200 + scrollPercent}, 45%, 20%)`,
            secondary: `hsl(${294 + scrollPercent}, 98%, 76%)`,
            accent: `hsl(${250 + scrollPercent}, 90%, 26%)`
        };

        const darkModeColors = {
            primary: `hsl(${20 + scrollPercent}, 20%, 1%)`,
            secondary: `hsl(${20 + scrollPercent}, 20%,2%)`,
            accent: `hsl(${200 + scrollPercent}, 20%, 5%)`
        };

        setGradientColors({
            light: `linear-gradient(135deg, 
                ${lightModeColors.primary} 0%, 
                ${lightModeColors.secondary} 50%, 
                ${lightModeColors.accent} 100%)`,
            dark: `linear-gradient(135deg, 
                ${darkModeColors.primary} 0%, 
                ${darkModeColors.secondary} 50%, 
                ${darkModeColors.accent} 100%)`
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize gradient colors
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleModeToggle = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <div 
            style={{ 
                background: isLightMode ? gradientColors.light : gradientColors.dark,
                transition: 'background 0.5s ease'
            }}
            className="min-h-screen pt-8"
        >
            <Navbar isLightMode={isLightMode} onModeToggle={handleModeToggle} />
            <div className="h-full backdrop-blur-sm">
                <Home isLightMode={isLightMode} onModeToggle={handleModeToggle} />
                <Skills />
                <Experience />
                <Project/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
