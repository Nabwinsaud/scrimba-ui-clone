import React from "react";

// const navData = [
//   {
//     name: "Plan & pricing",
//     redirect:"/plan"
//   },
// ];
const Footer = () => {
  return (
    <>
      <section className="w-full min-h-[20vh] mt-10 mb-3">
        <footer className="grid sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col ">
            <h2 className="text-[1rem] font-bold capitalize mt-2">Scrimba</h2>
            <div className="flex flex-col">
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">
                  Plans & Pricing
                </p>
              </li>
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">
                  Gift membership{" "}
                </p>
              </li>
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">
                  {" "}
                  Scholarship Program
                </p>
              </li>
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">
                  Teacher talent program{" "}
                </p>
              </li>
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">
                  Hire p React developer
                </p>
              </li>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[1rem] font-bold capitalize mt-2">Community</h2>
            <div className="flex flex-col">
              <li className="list-none pt-4">
                <p className="hover:cursor-pointer hover:underline">
                  Explore the community
                </p>
              </li>
              <li className="list-none pt-4">
                <p className="hover:cursor-pointer hover:underline">
                  community handbook
                </p>
              </li>
              <li className="list-none pt-4">
                <p className="hover:cursor-pointer hover:underline">Poscast</p>
              </li>
              <li className="list-none pt-4">
                <p className="hover:cursor-pointer hover:underline">Youtube</p>
              </li>
              <li className="list-none pt-4">
                <p className="hover:cursor-pointer hover:underline">Blog</p>
              </li>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[1rem] font-bold capitalize mt-2">Courses</h2>
            <div className="flex-flex-col">
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">
                  All courses
                </p>
              </li>
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">
                  Free courses
                </p>
              </li>
              <li className="list-none pt-4">
                <p>Pro courses</p>
              </li>
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">
                  Frontend path
                </p>
              </li>
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">
                  Self-placed Bootcamp
                </p>
              </li>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[1rem] font-bold capitalize mt-2">Comapany</h2>
            <div className="flex flex-col">
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">About us</p>
              </li>
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">Career</p>
              </li>
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">
                  Support center
                </p>
              </li>
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">Terms</p>
              </li>
              <li className="pt-4 list-none">
                <p className="hover:cursor-pointer hover:underline">Privacy</p>
              </li>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
