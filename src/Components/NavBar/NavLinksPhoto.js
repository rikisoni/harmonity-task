import classes from './NavBar.module.css';

const NavLinksPhoto = () => {

    return (

        <ul>
            <li className={classes.HomeMobile}>

                <svg xmlns="true" width="20" height="20" fill="grey" viewBox="0 0 63.5 54.8">

                    <polygon class="st0" points="31.6,6.6 9,23.5 9,54.8 25.5,54.8 25.5,32.8 38,32.8 38,54.8 54.5,54.8 54.5,23.5 " />
                    <polyline class="st0" points="0,24 31.5,0 63.5,24 " />
                </svg>

            </li>
            <li className={classes.AboutMobile}>
                <svg xmlns="true" width="20" height="20" fill="grey" viewBox="0 0 38.1 38.1">
                    <path d="M19.1,0C8.5,0,0,8.5,0,19.1s8.5,19.1,19.1,19.1c10.5,0,19.1-8.5,19.1-19.1S29.6,0,19.1,0z M21.7,32h-4.9v-4.7 h4.9V32z M26.4,18.2c-0.4,0.6-1.2,1.3-2.4,2.3l-1.2,0.9c-0.6,0.5-1.1,1.1-1.3,1.7c-0.1,0.4-0.2,1.1-0.2,1.9h-4.4 c0.1-1.8,0.2-3.1,0.5-3.8c0.3-0.7,1-1.5,2.2-2.4l1.2-0.9c0.4-0.3,0.7-0.6,0.9-1c0.4-0.6,0.7-1.3,0.7-2c0-0.8-0.2-1.6-0.7-2.3 c-0.5-0.7-1.4-1-2.7-1c-1.3,0-2.2,0.4-2.7,1.3c-0.5,0.8-0.8,1.7-0.8,2.6h-4.7c0.1-3.1,1.2-5.3,3.3-6.6c1.3-0.8,2.9-1.2,4.8-1.2 c2.5,0,4.5,0.6,6.2,1.8c1.6,1.2,2.5,2.9,2.5,5.3C27.4,16,27.1,17.2,26.4,18.2z" />
                </svg>

            </li>
            <li className={classes.WorkMobile}>
                <svg xmlns="true" width="20" height="20" fill="grey" viewBox="0 0 33.8 25.9">
                    <path d="M26.3,13.4l-9,5.6l-9.1-5.6v7l9.2,5.6l8.9-5.6V13.4z M30.5,8.6l3.4-1.7L17,0L0,6.9l17,9.4l12.1-6.9v8.2 c-0.8,0.3-1.4,1.1-1.4,2c0,1.2,0.9,2.1,2.1,2.1c1.2,0,2.1-0.9,2.1-2.1c0-0.9-0.6-1.7-1.4-2V8.6z" />
                </svg>

            </li>
            <li className={classes.ContactMobile}>
                <svg width="20" height="20" fill="grey" xmlns="true"
                    viewBox="0 0 47.5 38.1">
                    <g>
                        <polygon class="st0" points="45.7,38.1 30.3,21.3 23.3,27.6 16.4,21.3 1.8,38.1 	" />
                        <polygon class="st0" points="1.7,0 23.3,24.5 45.7,0 	" />
                        <polygon class="st0" points="14.7,19.8 0,1.5 0,36.6 	" />
                        <polygon class="st0" points="47.4,38.1 47.5,38.1 47.5,38.1 	" />
                        <polygon class="st0" points="47.5,1.5 32,19.8 47.5,36.6 	" />
                        <polygon class="st0" points="0,38.1 0,38.1 0,38.1 	" />
                    </g>
                </svg>

            </li>
        </ul>
    );
}

export default NavLinksPhoto;