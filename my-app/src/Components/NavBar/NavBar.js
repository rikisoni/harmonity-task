
import MobileNavigation from './MobileNavigation';
import MobileNavigationSmall from './MobileNavigationSmall';
import classes from './NavBar.module.css'
import Navigation from './Navigation';
import { FiSearch } from 'react-icons/fi';

const NavBar = () => {


    return (
        <div className={classes.NavBar}>
            <Navigation />
            <MobileNavigation />
            <MobileNavigationSmall />
            <FiSearch className={classes.Search} size='18px' color="gray" />
            <div className={classes.SearchBox}>
                <input
                    type="text"
                    placeholder="Search here"
                />
            </div>
            

        </div>
    );

}

export default NavBar;