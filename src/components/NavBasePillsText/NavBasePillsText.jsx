/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const NavBasePillsText = ({
  className,
  backgroundClassName,
  background = "https://c.animaapp.com/ZdSzOm0O/img/---background-47@2x.png",
  textClassName,
  text = "Meni item",
}) => {
  return (
    <div className={`relative w-[164px] h-[40px] overflow-hidden ${className}`}>
      <img
        className={`absolute w-[164px] h-[40px] top-[36px] left-[6612px] ${backgroundClassName}`}
        alt="Background"
        src={background}
      />
      <div
        className={`absolute w-[144px] top-[10px] left-[10px] font-text-base font-[number:var(--text-base-font-weight)] text-gray-600 text-[length:var(--text-base-font-size)] tracking-[var(--text-base-letter-spacing)] leading-[var(--text-base-line-height)] [font-style:var(--text-base-font-style)] ${textClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
