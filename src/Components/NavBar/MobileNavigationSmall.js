import NavLinks from "./NavLinks";
import classes from './NavBar.module.css';
import { useState } from "react";


const MobileNavigationSmall = () => {

    const [open, setOpen] = useState(false);
    
    
    return (
        <nav className={classes.MobileNavigationSmall}>
            <div className={classes.BurgerMenu} onClick={() => setOpen(!open)} >
                <svg  className={classes.BurgerMenuOpened} xmlns="true" viewBox="0 0 52.3 41.3" > 
                    <path className = {open ? classes["BurgerMenuOpened"] : classes["BurgerMenu"]} d="M52.3,4.7c0,2.6-2.3,4.7-5.2,4.7H5.2C2.3,9.5,0,7.3,0,4.7l0,0C0,2.1,2.3,0,5.2,0h41.9C50,0,52.3,2.1,52.3,4.7L52.3,4.7z"/>
                    <path className = {open ? classes["BurgerMenuOpened"] : classes["BurgerMenu"]} d="M52.3,20.7c0,2.6-2.3,4.7-5.2,4.7H5.2c-2.9,0-5.2-2.1-5.2-4.7l0,0c0-2.6,2.3-4.7,5.2-4.7h41.9C50,15.9,52.3,18,52.3,20.7L52.3,20.7z"/>
                    <path className = {open ? classes["BurgerMenuOpened"] : classes["BurgerMenu"]} d="M52.3,36.6c0,2.6-2.3,4.7-5.2,4.7H5.2c-2.9,0-5.2-2.1-5.2-4.7l0,0c0-2.6,2.3-4.7,5.2-4.7h41.9C50,31.8,52.3,34,52.3,36.6L52.3,36.6z"/>
                </svg>
            </div>
           
            {open && <NavLinks />}
        </nav>

    );
}

export default MobileNavigationSmall;