import styles from "./Logo.module.css";
import {Link} from "react-router-dom"

function Logo() {

  return (
  <Link to='/' style={{textDecoration: 'none'}}>
<img src="Logo.png" 
        alt="Logo"
        className={styles.logo} />
  </Link>
  )
}

export default Logo;