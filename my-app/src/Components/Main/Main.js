import Collection from "./Collection";
import classes from './Main.module.css';
import Section from "./Section";
import Carousel from "./Carousel";




const Main = () =>{

    return(
        
       <div className={classes.Main}> 
       <Carousel/>
       <Section/>
       <Collection/>
       </div>
    );
}

export default Main;