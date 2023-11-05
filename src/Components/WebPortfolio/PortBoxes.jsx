import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './WebPortf.css';
import Portfolio1 from './Portfolio1';
import Portfolio2 from './Portfolio2';

const PortBoxes = () => {

    useEffect(() => {
        AOS.init({duration:2000})
    }, []);

  return (
    <div className='port-box-container' >
        <Portfolio1 />
        <Portfolio2 />
    </div>
  )
}

export default PortBoxes