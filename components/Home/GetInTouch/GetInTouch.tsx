import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base">
            {" "}
            04.
          </span>
          <span className=" font-sans text-AAsecondary text-base">
            What&apos;s Next?
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        I&apos;m currently looking for Software Engineering opportunities based
        in the <span className="text-AAsecondary">United States.</span> Please
        feel free to reach out if you&apos;re looking for a developer, have a
        question, or just want to connect.
      </p>
      <div className="pt-4">
        <a
          href="mailto:vishal23dps@gmail.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            Say Hello
          </button>
        </a>
      </div>
    </div>
  );
}
