import NavLinks from "./NavLinks";
import classes from './NavBar.module.css';
import Burger from '../../Assets/svg/burger.svg'
import { useState } from "react";

const MobileNavigationSmall = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className={classes.MobileNavigationSmall}>
            <div className={classes.BurgerMenu} onClick={()=>setOpen(!open)}>
                <img src={Burger}></img>
            </div>
           {open && <NavLinks />} 
        </nav>

    );
}

export default MobileNavigationSmall;