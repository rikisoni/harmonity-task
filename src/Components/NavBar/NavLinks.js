import classes from './NavBar.module.css'


const NavLinks = () => {
    return (
        <ul>
            <li className={classes.Home}>
                <a href="/">HOME</a>
                <span>/</span>
            </li>
            <li className={classes.About}>
                <a href="/">ABOUT US</a>
                <span>/</span>
            </li>
            <li className={classes.Work}>
                <a href="/">OUR WORK</a>
                <span>/</span>
            </li>
            <li className={classes.Contact}>
                <a href="/">CONTACT</a>

            </li>
        </ul>
    );


}

export default NavLinks;