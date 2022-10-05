import {Fragment} from 'react';
import classes from './Header.module.css';

import SearchIcon from '../../Assets/svg/search.svg'



const Header = props => {

return <Fragment>

<header className = {classes.header}>
    <h1>React</h1>
    <h2>React2</h2>
</header>
<div className = {classes['main-image']}>
  <img src={SearchIcon} alt="Search icon"/>
</div>

</Fragment>;

};

export default Header;