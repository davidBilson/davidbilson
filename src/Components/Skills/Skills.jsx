import {AiOutlineHtml5, AiFillGithub, } from 'react-icons/ai'
import {BiSearchAlt, BiGitBranch} from 'react-icons/bi'
import {DiCss3Full} from 'react-icons/di'
import {FaSass, FaShopify} from 'react-icons/fa'
import {GrReactjs} from 'react-icons/gr'
import {SiGoogleanalytics, SiJavascript, SiTailwindcss} from 'react-icons/si'
import {TbWriting} from 'react-icons/tb'
import style from './Skills.module.css'


const Skills = () => {
  return (
    <section className={style.skillsSection} >

        <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1200">
            <span><AiOutlineHtml5 /></span>
            <span>HTML</span>
        </div>

        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1400">
            <span><DiCss3Full /></span>
            <span>CSS</span>
        </div>

        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1600">
            <span><SiJavascript/></span>
            <span>JavaScript</span>
        </div>

        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1800">
            <span><GrReactjs /></span>
            <span>React</span>
        </div>
        
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <span><TbWriting /></span>
            <span>Technical Writing</span>
        </div>

        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2200">
            <span><FaShopify /></span>
            <span>Shopify</span>
        </div>

        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2400">
            <span><SiTailwindcss /></span>
            <span>TailwindCSS</span>
        </div>

        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2600">
            <span><FaSass /></span>
            <span>Sass</span>
        </div>

        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2800">
            <span><AiFillGithub /></span>
            <span>GitHub</span>
        </div>

        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000">
            <span><BiGitBranch /></span>
            <span>Git</span>
        </div>

        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3200">
            <span><SiGoogleanalytics /></span>
            <span>Google Analytics</span>
        </div>

        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3400">
            <span><BiSearchAlt /></span>
            <span>SEO</span>
        </div>


    </section>
  )
}

export default Skills