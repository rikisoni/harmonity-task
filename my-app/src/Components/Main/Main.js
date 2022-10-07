import Collection from "./Collection";
import classes from './Main.module.css';
import Section from "./Section";


const Main = () =>{

    return(
        
       <div className={classes.Main}> 
       <Section/>
       <Collection/>
       </div>
    );
}

export default Main;