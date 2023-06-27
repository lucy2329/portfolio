import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Akamai() {
  const tasks = [
    {
      text: "Led the development of a high performance parallel infrastructure for the Akamai Marketplace, increasing the end-to-end performance by 10x",
      keywords: ["10x", "high performance"],
    },
    {
      text: "Engineered an innovative Java workflow to efficiently parse, structure and evaluate over 8000 product rules in less than 2s",
      keywords: ["8000 product rules", "Java workflow"],
    },
    {
      text: "Spearheaded the development and AWS cloud deployment of the Intake project, responsible for simplifying and automating the \
      process of creating tickets on JIRA for over 30 business teams across the organization \
      ",
      keywords: ["AWS", "JIRA", "30 business teams"],
    },
    {
      text: "Optimized existing bulk API SQL queries by leveraging join and aggregate operations to efficiently run on the Oracle database",
      keywords: ["join and aggregate", "Optimized", "30 business teams"],
    },
    {
      text: "Designed and developed bulk APIs using the Spring Framework to scale the end-to-end product trial and purchase flows for SSL\
      Certificates on Akamai’s marketplace",
      keywords: ["Spring", "SSL Certificates"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer{" "}
            <span className="text-AAsecondary">@ Marketplace Team</span>
          </span>
          {/* Date */}
          <span className="font-mono text-sm text-gray-500">
            July 2021 - August 2022
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
