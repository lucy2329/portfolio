import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function AkamaiInternship() {
  const tasks = [
    {
      text: "Created a scalable Java pipeline for Akamai marketplace’s existing product and orders API, optimizing performance by 30%",
      keywords: ["optimizing performance by 30%"],
    },
    {
      text: "Migrated and enhanced the legacy AngularJS codebase to Angular 11 using TypeScript and Redux, improving performance by 30%",
      keywords: ["TypeScript and Redux", "30%"],
    },
    {
      text: "Developed an end-to-end REST-based web application for internal users to validate critical business rules",
      keywords: ["REST-based", "critical"],
    },
    {
      text: "Bolstered the application with extensive error handling and dynamic product insertion provisions to provide a seamless user experience",
      keywords: ["error handling", "user experience"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer Intern{" "}
            <span className="text-AAsecondary">@ Marketplace Team</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            June 2020 - July 2020 &amp; Jan 2021 - June 2021
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
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
