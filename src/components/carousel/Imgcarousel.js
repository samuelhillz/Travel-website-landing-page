import React from 'react'
import './Imgcarousel.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import maldives from '../../assets/maldives.jpg'
import maldives2 from '../../assets/maldives2.jpg'
import keywest from '../../assets/keywest.jpg'


import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// var Carousel = require('react-responsive-carousel').Carousel;


const Imgcarousel = () => {
  return (
    <div className='wrap ctn'>
        <Carousel name='carousel' className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true} >
                <div>
                    <img src={BoraBora} />
                </div>
                <div>
                    <img src={BoraBora2} />
                </div>
                <div>
                    <img src={maldives} />
                </div>
                <div>
                    <img src={maldives2} />
                </div>
                <div>
                    <img src={keywest} />
                </div>
                <div>
                    <img src={maldives2} />
                </div>
            </Carousel>

    </div>
  )
}

export default Imgcarousel