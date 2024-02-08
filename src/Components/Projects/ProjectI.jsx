import style from './Projects.module.css';
import {HiOutlineExternalLink} from 'react-icons/hi';
import {BiCodeAlt} from 'react-icons/bi';
import { toast } from 'react-toastify';

const ProjectI = ({ stack, projectImage, projectName, projectDescription, projectLink, linkText, showCodeButton }) => {

  const notify = () => toast.info('Protected by Client NDA!', 
  {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  }
  );
  
  return (
    <article>
            <div className={style.project} data-aos="zoom-in" data-aos-duration="1000">
                <img src={projectImage} alt="" />
                <div>
                    <h3>{projectName}</h3>
                    <p>{projectDescription}</p>
                    {showCodeButton &&
                      <small className={style.stack}>
                        {stack[0] && <span>{stack[0]}</span>}
                        {stack[1] && <span>{stack[1]}</span>}
                        {stack[2] && <span>{stack[2]}</span>}
                        {stack[3] && <span>{stack[3]}</span>}
                        {stack[4] && <span>{stack[4]}</span>}
                        {stack[5] && <span>{stack[5]}</span>}
                      </small>
                    }
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