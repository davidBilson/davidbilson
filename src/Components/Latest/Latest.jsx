import React, {useEffect} from 'react'
import './Latest.css'
import ImageThree from '../../Assets/image3.jpeg';
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
            <div data-aos="fade-down" onClick={() => window.open('https://medium.com/@davidbilson99/why-you-should-use-nullish-coalescing-operator-in-javascript-5074dfe891dc','_blank',"noreferrer")}>
                <img src="https://miro.medium.com/max/720/1*rUGoQy5QkYLFssYmhJ6tqA.webp" loading='lazy' alt="" />
                <h3>Why you should use nullish coalescing operator ??</h3>
                <p>
                    <span>Medium <span className="divide">|</span> Dec 26, 2022</span>
                </p>
            </div>
            
            <div data-aos="fade-down" onClick={() => window.open('https://medium.com/@davidbilson99/how-to-save-a-string-to-clipboard-in-javascript-3ff914bcffed','_blank',"noreferrer")}>
                <img src="https://miro.medium.com/max/720/1*INfjPtQvb9etMGLVuS0YMw.webp" loading='lazy' alt="" />
                <h3>How to save a string to clipboard in JavaScript</h3>
                <p>
                    <span>Medium <span className="divide">|</span> Dec 7, 2022</span>
                </p>
            </div>
            <div data-aos="fade-down" onClick={() => window.open('https://medium.com/@davidbilson99/how-to-return-multiple-items-in-map-function-in-javascript-eb12010ddef5','_blank',"noreferrer")}>
                <img src="https://miro.medium.com/max/720/1*WItaspdAw1be4aZ6Ic0dMA.webp" alt="" />
                <h3>How to return multiple items in a map function in JavaScript</h3>
                <p>
                    <span>Medium <span className="divide">|</span> Jan 10, 2023</span>
                </p>
            </div>
            
        </section>
    </section>
    </section>
  )
}

export default Latest