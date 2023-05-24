import React from "react";
import "./card.css";

export default function Card({link}) {
  return (
    <div className="card">
      <img
        src={link}
        height={300}
        width={280}
        alt=""
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
        sunt!
      </p>
      <h2>
        $16,471 <b style={{color:"gray"}}>| 2088 sqft</b>
      </h2>
    </div>
  );
}
