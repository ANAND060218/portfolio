import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
//import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/ANAND060218/Flight_Booking/tree/master" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://flight-23918.web.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Fllight-Booking Application</h3>
              <p>
              Developed a serverless flight booking website using React, API Gateway, and mongoDB, allowing users to search for flights, book tickets, and view booking details through an intuitive interface. Leveraged serverless architecture for high scalability, reduced costs, and efficient real-time processing.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>API Gateway</li> <li>MongoDB</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/ANAND060218/Buisness_Bot" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://ai-chatbot-fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Business Bot (BB) with Gemini Api</h3>
              <p>
               
Developed a business chatbot using Gemini AI, to handle customer queries, provide product recommendations, and automate routine business tasks. The bot offers real-time, personalized assistance to users, enhancing customer engagement and operational efficiency.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Flask</li>
                <li>Gemini AI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/ANAND060218/netflix_clone" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://netflix-clone-60031573838.development.catalystserverless.in/app/index.html" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Netflix Clone</h3>
              <p>
              Developed a Netflix clone using HTML and CSS, replicating the platform's sleek interface with a dynamic movie grid, responsive layout, and engaging hover effects. The project demonstrates strong front-end design skills, focusing on user experience and cross-device compatibility.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ANAND060218/CodeAlpha" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://www.linkedin.com/posts/anand-v-366230290_codealpha-codealphainternship-pythonprogramming-activity-7204753386338983937-MbMY?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Basic Network Sniffing</h3>
              <p>Developed a packet sniffing project that captures and analyzes network traffic to monitor data packets in real-time. This project demonstrates a deep understanding of network protocols and cybersecurity, providing insights into network performance, security vulnerabilities, and traffic patterns.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>python</li>
                <li>Scapy</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        
      </div>
    </Container>
  );
}