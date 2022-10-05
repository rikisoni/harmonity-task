import NavLinks from "./NavLinks";
import classes from './NavBar.module.css';


const MobileNavigation = () => {

    return (
        <nav className={classes.MobileNavigationSmall}> 
        <NavLinks/>
       </nav>
    );
}

export default MobileNavigation;