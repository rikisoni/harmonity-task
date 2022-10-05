
import MobileNavigation from './MobileNavigation';
import MobileNavigationSmall from './MobileNavigationSmall';
import classes from './NavBar.module.css'
import Navigation from './Navigation';

const NavBar = () => {
    return (
        <div className = {classes.NavBar}>
            <Navigation/>
            <MobileNavigation/>
            <MobileNavigationSmall/>

        </div>
    );

}

export default NavBar;