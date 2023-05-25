import React from 'react'
import './page3.css'
import {GiFlowerStar} from 'react-icons/gi'
import {MdStar} from 'react-icons/md'
export default function Page3() {
  return (
    <div className='page_3'>
      <div className='page3'>
      <h1>Project Amenities</h1>
      <div className='page3_body'>
        <GiFlowerStar className='flowerstar' />
        <div className='page3_body_text'>
          <div className='page3_body_img1'>
            <h1 >Childer's Play Arena </h1>
            <img src="https://d5fp1c6whm5mr.cloudfront.net/3378474_img-20200730-wa0515_1080x810.jpg" className='image1' alt='' ></img>
          </div>
          <div className='page3_body_img2'>
            <h1>Street Lights </h1>
            <img className='image2' src="https://www.pickeronline.com/uploads/category/147307724857cd6000c82a1.jpg " alt='' ></img>
          </div>
          <div className='page3_body_img3'>
            <h1 >24 X 7 Security </h1>
            <img className='image3' src="https://www.huahinschool.com/wp-content/gallery/the-empty-plot-of-green-land/the-empty-plot-of-green-land-2.JPG " alt='' ></img>
          </div>
          <div className='page3_body_img4'>
            <h1 >Avenue Trees </h1>
            <img className='image4' src="https://cdn.remax.co.za/listings/2912876/original/pic_37558491.jpg " alt='' ></img>
          </div>
        </div>
        <div className='page3_icon'>
            <MdStar className='mdstar' />
        </div>
    </div>
    </div>
    </div>
  )
}
