import style from './Projects.module.css'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {BiCodeAlt} from 'react-icons/bi'
import { toast } from 'react-toastify';
import GoradGif from '../../Assets/goradlab.gif'

const Projects = () => {

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
        
  return (
    <section className={style.projectContainer}>
        <h2>Recent Projects</h2>
        <article>
            <div>
                <img src={GoradGif} alt="" />
                <div>
                    <h3>GORAD Genomics - Washington DC</h3>
                    <p>A human genomics laboratory that studies germ cell health, and development.</p>
                    <div>
                        <button onClick={() => window.open('https://goradlab.vercel.app/','_blank',"noreferrer")} className={style.linkBtn}>
                            <HiOutlineExternalLink />
                            Live site
                        </button>
                        <button onClick={notify}  className={style.linkBtn}>
                            <BiCodeAlt />
                            Code
                        </button>
                    </div>
                </div>
            </div>
        </article>
    </section>
  )
}

export default Projects