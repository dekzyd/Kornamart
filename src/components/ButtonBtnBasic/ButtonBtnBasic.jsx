/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon05 } from "../../icons/Icon05";
import { ButtonBaseTextMd } from "../ButtonBaseTextMd";
import { ButtonBaseTextSm } from "../ButtonBaseTextSm";

export const ButtonBtnBasic = ({
  size,
  content,
  color,
  className,
  buttonBaseTextMdText = "Button",
  buttonBaseTextMdTextClassName,
  buttonBaseTextSmText = "Button",
}) => {
  return (
    <div
      className={`relative ${
        color === "primary"
          ? "[background:linear-gradient(180deg,rgb(18.06,127.05,255)_0%,rgb(0,103.06,255)_100%)]"
          : ""
      } ${color === "light" ? "border border-solid" : ""} ${color === "light" ? "border-gray-300" : ""} ${
        size === "small" && content === "btn-icon"
          ? "w-[30px]"
          : size === "small" && ["btn-icon-text", "btn-text-icon"].includes(content)
          ? "w-[100px]"
          : size === "normal" && content === "btn-icon"
          ? "w-[40px]"
          : size === "normal" && ["btn-icon-text", "btn-text-icon"].includes(content)
          ? "w-[120px]"
          : size === "large" && content === "btn-icon"
          ? "w-[54px]"
          : size === "large" && ["btn-icon-text", "btn-text-icon"].includes(content)
          ? "w-[140px]"
          : ""
      } ${content === "btn-text" ? "inline-flex" : ""} ${content === "btn-text" ? "flex-col" : ""} ${
        content === "btn-text" ? "items-center" : ""
      } ${content === "btn-text" ? "gap-[10px]" : ""} ${
        content === "btn-text" && size === "small"
          ? "px-[10px] py-0"
          : content === "btn-text" && size === "normal"
          ? "px-[16px] py-0"
          : content === "btn-text" && size === "large"
          ? "px-[20px] py-0"
          : ""
      } ${size === "normal" ? "h-[40px]" : size === "large" ? "h-[54px]" : "h-[30px]"} ${
        size === "large" ? "rounded-[8px]" : "rounded-[6px]"
      } ${content === "btn-text" ? "justify-center" : ""} ${color === "light" ? "bg-white" : ""} ${className}`}
    >
      {["btn-icon-text", "btn-icon", "btn-text-icon"].includes(content) && (
        <Icon05
          className={
            content === "btn-text-icon" && size === "large"
              ? "!absolute !w-[28px] !h-[28px] !top-[13px] !left-[102px]"
              : content === "btn-icon-text" && size === "normal"
              ? "!absolute !w-[22px] !h-[22px] !top-[9px] !left-[9px]"
              : content === "btn-text-icon" && size === "normal"
              ? "!absolute !w-[22px] !h-[22px] !top-[9px] !left-[89px]"
              : content === "btn-icon-text" && size === "small"
              ? "!absolute !w-[18px] !h-[18px] !top-[6px] !left-[7px]"
              : content === "btn-text-icon" && size === "small"
              ? "!absolute !w-[18px] !h-[18px] !top-[6px] !left-[76px]"
              : size === "small" && content === "btn-icon"
              ? "!absolute !w-[20px] !h-[20px] !top-[5px] !left-[5px]"
              : size === "normal" && content === "btn-icon"
              ? "!absolute !w-[24px] !h-[24px] !top-[8px] !left-[8px]"
              : size === "large" && content === "btn-icon"
              ? "!absolute !w-[30px] !h-[30px] !top-[12px] !left-[12px]"
              : "!absolute !w-[28px] !h-[28px] !top-[13px] !left-[10px]"
          }
          color={color === "light" ? "#0D6EFD" : "white"}
        />
      )}

      {size === "small" && ["btn-icon-text", "btn-text-icon", "btn-text"].includes(content) && (
        <ButtonBaseTextSm
          className={
            content === "btn-text"
              ? "!flex-[0_0_auto]"
              : content === "btn-icon-text"
              ? "!absolute !left-[40px] !top-[7px]"
              : content === "btn-text-icon" && color === "light"
              ? "!absolute !left-[20px] !top-[7px]"
              : "!absolute !left-[19px] !top-[7px]"
          }
          text={content === "btn-text" ? buttonBaseTextSmText : "Button"}
          textClassName={
            content === "btn-text" && color === "primary"
              ? "!text-white !text-center"
              : content === "btn-text" && color === "light"
              ? "!text-center"
              : "!text-white"
          }
        />
      )}

      {size === "normal" && ["btn-icon-text", "btn-text-icon", "btn-text"].includes(content) && (
        <ButtonBaseTextMd
          className={
            content === "btn-icon-text" && color === "light"
              ? "!absolute !left-[48px] !top-[11px]"
              : content === "btn-text-icon" && color === "primary"
              ? "!absolute !left-[23px] !top-[11px]"
              : content === "btn-text-icon" && color === "light"
              ? "!absolute !left-[22px] !top-[11px]"
              : content === "btn-text"
              ? "!flex-[0_0_auto]"
              : "!absolute !left-[50px] !top-[11px]"
          }
          text={content === "btn-text" ? buttonBaseTextMdText : "Button"}
          textClassName={content === "btn-text" ? buttonBaseTextMdTextClassName : "!text-white"}
        />
      )}

      {content === "btn-text" && size === "large" && (
        <button className="inline-flex items-start gap-[10px] flex-[0_0_auto] relative all-[unset] box-border">
          <div
            className={`font-text-btn-btn-large w-fit mt-[-1.00px] tracking-[var(--text-btn-btn-large-letter-spacing)] text-[length:var(--text-btn-btn-large-font-size)] [font-style:var(--text-btn-btn-large-font-style)] font-[number:var(--text-btn-btn-large-font-weight)] text-center leading-[var(--text-btn-btn-large-line-height)] relative ${
              color === "light" ? "text-primary" : "text-white"
            }`}
          >
            Button
          </div>
        </button>
      )}

      {size === "large" && ["btn-icon-text", "btn-text-icon"].includes(content) && (
        <button
          className={`inline-flex items-start top-[16px] gap-[10px] absolute all-[unset] box-border ${
            content === "btn-text-icon" ? "left-[27px]" : "left-[57px]"
          }`}
        >
          <div
            className={`font-text-btn-btn-large w-fit mt-[-1.00px] tracking-[var(--text-btn-btn-large-letter-spacing)] text-[length:var(--text-btn-btn-large-font-size)] [font-style:var(--text-btn-btn-large-font-style)] font-[number:var(--text-btn-btn-large-font-weight)] leading-[var(--text-btn-btn-large-line-height)] relative ${
              color === "light" ? "text-primary" : "text-white"
            }`}
          >
            Button
          </div>
        </button>
      )}
    </div>
  );
};
