import Calculator from '../../Assets/svg/calculator.svg';
import Clock from '../../Assets/svg/clock.svg';
import classes from './Main.module.css';
import ReadMore from './ReadMore';


const Section = ()=>{

    return(
    
    <div className={classes.Collection}>

        <div className={classes.Container}>
            <div className={classes.Header2}>
                <h2>WHO WE ARE</h2>
            </div>
            <div className={classes.Box}>

                <div className={classes.Box1}><img src={Calculator} style={{ width: '40px', height: '40px'}}></img></div>


                <div className={classes.Lorem1}><ReadMore>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tellus vulputate ante scelerisque, eu tristique velit semper.</ReadMore></div>
            </div>


            <div className={classes.Box}>
                <div className={classes.Box3}>  <img src={Clock} style={{ width: '40px', height: '40px' }}></img></div>


                <div className={classes.Lorem2}><ReadMore>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tellus vulputate ante scelerisque, eu tristique velit semper.</ReadMore></div>
            </div>
        </div>

    </div>
    
    );
}

export default Section;