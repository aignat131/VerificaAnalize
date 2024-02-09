import { NavLink } from "react-router-dom"
import styles from "./PageNav.module.css" 
import Logo from "./Logo"

export default function PageNav(){

    return (
        <nav className={styles.nav}>
            <Logo />
            
            <ul>
                <li>
                    <NavLink to="/Analize">Analize</NavLink>
                </li>
                <li>
                    <NavLink to="/Despre">Despre</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
                
            </ul>
        </nav>
    );
}