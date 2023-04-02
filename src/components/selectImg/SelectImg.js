import React from 'react'
import './SelectImg.css'
import BoraBora from '../../assets/borabora.jpg'

const SelectImg = ({bg, text}) => {
  return (
    <div className='selects'>
        <img src={bg} alt="" />
        <div className="overlay">
            <p>{text}</p>
        </div>
        
    </div>
  )
}

export default SelectImg