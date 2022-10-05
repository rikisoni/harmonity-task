
import Icon from "../SearchIcon/Icon";
import classes from './SearchButton.module.css';

const SearchButton = props => {
    return
    <button className={classes.button}>

        <span className={classes.icon}>
            <Icon />
        </span>

    </button>

};

export default SearchButton;