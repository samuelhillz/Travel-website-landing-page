import React from 'react'
import './Select.css'
import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import maldives from '../../assets/maldives.jpg'
import maldives2 from '../../assets/maldives2.jpg'
import keywest from '../../assets/keywest.jpg'
import maldives3 from '../../assets/maldives.jpg'
import SelectImg from '../selectImg/SelectImg'



const Select = () => {
  return (
    <div name='select' className='select wrapper'>
        <SelectImg bg={BoraBora} text='Tapolca'/>
        <SelectImg bg={BoraBora2} text='Lila Fúred'/>
        <SelectImg bg={maldives} text='Tundi Kért'/>
        <SelectImg bg={maldives2} text='Balaton'/>
        <SelectImg bg={keywest} text='Nagymoros'/>
        <SelectImg bg={maldives3} text='Szinva park'/>

    </div>
  )
}

export default Select