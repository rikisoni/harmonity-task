
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className = {classes.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/">ABOUT US</a>
                    </li>
                    <li>
                        <a href="/">OUR WORK</a>
                    </li>
                    <li>
                        <a href="/">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default NavBar;