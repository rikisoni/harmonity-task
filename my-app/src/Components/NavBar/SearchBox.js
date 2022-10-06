import classes from './NavBar.module.css';

const SearchBox = () => {

    return (

        <div className={classes.SearchBox}>
            <input
                type="text"
                placeholder="Search here"
            />
        </div>);
}

export default SearchBox;