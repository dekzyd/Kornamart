/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const NavBasePillsTextWrapper = ({ className, textClassName, text = "Active menu" }) => {
  return (
    <div
      className={`relative w-[164px] h-[40px] bg-[url(https://c.animaapp.com/ZdSzOm0O/img/---background-46.svg)] bg-[100%_100%] ${className}`}
    >
      <div
        className={`absolute w-[144px] top-[10px] left-[10px] [font-family:'Inter',Helvetica] font-medium text-dark text-[16px] tracking-[0] leading-[normal] ${textClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
