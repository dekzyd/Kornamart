import { NavBasePillsText } from "../components/NavBasePillsText";
import { NavBasePillsTextWrapper } from "../components/NavBasePillsTextWrapper";
import { ButtonBtnBasic } from "../components/ButtonBtnBasic";
import { Avatar } from "../icons/Avatar";
import ImageSlider from "./ImageSlider";
import Images from "./Images";
import { useLoaderData, Link } from "react-router-dom";

const categories = ["all", "tables", "chairs", "kids", "sofa", "beds"];

const Trending = () => {
  // const { meta } = useLoaderData();
  // const { categories } = meta;
  return (
    <div className="pb-10">
      {/* categories */}
      <div className="flex items-center bg-lime-60 rounded border border-slate-300 h-[400px] gap-2 px-2">
        <div className="h-[380px] w-1/5 p-2 rounded">
          <p className="capitalize  font-medium text-3xl ml-4">Categories</p>
          <ul className="menu menu-md">
            {categories.map((item, index) => {
              return (
                <li key={index} className="my-2 capitalize">
                  <a>{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* slider */}
        <div className="relative h-[380px] w-3/5">
          <div className="bg-black h-20 w-72 absolute left-8 top-11 z-30 opacity-20 rounded-md"></div>
          <div className="absolute z-40 left-10 top-10 text-white h-32">
            <p className="text-2xl font-medium tracking-wide py-1">
              Latest trending
            </p>
            <p className="text-3xl font-extrabold tracking-widest pb-1">
              Exclusive items
            </p>
            <button className="mt-4 btn btn-md">Learn More...</button>
          </div>
          <ImageSlider images={Images} />
        </div>
        {/* User data */}
        <div className="h-[380px] w-1/5 flex flex-col justify-around gap-y-2 px-1 ">
          <div className="bg-[#E3F0FF] h-[150px] rounded p-4">
            <div className="flex gap-3">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z"
                        fill="#1a2a3c"
                      />{" "}
                    </g>
                  </svg>
                </div>
              </div>
              <p className="text-[#021431]">
                Hi, user <br />
                let’s get started
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-between mt-2">
              <button className="btn btn-sm btn-primary">Register</button>
              <button className="btn btn-sm btn-outline btn-primary">
                Login
              </button>
            </div>
          </div>
          <div className="bg-[#F38331] h-[100px] rounded p-4 text-slate-100">
            <p className="w-[160px] text-base font-medium">
              Get US $10 off with a new supplier
            </p>
          </div>
          <div className="bg-[#54bcc3] h-[100px] rounded p-4 text-slate-100">
            <p className="w-[150px] text-base font-medium">
              Send quotes with supplier preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
