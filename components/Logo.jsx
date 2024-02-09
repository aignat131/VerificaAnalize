import styles from "./Logo.module.css";
import {Link} from "react-router-dom"

function Logo() {
  return <Link to='/'>
<img src="TwoMen.png" 
        alt="overview of a large city with skyscrapers"
        className={styles.logo} />
  </Link>
}

export default Logo;