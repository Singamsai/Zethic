import React from 'react'
import './page4.css'
import Card from '../../components/card/Card'
import {MdArrowBackIosNew,MdArrowForwardIos} from 'react-icons/md'

export default function Page4() {
  return (
    <div className='page_4'>
      <div className='page4'>
      <h1>Feature Projects</h1>
      <div className='page4_head'>
        <div className='page4_head1'>
            <button>Egmore</button>
            <button>Koyambedu</button>
            <button>Sholinganallur</button>
            <button>Choolaimedu</button>
            <button>Greams road</button>
            <button>Royapettah</button>
        </div>
        <div className='page4_head2'>
            <button><MdArrowBackIosNew/></button> 
            <button><MdArrowForwardIos/></button> 
        </div>
      </div>
      <div className='cards'>
        <Card link="https://d5fp1c6whm5mr.cloudfront.net/3378474_img-20200730-wa0515_1080x810.jpg"/>
        <Card link="https://www.pickeronline.com/uploads/category/147307724857cd6000c82a1.jpg"/>
        <Card link="https://www.huahinschool.com/wp-content/gallery/the-empty-plot-of-green-land/the-empty-plot-of-green-land-2.JPG"/>
        <Card link="https://cdn.remax.co.za/listings/2912876/original/pic_37558491.jpg"/>
      </div>
    </div>
    </div>
  )
}
