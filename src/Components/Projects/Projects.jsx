import { useState } from 'react';
import style from './Projects.module.css';
import ProjectI from './ProjectI';
import GoradGif from '../../Assets/goradlab.gif';
import HexpressGif from '../../Assets/hexpress.gif';
import CreateResponsive from '../../Assets/responsiveArticle.jpeg';
import FixVercel from '../../Assets/fixvercel.jpeg';
import EmailArticle from '../../Assets/emailArticle.jpeg';

const Projects = () => {

const [ switchPortfolioView, setSwitchPortfolioView ] = useState(true);

const styleButtonA = {
    color: switchPortfolioView ? "#fffff5db" : "#ebebf599",
    borderBottom: switchPortfolioView ? "2px solid #4b6cff": "none"
}

const styleButtonB = {
    color: !switchPortfolioView ? "#fffff5db" : "#ebebf599",
    borderBottom: !switchPortfolioView ? "2px solid #4b6cff": "none"
}

  return (
    <section className={style.projectContainer}>
        <h2 className='section-generic-heading'>{'// Portfolio'}</h2>
        {/* Navigation button */}
        <section>
            <button style={styleButtonA} onClick={() => setSwitchPortfolioView(prev => true)}>Recent Projects</button>
            <button style={styleButtonB} onClick={() => setSwitchPortfolioView(prev => false)}>Articles</button>
        </section>
        <div>
            {
                switchPortfolioView &&
                <ProjectI
                    projectImage={GoradGif}
                    projectName={"GORAD Genomics - Washington DC"}
                    projectDescription={"A human genomics laboratory that studies germ cell health, and development."}
                    projectLink={"https://goradlab.vercel.app/"}
                    projectgitHubFE={""}
                    projectgitHubBE={""}
                    linkText={"Live site"}
                    showCodeButton={true}
                    stack={["React", "JavaScript", "Google API"]}
                />
            }
            {
                switchPortfolioView &&
                <ProjectI
                    projectImage={HexpressGif}
                    projectName={"Hexpress Delivery"}
                    projectDescription={"Fastest Interstate Delivery & Easy Pickup - Logistics Business Website"}
                    projectLink={"https://hexpress.vercel.app/"}
                    projectgitHubFE={"https://github.com/davidBilson/hexpressFE"}
                    projectgitHubBE={"https://github.com/davidBilson/hexpressBE"}
                    linkText={"Live site"}
                    showCodeButton={true}
                    stack={["JavaScript", "React", "Google API", "MongoDB", "ExpressJS", "NodeJS"]}
                />
            }
            {
                !switchPortfolioView &&
                <ProjectI
                    projectImage={CreateResponsive}
                    projectName={"How to Build Responsive Navigation Bar"}
                    projectDescription={"12K+ views. This article walks you through the development and design of a responsive nav bar."}
                    projectLink={"https://dev.to/david_bilsonn/learn-how-to-build-responsive-navigation-bar-with-html-css-javascript-4g5"}
                    linkText={"Read article"}
                    showCodeButton={false}
                />
            }
            {
                !switchPortfolioView &&
                <ProjectI
                    projectImage={FixVercel}
                    projectName={"How to Fix Vercel 404 error"}
                    projectDescription={"4K+ views. Learn how to fix `404: NOT_FOUND` error when you deploy your SPA website on vercel"}
                    projectLink={"https://dev.to/david_bilsonn/how-to-fix-vercel-404-error-child-url-path-issues-n0o"}
                    linkText={"Read article"}
                    showCodeButton={false}
                />
            }
            {
                !switchPortfolioView &&
                <ProjectI
                    projectImage={EmailArticle}
                    projectName={"Direct Emails from React Website"}
                    projectDescription={"2K+ views. Making it easy for clients or customers to contact you directly from your website"}
                    projectLink={"https://dev.to/david_bilsonn/how-to-send-emails-directly-from-your-react-website-a-step-by-step-tutorial-144b"}
                    linkText={"Read article"}
                    showCodeButton={false}
                />
            }
        </div>
    </section>
  )
}

export default Projects