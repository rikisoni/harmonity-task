import {Fragment} from 'react';
import classes from './Header.module.css';
import SearchButton from './SearchButton';


const Header = props => {

    return (
            <Fragment>
               <nav class="navigation" >
                <button className="hamburger">
               {/* icon from heroicons.com */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
                </svg>
                </button>

       <div className="navigation-menu">
        <ul class="header__list">
          <li class="header__item"><a href="/" class="header__link">HOME</a></li>
          <li class="header__item"><a href="/" class="header__link">ABOUT US</a></li>
          <li class="header__item"><a href="/" class="header__link">OUR WORK</a></li>
          <li class="header__item"><a href="/" class="header__link">CONTACT</a></li>
        </ul>
       </div>
       <SearchButton/>

    </nav>
            </Fragment>);

};

export default Header;