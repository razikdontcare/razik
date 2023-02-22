import React from "react";
import Head from "next/head";
import {
  AiOutlineLink,
  AiOutlineHome,
} from "react-icons/ai";

import Footer from '../../components/Footer'

const Projects = () => {
  return (
    <>
      <Head>
        <title>Abdurrazik | Projects</title>
        <link rel="shortcut icon" href="dp.jpg" type="image/x-icon" />
        <meta name="title" content="Abdurrazik | Projects" />
        <meta name="description" content="18 year old web developer. based in Lombok, Indonesia. currently studying at SMAN 1 Gerung as 3rd grade student." />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://razik.my.id/projects/" />
        <meta property="og:title" content="Abdurrazik | Projects" />
        <meta property="og:description" content="18 year old web developer. based in Lombok, Indonesia. currently studying at SMAN 1 Gerung as 3rd grade student." />
        <meta property="og:image" content="dp.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://razik.my.id/projects/" />
        <meta property="twitter:title" content="Abdurrazik | Projects" />
        <meta property="twitter:description" content="18 year old web developer. based in Lombok, Indonesia. currently studying at SMAN 1 Gerung as 3rd grade student." />
        <meta property="twitter:image" content="dp.jpg" />
      </Head>

      <div className="container max-w-[680px] mx-auto md:my-[2%] px-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a className="link link-hover" href="/">
                <AiOutlineHome className="mr-1" />
                Home
              </a>
            </li>
            <li>Projects</li>
          </ul>
        </div>

        <h1 className="font-bold text-3xl ml-2">Projects</h1>
        <p>Here are some of the projects that i have worked on.</p>

        <div className="divider"></div>

        <div className="grid">
          <div className="my-5">
            <a
              href="https://sptfy.tech"
              className="link link-hover font-medium text-xl flex items-center"
            >
              <AiOutlineLink className="mr-1" />
              sptfy.tech
            </a>
            <p className="text-sm my-2">
              sptfy.tech is Spotify URL Shortener to make your long Spotify link
              into a short link that you can put on your Social Media bio.
            </p>
            <div className="mockup-window border bg-base-300">
              <img
                src="/sptfytech.png"
                alt="sptfy.tech"
                className="aspect-video"
              />
            </div>

            <div className="my-5">
							<span className="font-bold text-lg">Details :</span>
							<ul className="list-none">
								<li>
									<span className="font-medium text-base">Framework: </span>
									<span>NextJS</span>
								</li>
								<li>
									<span className="font-medium text-base">UI: </span>
									<span>Tailwindcss, DaisyUI</span>
								</li>
								<li>
									<span className="font-medium text-base">Database: </span>
									<span>Firebase</span>
								</li>
							</ul>
						</div>
						
          </div>

          <div className="my-5">
            <a
              href="https://razik.studio"
              className="link link-hover font-medium text-xl flex items-center"
            >
              <AiOutlineLink className="mr-1" />
              RazikShort
            </a>
            <p className="text-sm my-2">
              RazikShort is a free and open source URL Shortener to make your
              long url into a short link.
            </p>
            <div className="mockup-window border bg-base-300">
              <img
                src="/razikshort.png"
                alt="razikshort"
                className="aspect-video"
              />
            </div>

						<div className="my-5">
							<span className="font-bold text-lg">Details :</span>
							<ul className="list-none">
								<li>
									<span className="font-medium text-base">Framework: </span>
									<span>NextJS</span>
								</li>
								<li>
									<span className="font-medium text-base">UI: </span>
									<span>ChakraUI</span>
								</li>
								<li>
									<span className="font-medium text-base">Database: </span>
									<span>Firebase</span>
								</li>
							</ul>
						</div>
          </div>
          <div className="my-5">
            <a
              href="https://radiosmanger.web.app/"
              className="link link-hover font-medium text-xl flex items-center"
            >
              <AiOutlineLink className="mr-1" />
              Radio SMANGER
            </a>
            <p className="text-sm my-2">
              Radio SMANGER is a website used by students at SMAN 1 Gerung as a medium for requesting songs which will be played on the school radio by the student council.
            </p>
            <div className="mockup-window border bg-base-300">
              <img
                src="/radiosmanger.jpg"
                alt="radiosmanger"
                className="aspect-video"
              />
            </div>

						<div className="my-5">
							<span className="font-bold text-lg">Details :</span>
							<ul className="list-none">
								<li>
									<span className="font-medium text-base">Framework: </span>
									<span>NextJS</span>
								</li>
								<li>
									<span className="font-medium text-base">UI: </span>
									<span>MUI Material</span>
								</li>
								<li>
									<span className="font-medium text-base">Database: </span>
									<span>Firebase</span>
								</li>
							</ul>
						</div>
          </div>

          <div className="divider"></div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Projects;
