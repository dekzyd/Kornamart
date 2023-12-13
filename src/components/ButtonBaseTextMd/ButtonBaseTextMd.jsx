/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ButtonBaseTextMd = ({ className, textClassName, text = "Button normal" }) => {
  return (
    <div className={`inline-flex items-start gap-[10px] relative ${className}`}>
      <div
        className={`relative w-fit mt-[-1.00px] font-text-btn-btn-normal font-[number:var(--text-btn-btn-normal-font-weight)] text-primary text-[length:var(--text-btn-btn-normal-font-size)] tracking-[var(--text-btn-btn-normal-letter-spacing)] leading-[var(--text-btn-btn-normal-line-height)] whitespace-nowrap [font-style:var(--text-btn-btn-normal-font-style)] ${textClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
