import React from 'react'
import './Destinations.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import maldives from '../../assets/maldives.jpg'
import maldives2 from '../../assets/maldives2.jpg'
// import keywest from '../../assets/keywest.jpg'
import keywest from '../../assets/hunagry2.avif'

const Destinations = () => {
  return (
    <div name='destination' className='destinations '>
        <div className="container">
            <h1>All Inclusives Resorts</h1>
            <p>Magyar Best Beaches</p>
        </div>
        <div className="img-ctn">
            <img src={BoraBora} alt="" />
            <div className="img-wrap">
            <img src={BoraBora2} alt="" />
            <img src={maldives} alt="" />
            <img src={maldives2} alt="" />
            <img src={keywest} alt="" />
            </div>
           
        </div>
        
    </div>
  )
}

export default Destinations