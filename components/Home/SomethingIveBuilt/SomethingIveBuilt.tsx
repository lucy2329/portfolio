import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import { getTasksTextWithHighlightedKeyword } from "../WhereIHaveWorked/Descriptions/taskAndType";

export default function SomethingIveBuilt() {
  const router = useRouter();
  const tasksCC = [
    {
      text: "  Devised an orchestrator service that delivers a fault-tolerant, highly-available database as a service on AWS cloud using REST\
      APIs and Docker containers",
      keywords: [
        "orchestrator service",
        "fault-tolerant, highly-available",
        "Docker",
      ],
    },
    {
      text: "Enhanced the application with 3 EC2 instances, effective load balancing, microservices, and scale-in-scale-out capabilities for\
      scalability and high availability",
      keywords: ["load balancing", "scale-in-scale-out"],
    },
  ];
  const tasksBD = [
    {
      text: " Developed a SQL query engine similar to Meta’s Hive by creating dynamic Java MapReduce jobs for efficient retrieval of data\
      on the Hadoop Distributed File System (HDFS)\
      ",
      keywords: ["SQL query engine", "Hive", "Hadoop"],
    },
    {
      text: "Implemented a query engine to map standard SQL queries to MapReduce jobs at runtime for processing large streams (order of TBs) of data\
      present across multiple HDFS nodes in a scalable manner",
      keywords: ["query engine", "large streams", "multiple HDFS nodes"],
    },
  ];
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28">
        {/* // ?  Project 1 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://github.com/lucy2329/CC-FullStack"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/project-images/DbaaS.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded pt-16 px-12`}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/project-images/DbaaS.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a href={"https://github.com/lucy2329/CC-FullStack"}>
                  <span className=" md:text-gray-200 text-AAsecondary capitalize font-bold text-xl hover:cursor-pointer">
                    Scalable Cloud app for rideshare
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <div className="flex flex-col space-y-4 sm:text-sm text-xs">
                  {/* Tasks Description 1 */}
                  {tasksCC.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-row space-x-1">
                        <ArrowIcon
                          className={" h-5 w-4 text-AAsecondary flex-none"}
                        />
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
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">Flask</span>
                <span className="pr-4 z-10">Kubernetes</span>
                <span className="pr-4 z-10">ZooKeeper</span>
                <span className="pr-4 z-10">AWS</span>
                <span className="pr-4 z-10">SQL</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/lucy2329/CC-FullStack" />
                <a
                  href="https://ubiquitous-bublanina-da84ec.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  2*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"https://github.com/lucy2329/MiniHive"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src={"/project-images/hive.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full`}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-100 z-10"></div>
                <Img
                  src={"/project-images/hive.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={"https://github.com/lucy2329/MiniHive"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    MiniHIVE
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <div className="flex flex-col space-y-4 sm:text-sm text-xs">
                  {/* Tasks Description 1 */}
                  {tasksBD.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-row space-x-1">
                        <ArrowIcon
                          className={" h-5 w-4 text-AAsecondary flex-none"}
                        />
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
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">Flask</span>
                <span className="pr-4 z-10">Kubernetes</span>
                <span className="pr-4 z-10">ZooKeeper</span>
                <span className="pr-4 z-10">AWS</span>
                <span className="pr-4 z-10">SQL</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/lucy2329/MiniHive" />
                <ExternalLink
                  url={"https://github.com/lucy2329/MiniHive"}
                  router={router}
                />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 3 */}
        {/* <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        > */}
        {/* Left image */}
        {/* <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"/userdatapuller"}>
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img
                src={"/hackme.jpg"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div> */}

        {/* right Content */}
        {/* <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center "> */}
        {/* background for text in mobile responsive */}
        {/* <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/hackme.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div> */}

        {/* <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={"/userdatapuller"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    User Data puller
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  This project allows you to understand how easy it is to
                  identify and track your browser based on how it appears to
                  websites. Such as your
                  <span className="text-AAsecondary"> location</span>,{" "}
                  <span className="text-AAsecondary">IP Address</span>,{" "}
                  <span className="text-AAsecondary">
                    {","} software, Hardware
                  </span>{" "}
                  and some additional information with the help of cookies.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Cookies</span>
                <span className="pr-4 z-10">Google APi</span>
                <span className="pr-4 z-10">Data collecting</span>
                <span className="pr-4 z-10">IP Address</span>
                <span className="pr-4 z-10">Location</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/hktitof/DataPuller" />
                <ExternalLink url={"/userdatapuller"} router={router} />
              </div>
            </div> */}
        {/* </div>
        </div> */}

        {/* // ? Project 4 */}
        {/* <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        > */}
        {/* Left image */}
        {/* <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          > */}
        {/* <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://www.haircut.ma"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 ">
                <span className="text-AAsecondary text-xl">
                  In initiation...
                </span>
              </div>

              <Img
                src={"/haircut.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div> */}

        {/* right Content */}
        {/* <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center "> */}
        {/* background for text in mobile responsive */}
        {/* <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/haircut.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div> */}
        {/* <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
              <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">
                In initiation...
              </span>
            </div> */}
        {/* <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://www.haircut.ma"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Haircut Appointment
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  It&apos; a barber shop{" "}
                  <span className="text-AAsecondary">
                    appointment scheduling
                  </span>{" "}
                  & management software it provides{" "}
                  <span className="text-AAsecondary">online scheduling</span>,
                  appointment reminders,{" "}
                  <span className="text-AAsecondary">payments</span>, marketing,
                  and much more! Currently in the{" "}
                  <span className="text-AAsecondary">Initiation phase</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Appointment</span>
                <span className="pr-4 z-10">Management</span>
                <span className="pr-4 z-10">Scheduling</span>
                <span className="pr-4 z-10">Booking</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/hktitof/haircut" />
                <a
                  href="https://www.haircut.ma"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div> */}
        {/* </div> */}
        {/* </div> */}

        {/* // ?  Project 5 */}
        {/* <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        > */}
        {/* Left image */}
        {/* <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://github.com/hktitof/CallCenter"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/CallCenter.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div> */}

        {/* right Content */}
        {/* <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center "> */}
        {/* background for text in mobile responsive */}
        {/* <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/CallCenter.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div> */}

        {/* <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://github.com/hktitof/CallCenter"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Call Center Management System
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  A{" "}
                  <span className="text-AAsecondary">
                    JavaFX call center management system
                  </span>{" "}
                  project it is used for receiving or transmitting a large
                  volume of enquiries between the agent and the customer,it
                  handles the communication between agents & clients it can be
                  used for the both side client & agent side to handle the
                  messages and issues.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">JavaFX</span>
                <span className="pr-4 z-10">Java Concurrency</span>
                <span className="pr-4 z-10">MultiThreading</span>
                <span className="pr-4 z-10">MySQL</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/hktitof/CallCenter" />
              </div>
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
