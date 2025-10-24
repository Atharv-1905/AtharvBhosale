// client/src/pages/Home.jsx

import React from 'react';
// Import the FA icons
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from 'react-icons/fa';
// Import the SI icons (with PowerBI fixed)
import {
  SiMongodb,
  SiExpress,
  SiGooglecolab,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si';

// --- IMPORT OUR NEW LOCAL ICONS ---
import { NumpyIcon } from '../components/icons/NumpyIcon';
import { PandasIcon } from '../components/icons/PandasIcon';
import { SkLearnIcon } from '../components/icons/SkLearnIcon';
import { MatplotlibIcon } from '../components/icons/MatplotlibIcon';
import { SeabornIcon } from '../components/icons/SeabornIcon';
import { PowerBiIcon } from '../components/icons/PowerBiIcon';
const myImage = '/profile.jpg'; // Make sure 'profile.jpg' is in your /public folder

const Home = () => {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="home-section">
        <div className="home-content">
          <h1>
            Hello, I'm <span>Atharv</span>
          </h1>
          <h3>A Data Scientist & A Full-Stack Developer</h3>
          <p className="bio">
            I'm passionate about building modern web applications with the MERN
            stack. I love turning complex problems & data into simple, beautiful, and
            intuitive designs & insights.
          </p>
          <div className="social-links">
            <a href="https://github.com/Atharv-1905" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/atharv-bhosale-2749192b0/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/atharv_bhosale17" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="/Atharv Bhosale Resume.pdf" target="_blank" rel="noreferrer">
              <FaFilePdf />
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src={myImage} alt="Your Name" />
        </div>
      </section>

      {/* --- SKILLS SECTION (CORRECTED) --- */}
      <section className="skills-section">
        <h2>My Tech Stack</h2>
        <div className="skills-grid">
          {/* --- MERN Stack --- */}
          <div className="skill-item">
            <FaReact />
            <h4>React</h4>
          </div>
          <div className="skill-item">
            <FaNodeJs />
            <h4>Node.js</h4>
          </div>
          <div className="skill-item">
            <SiExpress />
            <h4>Express.js</h4>
          </div>
          <div className="skill-item">
            <SiMongodb />
            <h4>MongoDB</h4>
          </div>

          {/* --- Data Science --- */}
          <div className="skill-item">
            <FaPython />
            <h4>Python</h4>
          </div>
          <div className="skill-item">
            <NumpyIcon />
            <h4>NumPy</h4>
          </div>
          <div className="skill-item">
            <PandasIcon />
            <h4>Pandas</h4>
          </div>
          <div className="skill-item">
            <SkLearnIcon />
            <h4>Scikit-learn</h4>
          </div>
          <div className="skill-item">
            <MatplotlibIcon />
            <h4>Matplotlib</h4>
          </div>
          <div className="skill-item">
            <SeabornIcon />
            <h4>Seaborn</h4>
          </div>

          {/* --- BI & Cloud --- */}
          <div className="skill-item">
            <PowerBiIcon /> {/* <-- TO THIS */}
            <h4>Power BI</h4>
          </div>
          <div className="skill-item">
            <SiGooglecolab />
            <h4>Google Colab</h4>
          </div>

          {/* --- Databases --- */}
          <div className="skill-item">
            <SiMysql />
            <h4>MySQL</h4>
          </div>
          <div className="skill-item">
            <SiPostgresql />
            <h4>PostgreSQL</h4>
          </div>

          {/* --- Other Web --- */}
          <div className="skill-item">
            <FaJava />
            <h4>Java</h4>
          </div>
          <div className="skill-item">
            <FaHtml5 />
            <h4>HTML5</h4>
          </div>
          <div className="skill-item">
            <FaCss3Alt />
            <h4>CSS3</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;