import NavLinks from "./NavLinks";
import classes from './NavBar.module.css';


const MobileNavigationSmall = () => {

    return (
        <nav className={classes.MobileNavigationSmall}> 
        <NavLinks/>
       </nav>
    );
}

export default MobileNavigationSmall;