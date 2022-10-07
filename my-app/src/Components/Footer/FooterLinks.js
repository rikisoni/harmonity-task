import classes from './Footer.module.css'


const FooterLinks = () => {
    return (
        <div className={classes.FooterLinks}>

             <ul>
                <li id="/">
                    <a href="/">HOME</a>
                    <span>/</span>
                </li>
                <li id="/">
                    <a href="/">ABOUT US</a>
                    <span>/</span>
                </li>
                <li id="/">
                    <a href="/">OUR WORK</a>
                    <span>/</span>
                </li>
                <li id="/">
                    <a href="/">CONTACT</a>
                </li>
                </ul>
        </div>
    );


}

export default FooterLinks;