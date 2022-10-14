import MobileNavigation from './MobileNavigation';
import MobileNavigationSmall from './MobileNavigationSmall';
import classes from './NavBar.module.css';
import Navigation from './Navigation';
import { FiSearch } from 'react-icons/fi';
import SearchBox from './SearchBox';
import { useState } from 'react';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className={classes.NavBar}>
          
            <Navigation />
            <MobileNavigation />
            <MobileNavigationSmall />
            <FiSearch className={classes.Search} size='18px' color="grey" 
            onClick={()=>setOpen(!open)}/>
            {open && <SearchBox/>}
            

        </div>
    );

}

export default NavBar;