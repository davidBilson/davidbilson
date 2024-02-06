import style from './Hero.module.css'
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import header from '../../../Assets/header.jpg'

const Hero = () => {
  return (
    <section className={style.heroContainer}>
        <article>
            <h1>
                <span>FullStack</span>
                <span>Web Developer.</span>
                <span>Technical Writer.</span>
            </h1>
            <p>Hi, I'm David Bilson. I am a Fullstack Software Developer, my specialization revolves around developing functional and user-friendly websites that enable businesses to scale.</p>
            <div>
              <a href="https://twitter.com/David_Bilsonn" target='_blank'>
                Twitter <FiTwitter size={12} />
              </a>
              <a href="https://github.com/davidBilson" target='_blank'>
                Github <FiGithub size={12} />
              </a>
              <a href="https://www.linkedin.com/in/david-bilson-2401981a5/" target='_blank'>
                LinkedIn <FiLinkedin size={12} />
              </a>
              <a href="https://dev.to/david_bilsonn" target='_blank'>Dev.to </a>
            </div>
        </article>
        <div>
            <img src={header} alt="asdafwe" />
        </div>
    </section>
  )
}

export default Hero