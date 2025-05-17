import { Container } from './styles'

import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'


// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      
      <div>
        <p>
          ANAND V 
          { <span>❤️</span> } 2024
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/anand-v-366230290/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/ANAND060218"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
    
        
      </div>
    </Container>
  )
}
