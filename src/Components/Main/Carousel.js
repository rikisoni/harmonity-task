import classes from './Main.module.css';
import { images } from './CarouselData';
import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';


const Carousel = () => {

    const [currImg, setCurrImg] = useState(0);

    return (

        <div className={classes.Carousel}>
            <div className={classes.CarouselInner} style={{ backgroundImage: `url(${images[currImg].img})` }}>

                <div className={classes.Left} onClick={() => {

                    currImg > 0 && setCurrImg(currImg - 1);

                }}>
                    <AiOutlineArrowLeft style={{ fontSize: 20 }} />
                </div>
                <div className={classes.Header}><h3>LOREM IPSUM DOLOR SIT</h3></div>
                    
                <div className={classes.Center}>
                    <div>
                        <span className={classes.Dot} onClick={() => {

                            setCurrImg(0);

                        }}></span>
                        <span className={classes.Dot} onClick={() => {
                            setCurrImg(1);

                        }}></span>
                        <span className={classes.Dot} onClick={() => {
                             setCurrImg(2);

                        }}></span>
                    </div>
                

                </div>

                <div className={classes.Right} onClick={() => {
                    currImg < images.length - 1 && setCurrImg(currImg + 1);

                }}>
                    <AiOutlineArrowRight style={{ fontSize: 20 }} />
                </div>


            </div>
        </div>
    );
}

export default Carousel;