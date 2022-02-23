import React, { useState } from "react";
import "./index.scss";
export default function TrackItem(props) {
  
  const [hoverCont, setHover] = useState(false);
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const { data } = props;
  const mouseEnter = (e) => {
    setHover(true);
    console.log(e);
    setX(e.pageX);
    setY(e.pageY);
    console.log(e.screenX, e.screenY);
  };
  const mouseLeave = () => {
    setHover(false);
  };
  return (
    <>
      <div
        className="col-2  trackItem"
        onClick={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <img src={data.artworkUrl60} alt={data.trackName} />
        <p>{data.trackName}</p>
      </div>
      {hoverCont && (
        <div
          className="dis-home btn btn-dark"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          style={{ top: y + "px", left: x + "px" }}
        >
          <p>{data?.shortDescription}</p>
          <button>more info</button>
        </div>
      )}
    </>
  );
}
