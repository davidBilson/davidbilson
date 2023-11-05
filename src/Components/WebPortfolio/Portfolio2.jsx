import HexpressGif from '../../Assets/hexpress.gif';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './WebPortf.css'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {BiCodeAlt} from 'react-icons/bi'
import {FiInfo} from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Portfolio2 = () => {
    const notify = () => toast.info('Protected by Client NDA!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    useEffect(() => {
        AOS.init({duration:2000})
    }, []);
  return (
    <div className='port-boxes' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <div>
            <img src={HexpressGif} width={'100%'} loading='lazy' alt="Wow Salons First Portfolio Image" />
        </div>
        <div>
            <h3>GORAD Genomics - Washington D.C</h3>
            <p>A human genomics laboratory that studies germ cell health, and development.</p>
        </div>
        <div>
            <button>ReactJS</button>
            <button>JavaScript</button>
            <button>Express</button>
            <button>MongoDB</button>
            <button>OAuth</button>
        </div>
        <div className='live-site-box'>
            <button onClick={() => window.open('https://hexpress.vercel.app/','_blank',"noreferrer")} className='live-site'>
                <HiOutlineExternalLink />
                Live site
            </button>
            <button className='live-site'>
                <FiInfo />
                Info
            </button>
            <button onClick={notify}  className='live-site'>
                <BiCodeAlt />
                Code
            </button>
        </div>
    </div>
  )
}

export default Portfolio2