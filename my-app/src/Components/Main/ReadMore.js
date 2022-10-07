import classes from './Main.module.css';
import { useState } from 'react';

const ReadMore = ({children}) =>{

const [isReadMoreShown, setReadMoreShown] =
 useState(false)

 const toggleButton = () =>{

    setReadMoreShown (prevState => !prevState)
 }

    return(
      
       <div className={classes.ReadBox}>
       <h3>Lorem ipsum</h3>
       <div className={classes.ReadMore}> 
       {isReadMoreShown ? children: children.substr(0,55)}
       <button className={classes.Button} onClick={toggleButton}> {isReadMoreShown ? 'SHOW LESS' : 'SHOW MORE'}</button>
       </div>
       </div>

    );
}

export default ReadMore;