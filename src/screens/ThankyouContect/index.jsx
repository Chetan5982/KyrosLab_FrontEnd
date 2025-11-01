import React from "react";
import { MainSection } from "./styled";

export default function ThankyouContect() {
  return (
    <MainSection>
      <div className="container">
        {/* <h1>Thank You Page Here</h1> */}
        <div className="iconofthankyou">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="240"
            height="226"
            viewBox="0 0 240 226"
            fill="none"
          >
            <circle cx="118.58" cy="129.741" r="93.4691" fill="#024638" />
            <circle cx="230.883" cy="45.3394" r="9.0679" fill="#024638" />
            <ellipse
              cx="14.6481"
              cy="13.9506"
              rx="14.6481"
              ry="13.9506"
              fill="#024638"
            />
            <ellipse
              cx="6.97531"
              cy="190.426"
              rx="6.97531"
              ry="7.67284"
              fill="#024638"
            />
            <ellipse
              cx="214.142"
              cy="223.21"
              rx="3.48765"
              ry="2.79012"
              fill="#024638"
            />
            <path
              d="M111.637 155.017C109.654 155.017 107.672 154.167 106.539 152.468L90.6819 132.08C88.4165 129.248 88.9829 125.283 91.8146 123.018C94.6463 120.753 98.6107 121.319 100.876 124.151L111.637 138.026L135.423 107.16C137.689 104.329 141.653 103.762 144.485 106.028C147.316 108.293 147.883 112.258 145.617 115.089L116.734 152.468C115.318 153.884 113.619 155.017 111.637 155.017Z"
              fill="white"
            />
            <circle cx="158.339" cy="144.389" r="3.48765" fill="white" />
            <circle cx="66.9629" cy="106.025" r="5.58025" fill="white" />
            <circle cx="148.574" cy="76.0301" r="2.09259" fill="white" />
            <circle cx="90.679" cy="174.383" r="2.79012" fill="white" />
            <circle cx="121.37" cy="107.419" r="1.39506" fill="white" />
          </svg>
          <p className="thanksText">Thanks for Contact Us</p>
          <p className="thanksDes">
            Thank you for reaching out to us! Your inquiry is important to us,
            and we will get back to you shortly. In the meantime, you can
            explore our website for more information. We appreciate your
            interest in Bhanderi Lab Grown Diamonds.
          </p>
          <button className="thanksBtn">
            <a href="/"> Back To Home</a>
          </button>
        </div>
      </div>
    </MainSection>
  );
}
