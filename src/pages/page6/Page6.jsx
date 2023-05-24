import React from "react";
import "./page6.css";
import { CgShapeRhombus } from "react-icons/cg";
import page6Image from "../../images/page6Image.PNG";
import {MdArrowBackIosNew,MdArrowForwardIos} from 'react-icons/md'

export default function Page6() {
  return (
    <div className="page6">
      <CgShapeRhombus />
      <h1>Clients Testimonial</h1>
      <div className="page6_img">
        <img
          src="https://cloudfront.slrlounge.com/wp-content/uploads/2017/03/small-family-photo-pose.gif"
          width={400}
          height={300}
          alt=""

        ></img>
        <img src={page6Image} className="page6_img2" width={600}
          height={350}
          alt=""></img>
        <div>
        <img
          src="https://www.twinkleandshine.ca/wp-content/uploads/2018/08/218A1707.jpg"
          width={400}
          height={300}
          alt=""
        ></img>
        <CgShapeRhombus/>
        </div>
      </div>
      <div className='page4_head2'>
            <button><MdArrowBackIosNew/></button> 
            <button><MdArrowForwardIos/></button> 
        </div>
    </div>
  );
}
