import classes from './NavBar.module.css'


const NavLinks = () => {
    return (
        <ul>
        <li id="home">
            <a href="/">HOME</a>
            <span>/</span>
        </li>
        <li id="about">
            <a href="/">ABOUT US</a>
            <span>/</span>
        </li>
        <li id="work">
            <a href="/">OUR WORK</a>
            <span>/</span>
        </li>
        <li id="contact">
            <a href="/">CONTACT</a>

        </li>
    </ul>
    );


}

export default NavLinks;