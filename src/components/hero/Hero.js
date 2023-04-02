import React from 'react'
import './Hero.css'
import video from '../../assets/travel2.mp4'
import { BsSearch} from 'react-icons/bs'


const hero = () => {
  return (
    <div name='hero' className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={video}/>
            

        </video>
        <div className="content">
                <h1>First Class Travel</h1>
                <h2>Explore Top Locations Worldwide</h2>
                
                <form >
                    <input className='input' type="text" placeholder='Search  Destinations' />
                    {/* <div className="btn-search">
                        <button><BsSearch size={25} className='icon' /></button>
                    </div> */}
                </form>
            </div>
        
    </div>
  )
}

export default hero