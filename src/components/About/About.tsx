import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.png";

import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I’m ANAND V ,a student at Chennai Institute of Technology, currently pursuing a Bachelor of Technology in Computer Science and Business Systems (CSBS). My academic journey has been a perfect blend of technology and business, driving me to develop a strong foundation in both fields.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          As a passionate Full Stack Developer, I focus on creating seamless and dynamic web applications. From the front-end to the back-end, I enjoy working with technologies like HTML, CSS, JavaScript, React, and Node.js. My passion lies in building user-centered applications that are both functional and aesthetically pleasing. I’m also deeply interested in the role of AI and how it can shape the future of development.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          In addition to web development, I’m proficient in tools and frameworks such as Firebase, Express.js, and Tailwind CSS, allowing me to bring innovative ideas to life. Whether it's creating responsive websites or complex web apps, my goal is to deliver impactful digital solutions that resonate with users and clients alike.</p>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.25 * 1000}>
          <img src={VinayakSingh} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
