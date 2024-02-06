import Logo from '../../Components/Logo/Logo'
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div>
        <div className={style.navLogo}>
          <Logo />
        </div>
      </div>
    </nav>
  )
}

export default NavBar