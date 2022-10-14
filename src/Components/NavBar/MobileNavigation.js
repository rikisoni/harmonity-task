// import NavLinks from "./NavLinks";
import classes from './NavBar.module.css';
import NavLinksPhoto from './NavLinksPhoto';



const MobileNavigation = () => {

    return (
        <nav className={classes.MobileNavigation}> 
        {/* <NavLinks/> */}
        <NavLinksPhoto/>
       </nav>

      
    );
}

export default MobileNavigation;