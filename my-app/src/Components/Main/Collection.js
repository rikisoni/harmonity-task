
import Calculator from '../../Assets/svg/calculator.svg';
import Cloud from '../../Assets/svg/cloud.svg';
import Clock from '../../Assets/svg/clock.svg';
import Heart from '../../Assets/svg/heart.svg';
import classes from './Main.module.css';




const Collection = () => {

    return (


        <div className={classes.Collection}>

            <div className={classes.Container}>
                <div className={classes.Header2}>
                    <h2>WHAT WE DO</h2>
                </div>
                <div className={classes.Box}>

                    <div className={classes.Box1}><img src={Calculator} style={{ width: '40px', height: '40px'}}></img></div>


                    <div className={classes.Box2}><img src={Cloud} style={{ width: '40px', height: '40px' }}></img></div>
                </div>


                <div className={classes.Box}>
                    <div className={classes.Box3}>  <img src={Clock} style={{ width: '40px', height: '40px' }}></img></div>


                    <div className={classes.Box4}><img src={Heart} style={{ width: '40px', height: '40px' }}></img>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Collection;