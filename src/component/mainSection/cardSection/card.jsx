import React from "react";
import "./card.style.css";
import UtkarshPic from "../../../asset/purplePic.png";
import PurpleTick from "../../../asset/purpleTick.svg";
import BajajFin from "../../../asset/bluePic.png";
import BlueTick from "../../../asset/blueTick.svg";
import Shri from "../../../asset/blackPic.png";
import BlackTick from "../../../asset/blackTick.svg";
import Mahindra from "../../../asset/redPic.png";
import RedTick from "../../../asset/redTick.svg";

function Cards() {
  const nameArr = [
    "Utkarsh Small Finance Bank",
    "Bajaj Finserv",
    "Shriram Finance",
    "Mahindra Finance",
  ];
  const pointOneArr = [
    "Highest Interest Rate",
    "Crisil AAA Rated",
    "Crisil AAA Rated",
    "Crisil AAA Rated",
  ];
  const pointTwoArr = [
    "RBI Insured",
    "No Video KYC required",
    "No Video KYC required",
    "No Video KYC required",
  ];
  const image = [UtkarshPic, BajajFin, Shri, Mahindra];
  const ticks = [PurpleTick, BlueTick, BlackTick, RedTick];
  const interestRate = ["9.10", "8.80", "8.80", "8.80"];
  const bgColor = ["#F8F0FF", "#EFF6FF", "#F4F4F4", "#FFEFEF"];
  const textPointBackground = ["#EFDDFF", "#D7E9F8", "#DEDEDE", "#FFD7D7"];
  const buttonsBgColor = ["#520B8D", "#0072BB", "#010101", "#FF0000"];

  return (
    <>
      {nameArr.map((ele, ind) => (
        <div
          className="cardWrapper cardBgColor"
          style={{ background: bgColor[ind] }}
        >
          <div className="cardTitle">
            <img src={image[ind]} className="cardLogoImg" alt="Not Found" />
            <h3>{ele}</h3>
          </div>
          <div className="cardPoints">
            <div
              className="pointOne"
              style={{ background: textPointBackground[ind] }}
            >
              <img
                src={ticks[ind]}
                className="cardPointTickLogo"
                alt="Not Found"
              />
              {pointOneArr[ind]}
            </div>
            <div
              className="pointTwo"
              style={{ background: textPointBackground[ind] }}
            >
              <img
                src={ticks[ind]}
                className="cardPointTickLogo"
                alt="Not Found"
              />
              {pointTwoArr[ind]}
            </div>
          </div>
          <div className="buttonDiv">
            <span className="innerText">
              Interest Upto <br />
              <span className="interestNum">{interestRate[ind]}% p.a.</span>
            </span>
            <button
              className="bookNowBtn"
              style={{ background: buttonsBgColor[ind] }}
            >
              {" "}
              Book Now
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
