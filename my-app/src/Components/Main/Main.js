import Collection from "./Collection";
import classes from './Main.module.css';
import Section from "./Section";
import Slider from "./Slider";
import { SliderData } from "./SliderData";


const Main = () =>{

    return(
        
       <div className={classes.Main}> 
       <Slider slides={SliderData}/>
       <Section/>
       <Collection/>
       </div>
    );
}

export default Main;