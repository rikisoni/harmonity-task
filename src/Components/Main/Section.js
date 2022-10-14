import Lion from '../../Assets/svg/section1.jpg';
import LionSecond from '../../Assets/svg/section2.jpg';
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

                <div className={classes.SectionLion}><img src={Lion} style={{ width: '200px', height: '160px'}}></img></div>


                <div className={classes.Lorem1}><ReadMore>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tellus vulputate ante scelerisque, eu tristique velit semper.</ReadMore></div>
            </div>


            <div className={classes.Box}>
                <div className={classes.SectionLionSecond}><img src={LionSecond} style={{ width: '200px', height: '160px' }}></img></div>


                <div className={classes.Lorem2}><ReadMore>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tellus vulputate ante scelerisque, eu tristique velit semper.</ReadMore></div>
            </div>
        </div>

    </div>
    
    );
}

export default Section;