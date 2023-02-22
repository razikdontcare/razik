import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  AiOutlineLink,
} from "react-icons/ai";

import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Head>
        <title>Abdurrazik</title>
        <link rel="shortcut icon" href="dp.jpg" type="image/x-icon" />
        <meta name="title" content="Abdurrazik" />
        <meta name="description" content="18 year old web developer. based in Lombok, Indonesia. currently studying at SMAN 1 Gerung as 3rd grade student." />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://razik.my.id/" />
        <meta property="og:title" content="Abdurrazik" />
        <meta property="og:description" content="18 year old web developer. based in Lombok, Indonesia. currently studying at SMAN 1 Gerung as 3rd grade student." />
        <meta property="og:image" content="dp.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://razik.my.id/" />
        <meta property="twitter:title" content="Abdurrazik" />
        <meta property="twitter:description" content="18 year old web developer. based in Lombok, Indonesia. currently studying at SMAN 1 Gerung as 3rd grade student." />
        <meta property="twitter:image" content="dp.jpg" />
      </Head>

      <div className="container max-w-[680px] mx-auto md:my-[2%] px-4">
        <div className="flex items-center pt-5">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="/dp.jpg" alt="Profile Picture" />
            </div>
          </div>
          <div className="mx-5 grid grid-cols-1 gap-1">
            <h1 className="font-bold col-auto text-2xl">Abdurrazik</h1>
            <span className="col-auto text-sm">Student</span>
          </div>
        </div>

        <div className="divider"></div>

        <div className="mt-5">
          <p className="mb-3">
            18 year old web developer. based in Lombok, Indonesia. currently
            studying at SMAN 1 Gerung as 3rd grade student.
          </p>
          <a
            href="mailto:contact@razik.my.id"
            className="font-bold text-lg text-cyan-600"
          >
            Contact Me!
          </a>
        </div>

        <div className="divider"></div>

        <div className="mt-5">
          <h2 className="font-bold text-2xl">Latest Project</h2>
          <div className="p-2 grid gap-2">
            <a
              href="https://sptfy.tech"
              className="link link-hover text-lg flex font-semibold items-center"
            >
              <AiOutlineLink className="mr-1" />
              sptfy.tech
            </a>
            <p className="text-sm">
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
            <a
              href="/projects"
              className="font-medium link link-hover text-cyan-700 mt-5"
            >
              more projects...
            </a>
          </div>
        </div>

        <div className="divider"></div>

        <div className="mt-5">
          <h2 className="font-bold text-2xl">Skills</h2>
          <div className="p-2 grid md:grid-cols-2 md:gap-10 gap-5">
            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-center">
                <span className="text-lg font-medium">HTML</span>
                <span className="ml-2">8.7/10</span>
              </div>
              <progress
                className="progress w-56"
                value="87"
                max="100"
              ></progress>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-center">
                <span className="text-lg font-medium">CSS</span>
                <span className="ml-2">6/10</span>
              </div>
              <progress
                className="progress w-56"
                value="60"
                max="100"
              ></progress>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-center">
                <span className="text-lg font-medium">JavaScript</span>
                <span className="ml-2">8.8/10</span>
              </div>
              <progress
                className="progress w-56"
                value="88"
                max="100"
              ></progress>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-center">
                <span className="text-lg font-medium">Video Editing</span>
                <span className="ml-2">8.5/10</span>
              </div>
              <progress
                className="progress w-56"
                value="85"
                max="100"
              ></progress>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-center">
                <span className="text-lg font-medium">Photography</span>
                <span className="ml-2">8/10</span>
              </div>
              <progress
                className="progress w-56"
                value="80"
                max="100"
              ></progress>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-center">
                <span className="text-lg font-medium">Videography</span>
                <span className="ml-2">8/10</span>
              </div>
              <progress
                className="progress w-56"
                value="80"
                max="100"
              ></progress>
            </div>

            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-center">
                <span className="text-lg font-medium">Design</span>
                <span className="ml-2">8/10</span>
              </div>
              <progress
                className="progress w-56"
                value="80"
                max="100"
              ></progress>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
