import Calculator from '../../Assets/svg/calculator.svg';
import Cloud from '../../Assets/svg/cloud.svg';
import Clock from '../../Assets/svg/clock.svg';
import Heart from '../../Assets/svg/heart.svg';
import classes from './Main.module.css';





const Section = ()=>{

    return(
    
    <div className={classes.Collection}>

        <div className={classes.Container}>
            <div className={classes.Header2}>
                <h2>WHO WE ARE</h2>
            </div>
            <div className={classes.Box}>

                <div className={classes.Box1}><img src={Calculator} style={{ width: '40px', height: '40px'}}></img></div>


                <div className={classes.Lorem1}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tellus vulputate ante scelerisque, eu tristique velit semper.</p></div>
            </div>


            <div className={classes.Box}>
                <div className={classes.Box3}>  <img src={Clock} style={{ width: '40px', height: '40px' }}></img></div>


                <div className={classes.Lorem2}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tellus vulputate ante scelerisque, eu tristique velit semper.</p></div>
            </div>
        </div>

    </div>
    
    );
}

export default Section;