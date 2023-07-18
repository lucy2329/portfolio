import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Dystopia() {
  const tasks = [
    {
      text: "Mentored a group of 4 to develop an SOS application that assists in rescuing injured and malnourished animals",
      keywords: ["Mentored", "SOS application"],
    },
    {
      text: "Developed an end-to-end Android application using Java and Firebase which allows users to report the location of animals in need and request help from nearby volunteers",
      keywords: ["Java", "Firebase", "Android application"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Android Developer &amp; Mentor{" "}
            <span className="text-AAsecondary">@ Dystopia</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            June - August 2021
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
