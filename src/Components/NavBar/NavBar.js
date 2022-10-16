import MobileNavigation from './MobileNavigation';
import MobileNavigationSmall from './MobileNavigationSmall';
import classes from './NavBar.module.css';
import Navigation from './Navigation';
import SearchBox from './SearchBox';
import { useState } from 'react';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className={classes.NavBar}>

            <Navigation />
            <MobileNavigation />
            <MobileNavigationSmall />

            <div className={classes.Search} size='18px' onClick={() => setOpen(!open)}>
                <svg xmlns="true" width="15" height="15" viewBox="0 0 27 25.8">
                    <path className={open ? classes["SearchOpened"] : classes["Search"]} d="M10.5,0C4.7,0,0,4.6,0,10.4c0,5.7,4.7,10.4,10.5,10.4c2.5,0,4.8-0.9,6.6-2.3c0.1,0.1,0.2,0.3,0.3,0.4l6.5,6.5 c0.4,0.4,0.8,0.5,1.3,0.5s0.9-0.2,1.3-0.5c0.7-0.7,0.7-1.9,0-2.6l-6.5-6.5c-0.2-0.2-0.4-0.3-0.6-0.4c1-1.6,1.6-3.5,1.6-5.5 C20.9,4.6,16.2,0,10.5,0 M10.5,3.2c4,0,7.2,3.2,7.2,7.2c0,1.3-0.4,2.6-1.1,3.8l-0.7,1L15,15.9c-1.3,1-2.9,1.6-4.6,1.6 c-4,0-7.3-3.2-7.3-7.2C3.2,6.4,6.5,3.2,10.5,3.2" />
                </svg>
            </div>


            {open && <SearchBox />}
            <div className={classes.Line}>
            </div>


        </div>
    );

}

export default NavBar;