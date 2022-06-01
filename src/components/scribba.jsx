import React from "react";
import { dataBase } from "./data";
// import { introData } from "./data";
import { PlayIcon } from "@heroicons/react/solid";
import Content from "./Content";

const Scribba = () => {
  return (
    <div className="container">
      <Content />
      <div className="flex flex-col mt-5">
        <div className="flex">
          <h3 className="text-2xl text-slate-600">
            This playlist is part of{" "}
            <span className="text-sky-600 hover:cursor-pointer transition-all duration-200">
              Learn React for free{" "}
            </span>
          </h3>
        </div>
        <div className="lg:w-[900px] h-auto md:w-[700px] sm:w-[500px] border-[1px] border-slate-300 rounded-sm mt-20">
          <div className="flex justify-between border-b border-[1px] border-slate-300 items-center h-20">
            <h3 className="text-[1.1rem] font-bold text-slate-700 capitalize ">
              Build a meme generator
            </h3>
            <div className="flex flex-col text-[.8rem]">
              <p>64 lesson</p>
              <span>5 hours 7 min</span>
            </div>
          </div>
          <div>
            {/* start mapping */}
            {dataBase.map((data, indx) => {
              return (
                <>
                  <div className="flex justify-between my-2 border-b border-[1px] border-slate-300 h-14 hover:cursor-pointer hover:bg-slate-300 transition-all duration-200">
                    <div className="flex items-center space-x-4 ">
                      <div className="icon ml-4">
                        <PlayIcon className="h-8 hover:text-sky-600 hover:cursor-pointer text-slate-800" />
                      </div>
                      <div className="flex items-center" key={indx}>
                        <p className="text-[1rem] text-slate-700">
                          {/* Build a meme generator app */}
                          <span className="mr-[4px]">{indx + 1}</span>.
                          {data?.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center" key={indx}>
                      {/* <p>4:12</p> */}
                      <p className="mr-2">{data?.time}</p>
                    </div>
                  </div>
                </>
              );
            })}

            {/* end of map */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scribba;
