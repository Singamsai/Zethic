import React from "react";
import plotImage from "../../images/plotImage.PNG";
import "./page1.css";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiFillCaretDown, AiFillHeart } from "react-icons/ai";
import plotImage2 from "../../images/plotImage2.jpg"
import plotImage3 from "../../images/plotImage3.webp";
import { GiPolarStar } from "react-icons/gi";

export default function Page1() {
  return (
    <div className="page_1">
      <div className="page1">
      <div className="page1_top">
        <img
          src={plotImage}
          className="page1_topImg"
          alt=""
        ></img>
        <div className="page1_top_text">
          <h1 className="page1_h1">Discover Your Perfect </h1>
          <h1> Plot of Land.</h1>
          <div className="page1_top_text2">
            <p style={{ color: "gray" }}>Starting at</p>
            <GiPolarStar
              style={{ color: "rgb(167, 110, 5)", fontSize: "3rem" }}
            />
          </div>
          <div className="page1_amt">
            <h1>
              <BsCurrencyRupee style={{ fontSize: "2.5rem" }} />
              3999
            </h1>
            <p>per.sqft</p>
          </div>
          <div className="page1_inpBox">
            <input type="text" placeholder="Search area or location" />
            <p>
              <BsCurrencyRupee /> Budget <AiFillCaretDown />
            </p>
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="page1_mid">
        <div className="page1_mid1">
          <h1>340k+</h1>
          <p>Landmark Near Chennai</p>
        </div>
        <p>
          <AiFillHeart style={{ color: "red" }} /> Treding Projects
        </p>
      </div>
      <div className="page1_buttom">
        <div className="page1_btm_text">
          <div className="top">
            <div className="page1_btm1">
              <h1>437k+</h1>
              <p>Happy Customers</p>
            </div>
            <div className="page1_btm1">
              <h1>4.3m+</h1>
              <p>Sq. Feet Developed</p>
            </div>
          </div>
          <p className="pg1_btm_txtp">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus consequatur blanditiis exercitationem magni.
          </p>
        </div>
        <div className="page1_buttomImg">
          <img
            src={plotImage2}
            alt=""
          />
          <img src={plotImage3} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
}
