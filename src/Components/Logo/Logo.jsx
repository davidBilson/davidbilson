import style from "./Logo.module.css";

const Logo = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Smooth scrolling animation
    });
  };

  return (
    <div onClick={scrollToTop} className={style.logoContainer}>
        <span className={style.logo}>@agile_dev</span>
    </div>
  );
};

export default Logo;
