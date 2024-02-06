import style from "./Logo.module.css"

const Logo = () => {

  return (
    <div className={style.logoContainer}>
        <span className={style.logo}>@agile_dev</span>
    </div>
  )
}

export default Logo