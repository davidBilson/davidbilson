import { useEffect } from 'react';
import ImageTwo from '../../Assets/image2.webp';
import ImageThree from '../../Assets/image3.webp';
import ImageFour from '../../Assets/image4.webp';
import ImageFive from '../../Assets/image5.webp';
import AOS from "aos";
import "aos/dist/aos.css";
import './WebPortf.css'
import {HiOutlineExternalLink} from 'react-icons/hi'
import Portfolio1 from './Portfolio1';

const PortBoxes = () => {

    useEffect(() => {
        AOS.init({duration:2000})
    }, []);

  return (
    <div className='port-box-container' >
        <Portfolio1 />
        <div className='port-boxes' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                <div>
                    <img src={ImageTwo} loading='lazy' alt="Wow Salons First Portfolio Image" />
                </div>
                <div>
                    <h3>WorkxieBillionaire</h3>
                    <p>A WEB3 community-driven project built with reactjs and solidityjs. WXB created more earners than any NFT projects.</p>
                </div>
                <div>
                    <button data-aos="fade-up">REACT</button>
                    <button data-aos="fade-up">CSS</button>
                    <button data-aos="fade-up">SOLIDITY</button>
                    <button data-aos="fade-up">RESOURCES</button>
                </div>
                <button onClick={() => window.open('https://www.workxiebillionaire.xyz/','_blank',"noreferrer")} className='live-site'>
                    <HiOutlineExternalLink />
                    Live site
                </button>
        </div>
        <div className='port-boxes' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div>
                <img src={ImageThree} loading='lazy' alt="Wow Salons First Portfolio Image" />
            </div>

            <div>
                <h3> Fantazia Events Management</h3>
                <p>Fantazia books event and staging services, including AV rentals and lighting design. Service that help plan events.</p>
            </div>
                
            <div>
                <button data-aos="fade-up">HTML</button>
                <button data-aos="fade-up">CSS</button>
                <button data-aos="fade-up">JAVASCRIPT</button>
                <button data-aos="fade-up">RESOURCES</button>
            </div>
            <button onClick={() => window.open('https://www.fantazia.ae/','_blank',"noreferrer")} className='live-site'>
                <HiOutlineExternalLink />
                Live site
            </button>
        </div>
        <div className='port-boxes' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2500">
            <div>
                <img src={ImageFour} loading='lazy' alt="Wow Salons First Portfolio Image" />
            </div>
            <div>
                <h3>Matrix</h3>
                <p>Matrix website is a unique blend of mixed experiences. Maxtrix events helps plan and execute your events. Simple booking</p>
            </div>
            <div>
                <button>HTML</button>
                <button>CSS</button>
                <button>JAVASCRIPT</button>
                <button>RESOURCES</button>
            </div>
            <button onClick={() => window.open('https://www.matrixevents.me/','_blank',"noreferrer")} className='live-site'>
                <HiOutlineExternalLink />
                Live site
            </button>
        </div>
        <div className='port-boxes' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
            <div>
                <img src={ImageFive} loading='lazy' alt="Wow Salons First Portfolio Image" />
            </div>
            <div>
                <h3>Easy Drumming</h3>
                <p>An e-book sales funnel for drummers to improve skills and reach goals. Expert advice and strategies for proficiency and growth.</p>
            </div>
            <div>
                <button>HTML</button>
                <button>CSS</button>
                <button>JAVASCRIPT</button>
                <button>RESOURCES</button>
            </div>
            <button onClick={() => window.open('https://www.easydrumming.com.ng/','_blank',"noreferrer")} className='live-site'>
                <HiOutlineExternalLink />
                Live site
            </button>
        </div>
    </div>
  )
}

export default PortBoxes