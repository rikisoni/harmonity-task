import {Fragment} from 'react';
import classes from './Header.module.css';

import SearchIcon from '../../Assets/svg/search.svg'

const Header = props => {

return <Fragment>

<header className = {classes.header}>
     <nav class="header__nav" id="navbar">
        <ul class="header__list">
          <li class="header__item"><a href="/" class="header__link">HOME</a></li>
          <li class="header__item"><a href="/" class="header__link">ABOUT US</a></li>
          <li class="header__item"><a href="/" class="header__link">OUR WORK</a></li>
          <li class="header__item"><a href="/" class="header__link">CONTACT</a></li>
        </ul>
      </nav>

</header>


</Fragment>;

};

export default Header;