import React from "react";
import "./page5.css";

export default function Page5() {
  return (
    <div className="page5">
      <img
        src="https://www.zricks.com/ImagesPostProject/200000000000204069/DLF_Square_and_Nestle_House_7.jpg"
        height={400}
        width={330}
        alt=""
      />
      <div className="page5_mid">
        <h1 style={{color:'red'}}>Project Highlights</h1>
        <div className="page5_mid2">
          <h1>Near To School</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Totam et laboriosam atque nisi tempore <br />
            aliquam delectus officiis nam iste consectetur!
          </p>
          <h1>Next</h1>
        </div>
      </div>
        <div className="page5_footer">
          <div><p></p></div>
        </div>
    </div>
  );
}
