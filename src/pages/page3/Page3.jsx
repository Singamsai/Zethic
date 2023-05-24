import React from 'react'
import './page3.css'
import {GiFlowerStar} from 'react-icons/gi'
import {MdStar} from 'react-icons/md'
export default function Page3() {
  return (
    <div className='page3'>
      <h1>Project Amenities</h1>
      <div className='page3_body'>
        <GiFlowerStar className='flowerstar'/>
        <h1 >Childer's Play Arena <br/> Street Lights<br/> 24 X 7 Security <br/> Avenue Trees </h1>
        <div className='page3_icon'>
            <MdStar className='mdstar' />
        </div>
    </div>
    </div>
  )
}
