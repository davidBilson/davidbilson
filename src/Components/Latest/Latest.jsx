import React, {useEffect} from 'react'
import './Latest.css'
import ImageThree from '../../Assets/image3.webp';
import AOS from "aos";
import "aos/dist/aos.css";

const Latest = () => {
    useEffect(() => {
        AOS.init({duration:2000})
    }, []);
  return (
    <section className="latest">
    <section className='latest-section'>
        <div>
            <h3>Scribblings</h3>
            <h2>Latest Articles</h2>
        </div>
        <section className='latest-containers'>
            <div data-aos="fade-down" onClick={() => window.open('https://dev.to/david_bilsonn/top-react-ui-libraries-for-simplifying-frontend-development-and-how-to-implement-them-48g6','_blank',"noreferrer")}>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--CT7-oHa6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6vj04x60lwijhgfhlisd.jpg" loading='lazy' alt="Top React UI Libraries for Simplifying Frontend Development" />
                <h3>Top React UI Libraries for Simplifying Frontend Development</h3>
                <p>
                    <span>DevTo <span className="divide">|</span> March 20, 2023</span>
                </p>
            </div>
            
            <div data-aos="fade-down" onClick={() => window.open('https://dev.to/david_bilsonn/how-to-save-a-string-to-clipboard-in-javascript-13ie','_blank',"noreferrer")}>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--rpbCRMHv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wsfp2aod59784m4q280z.jpeg" loading='lazy' alt="How to save a string to clipboard in JavaScript" />
                <h3>How to save a string to clipboard in JavaScript</h3>
                <p>
                    <span>DevTo <span className="divide">|</span> March 1, 2023</span>
                </p>
            </div>
            <div data-aos="fade-down" onClick={() => window.open('https://dev.to/david_bilsonn/how-to-return-multiple-items-in-a-map-function-in-javascript-eip','_blank',"noreferrer")}>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--hYC2UtbY--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cxrshep58ettu9upsaqb.jpg" alt="How to return multiple items in a map function in JavaScript" loading='lazy'/>
                <h3>How to return multiple items in a map function in JavaScript</h3>
                <p>
                    <span>DevTo <span className="divide">|</span> March 4, 2023</span>
                </p>
            </div>
            
        </section>
    </section>
    </section>
  )
}

export default Latest