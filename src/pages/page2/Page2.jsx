import React, { useState } from "react";
import "./page2.css";
import page2Image1 from "../../images/page2Image1.PNG";
import { GiNinjaStar } from "react-icons/gi";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

export default function Page2() {
    const [image1, setImage1] = useState("https://d5fp1c6whm5mr.cloudfront.net/3378474_img-20200730-wa0515_1080x810.jpg")
    const [image2, setImage2] = useState("https://www.property4321.com/imgs/photographs40/130489819072568955.jpg")
    const [image3, setImage3] = useState("https://cdn.modernghana.com/images/content/classifieds/IMG-20170925-WA0025.jpg")
    const [text, setText] = useState("East Facing")
  let arr = [
    "https://d5fp1c6whm5mr.cloudfront.net/3378474_img-20200730-wa0515_1080x810.jpg",
    "https://cdn.modernghana.com/images/content/classifieds/IMG_20180906_101817.jpg",
    "https://cdn.remax.co.za/listings/2912876/original/pic_37558491.jpg",
    "https://www.property4321.com/imgs/photographs40/130489819072568955.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.UCceRCmNLNKYMXQBH27aRwHaEc&pid=Api&P=0&h=180",
    "https://www.pickeronline.com/uploads/category/147307724857cd6000c82a1.jpg",
    "https://cdn.modernghana.com/images/content/classifieds/IMG-20170925-WA0025.jpg",
    "https://tommcdonald.ie/custom/public/images/site-1.jpg",
    "https://d12uoqa0c8grue.cloudfront.net/5142182_e6bfb62d-0486-4db0-9f7f-9410335a6913_1600x1200.jpg",
    "East Facing",
    "Boundary walls",
    "Corner Plots"
  ];
    let i = 0;
    let onClick = ()=>{
        i++;
        setImage1(arr[i]);
        setImage2(arr[i+3])
        setImage3(arr[i+6])
        setText(arr[i+9])
        if(i===3){
            i=0;
        }
    }

  return (
    <div className="page2">
      <div className="page2_head">
        <img src={page2Image1} alt="" />
      </div>
      <div className="page2_body">
        <div className="page2_body1">
          <h1 style={{color:"red"}}>
            Explore Our <br />
            Collections
          </h1>
          <div className="page2_line">
            <p></p>
            <h3>
              <GiNinjaStar />
              {text}
            </h3>
            <p></p>
          </div>
        </div>
        <div className="page2_body_img" onClick={()=>{onClick()}}>
          <img src={image1} width={320} height={350} alt=""/>
          <img src={image2} width={320} height={350} alt=""/>
          <img src={image3} width={320} height={350} alt=""/>
        </div>
      </div>
      <p className="exploremore"><HiOutlineArrowNarrowRight/>Explore More</p>
    </div>
  );
}
