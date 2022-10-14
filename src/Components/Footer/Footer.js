// import Facebook from '../../Assets/svg/facebook.svg'
// import Twitter from '../../Assets/svg/twitter.svg'
// import Contact from '../../Assets/svg/contact.svg'
// import Top from '../../Assets/svg/top.svg'

import classes from "./Footer.module.css";
import FooterLinks from './FooterLinks';

const Footer = () => {

    return (

        <div className={classes.Footer}>
            <div className={classes.FooterBox}>
                <div className={classes.Left}>
                    <ul>
                        <li id="Facebook">

                            <div className={classes.Round}>
                                <svg xmlns="true" width="20" height="20" fill="#606060" viewBox="0 0 15 32.3">
                                    <path d="M15,10.5H9.9V7.1c0-1.3,0.8-1.6,1.4-1.6h3.6V0l-5,0C4.4,0,3.2,4.1,3.2,6.8v3.7H0v5.7h3.2v16.1h6.7V16.2h4.5L15,10.5z" />
                                </svg>
                            </div>

                        </li>
                        <li id="Twitter">
                            <div className={classes.Round}>
                                <svg xmlns="true" width="20" height="20" fill="#606060" viewBox="0 0 33.6 23.4">
                                    <path d="M26.9,3.9C26.9,3.9,26.9,3.8,26.9,3.9c-1.3-1.2-2.8-1.7-4.5-1.6l-0.1-0.1c0,0,0,0,0,0c1.5-0.3,2.5-0.7,2.7-1.1c0.1-0.3,0-0.5-0.4-0.5C24,0.6,23.3,0.8,22.6,1c0.8-0.5,1.1-0.8,0.9-1c-0.8,0-1.7,0.4-2.6,1.2c0.3-0.5,0.5-0.8,0.4-0.9c-0.4,0.3-0.8,0.6-1.1,0.9c-0.7,0.7-1.2,1.4-1.6,2l0,0.1c-1.1,1.7-1.8,3.3-2.3,5.1l-0.2,0.1l0,0c-0.7-0.8-1.4-1.4-2.4-2c-1.1-0.7-2.4-1.3-3.9-2c-1.6-0.8-3.3-1.5-4.9-2c0,1.8,0.9,3.2,2.7,4.2v0C7,6.8,6.4,6.9,5.8,7.1c0.1,1.6,1.3,2.8,3.7,3.4l0,0c-0.9,0-1.7,0.3-2.3,0.9c0.8,1.4,2.1,2.1,4.1,2.1c-0.4,0.2-0.7,0.4-0.9,0.6c-0.4,0.4-0.5,0.8-0.4,1.3c0.4,0.7,1.2,1.1,2.3,1l0.1,0.1l0,0c-1.9,1.9-4.2,2.7-7,2.6l0,0c-1.7,0-3.4-0.8-5.3-2.3c1.9,2.6,4.5,4.5,7.7,5.7c3.6,1.1,7.3,1.2,10.9,0.3h0.1c3.5-1,6.5-2.9,8.9-5.9c1.1-1.6,1.8-3.1,2.1-4.5c1.8,0.1,3.2-0.4,4-1.5l0,0C33,11,31.8,10.9,30,10.6v-0.2c0,0,0,0,0,0c1.9-0.2,3.1-0.8,3.5-1.8c-1.4,0.5-2.7,0.5-4,0C29.3,6.9,28.4,5.3,26.9,3.9" />
                                </svg>
                            </div>
                        </li>
                        <li id="Contact">
                            <div className={classes.Round}>
                                <svg width="20" height="20" fill="#606060" xmlns="true"
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
                            </div>
                        </li>

                    </ul>
                </div>
                <div><FooterLinks /></div>


                <div className={classes.Right}>
                    <ul id="Top">
                        <li id="Top">
                            <div className={classes.Round}>
                                <svg xmlns="true" width="20" height="20" fill="#606060" viewBox="0 0 22.1 40.8">
                                    <path d="M9,0.9C9.5,0.3,10.3,0,11.1,0c0.8,0,1.5,0.3,2.1,0.9L21.3,9c0.6,0.6,0.8,1.3,0.8,2.1c0,0.7-0.3,1.5-0.9,2.1c-1.1,1.1-3,1.1-4.1,0L14,9.9v28c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9v-28L5,13.1c-1.1,1.1-3,1.1-4.1,0c-1.1-1.1-1.1-3,0-4.1L9,0.9" />
                                </svg>
                            </div>

                        </li>
                    </ul>
                </div>

            </div>


        </div>
    );

}

export default Footer;