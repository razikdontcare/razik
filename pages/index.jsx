import React, { useEffect, useState } from "react";
import Head from "next/head";
import { AiOutlineLink } from "react-icons/ai";
import {BsInstagram} from 'react-icons/bs'

function Home() {
  return (
    <>
      <Head>
        <title>Razik</title>
        <link rel="shortcut icon" href="/dp.jpg" type="image/x-icon" />
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
            <span className="col-auto text-sm">{"Pelajar/Mahasiswa"}</span>
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
          <h2 className="font-bold text-xl">Latest Project</h2>
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

        <footer className="footer footer-center p-10 text-base-content rounded">
          <div>
            <div className="grid grid-flow-col gap-4">
              <a className="w-[50px]" href="https://www.instagram.com/razikdontcare">
                <BsInstagram size={70} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
