import Facebook from '../../Assets/svg/facebook.svg'
import Twitter from '../../Assets/svg/twitter.svg'
import Contact from '../../Assets/svg/contact.svg'
import Top from '../../Assets/svg/top.svg'

import classes from "./Footer.module.css";
import FooterLinks from './FooterLinks';

const Footer = () => {

    return (

        <div className={classes.Footer}>
            <div className={classes.Left}>
                <ul>
                    <li id="Facebook">
                        <a href="/"><img src={Facebook} style={{ width: '20px', height: '20px' }}></img></a>

                    </li>
                    <li id="Twitter">
                       <a href="/"> <img src={Twitter} style={{ width: '20px', height: '20px' }}></img></a>
                    </li>
                    <li id="Contact">
                       <a href="/"> <img src={Contact} style={{ width: '20px', height: '20px' }}></img></a>
                    </li>

                </ul>
            </div>
            <div><FooterLinks /></div>


            <div className={classes.Right}><ul id="Top">
                <li id="Top">
                    <img src={Top} style={{ width: '20px', height: '20px' }}></img>
                </li>
            </ul></div>


        </div>
    );

}

export default Footer;