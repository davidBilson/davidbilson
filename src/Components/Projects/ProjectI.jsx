import style from './Projects.module.css'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {BiCodeAlt} from 'react-icons/bi'
import { toast } from 'react-toastify';

const ProjectI = ({ projectImage, projectName, projectDescription, projectLink, linkText, showCodeButton }) => {

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
    <article>
            <div className={style.project} data-aos="fade-left" data-aos-duration="1000">
                <img src={projectImage} alt="" />
                <div>
                    <h3>{projectName}</h3>
                    <p>{projectDescription}</p>
                    <div>
                        <button onClick={() => window.open({projectLink},'_blank',"noreferrer")} className={style.linkBtn}>
                            <HiOutlineExternalLink />
                            {linkText}
                        </button>
                        {
                          showCodeButton &&
                        <button onClick={notify}  className={style.linkBtn}>
                            <BiCodeAlt />
                            Code
                        </button>
                        }
                    </div>
                </div>
            </div>
        </article>
  )
}

export default ProjectI