import React from "react";
import Title from "../components/title";
import {
  Html5Icon,
  JavascriptIcon,
  MongodbIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SveltekitIcon,
  TailwindIcon,
  TypescriptIcon,
  ExpressIcon,
  FirebaseIcon,
  MysqlIcon,
} from "../components/icons";

function Home() {
  return (
    <>
      <Title description="18 year old web developer. based in Lombok, Indonesia. currently studying at Udayana University.">
        Abdurrazik
      </Title>

      <div className="h-screen overflow-hidden text-[#282828] flex flex-col">
        <nav className="p-4">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            <a
              href="mailto:contact@razik.my.id/"
              className="flex items-center justify-center space-x-2 hover:text-black transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span className="md:text-lg">Get in touch</span>
            </a>
            <ul className="flex items-center justify-center space-x-2">
              <li>
                <a href="https://www.linkedin.com/in/razikdontcare" className="hover:text-black transition-all">
                  Linked In
                </a>
              </li>
              <span className="font-bold">/</span>
              <li>
                <a href="https://www.instagram.com/razikdontcare" className="hover:text-black transition-all">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center space-y-5">
          <img
            src="/dp.jpg"
            alt="Profile Picture of Abdurrazik"
            className="rounded-full w-48 h-48"
          />
          <h1 className="font-medium text-2xl">Abdurrazik</h1>
          <h2 className="font-medium text-3xl md:text-6xl max-w-xs md:max-w-2xl text-center">
            Sculpting Digital Experiences with Code.
          </h2>
          <a
            href="/projects"
            className="px-7 py-4 md:px-8 md:py-5 bg-[#282828] text-white flex items-center justify-center text-lg md:text-xl font-medium space-x-2 rounded-xl hover:scale-90 transition-all"
          >
            <span>Latest Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="py-8 md:p-8 bg-[#282828]">
        <div className="max-w-xs md:max-w-6xl container mx-auto flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-0 md:space-x-5 md:space-y-0">
          <Html5Icon className="w-16 h-16 md:w-20 md:h-20" />
          <JavascriptIcon className="w-16 h-16 md:w-20 md:h-20 rounded" />
          <TypescriptIcon className="w-16 h-16 md:w-20 md:h-20 rounded" />
          <NodejsIcon className="w-16 h-16 md:w-20 md:h-20" />
          <TailwindIcon className="w-16 h-16 md:w-20 md:h-20" />
          <ReactIcon className="w-16 h-16 md:w-20 md:h-20" />
          <NextjsIcon className="w-16 h-16 md:w-20 md:h-20" />
          <SveltekitIcon className="w-16 h-16 md:w-20 md:h-20" />
          <MongodbIcon className="h-16 md:h-20" />
          <FirebaseIcon className="w-16 h-16 md:w-20 md:h-20" />
          <MysqlIcon className="w-16 h-16 md:w-20 md:h-20" />
          <ExpressIcon className="w-16 h-16 md:w-20 md:h-20 bg-white p-1 rounded" />
        </div>
      </div>

      <div className="h-screen overflow-hidden">
        <div className="h-full md:container md:mx-auto md:max-w-6xl flex flex-col items-center justify-center space-y-5">
          <h2 className="font-medium text-4xl md:text-6xl text-[#282828]">
            Experiences
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
            <div className="p-3 rounded-xl flex flex-col items-center md:h-[22rem] md:w-80 bg-[#282828] text-white text-xl">
              <h3 className="font-bold">2020 - 2021</h3>
              <ul className="list-disc text-sm md:text-base font-medium max-w-[18rem] pl-7 p-3">
                <li>
                  Member of Technology Division of OSIS Bersinar SMAN 1 Gerung
                </li>
                <li>Design Graphic Committee on HUT 37 SMAN 1 Gerung</li>
                <li>Design Graphic Committee on PGRI SMAN 1 Gerung</li>
                <li>Design Graphic Committee on Class Meeting SMAN 1 Gerung</li>
              </ul>
            </div>
            <div className="p-3 rounded-xl flex flex-col items-center md:h-[22rem] md:w-80 bg-[#282828] text-white text-xl">
              <h3 className="font-bold">2020 - 2021</h3>
              <ul className="list-disc text-sm md:text-base font-medium max-w-[18rem] pl-7 p-3">
                <li>Fullstack Web Developer of OSIS Bersinar SMAN 1 Gerung</li>
                <li>
                  Design Graphic Committee on Bazaar Ramadhan SMAN 1 Gerung
                </li>
                <li>Media and Documentation Committee on MPLS SMAN 1 Gerung</li>
              </ul>
            </div>
            <div className="p-3 rounded-xl flex flex-col items-center md:h-[22rem] md:w-80 bg-[#282828] text-white text-xl">
              <h3 className="font-bold">2020 - 2021</h3>
              <ul className="list-disc text-sm md:text-base font-medium max-w-[18rem] pl-7 p-3">
                <li>Front End Web Developer of Wannabe Creative</li>
                <li>Back End Web Developer of Wannabe Creative</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen overflow-hidden flex flex-col">
        <div className="flex-1 container mx-auto max-w-6xl flex flex-col items-center justify-center space-y-10">
          <h2 className="font-medium text-3xl md:text-6xl text-[#282828] max-w-xs md:max-w-2xl text-center">
            Interested in making a project with me?
          </h2>
          <a
            href="mailto:contact@razik.my.id"
            className="px-8 py-5 bg-[#282828] text-white flex items-center justify-center text-xl font-medium space-x-2 hover:scale-90 transition-all"
          >
            <span>Get In Touch</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </a>
        </div>
        <footer className="p-4 text-[#282828]">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            <span className="flex items-center justify-center">
              <span className="text-sm md:text-lg">
                &copy; 2023 - All Rights Reserved
              </span>
            </span>
            <ul className="flex items-center justify-center space-x-2 text-sm md:text-base">
              <li>
                <a href="https://www.linkedin.com/in/razikdontcare" className="hover:text-black transition-all">
                  Linked In
                </a>
              </li>
              <span className="font-bold">/</span>
              <li>
                <a href="https://www.instagram.com/razikdontcare" className="hover:text-black transition-all">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
