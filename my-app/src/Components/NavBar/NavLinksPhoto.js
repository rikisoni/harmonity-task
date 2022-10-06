import HomePage from '../../Assets/svg/home.svg'
import AboutPage from '../../Assets/svg/about.svg'
import WorkPage from '../../Assets/svg/our-work.svg'
import ContactPage from '../../Assets/svg/contact.svg'

const NavLinksPhoto = () => {

    return (

        <ul>
            <li id="home">

                <img src={HomePage} style={{ width: '20px', height: '20px' }}></img>
                
            </li>
            <li id="about">
                <img src={AboutPage} style={{ width: '20px', height: '20px' }}></img>
               
            </li>
            <li id="work">
                <img src={WorkPage} style={{ width: '20px', height: '20px' }}></img>
                
            </li>
            <li id="contact">
                <img src={ContactPage} style={{ width: '20px', height: '20px' }}></img>
                
            </li>
        </ul>
    );
}

export default NavLinksPhoto;