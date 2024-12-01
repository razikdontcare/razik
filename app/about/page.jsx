import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: "Learn more about me and my journey into web development.",
};

function About() {
  return (
    <>
      <div className="min-h-screen overflow-hidden text-[#282828] flex flex-col">
        <nav className="p-4">
          <div className="container mx-auto max-w-6xl flex items-center justify-center">
            <Link
              href="/"
              className="flex items-center justify-center space-x-2 hover:text-black transition-all"
            >
              <span className="md:text-lg hover:underline">
                Back to Homepage
              </span>
            </Link>
          </div>
        </nav>
        <div className="mt-10 mb-20 flex-1 py-5 md:py-0 flex flex-col items-center justify-center space-y-10 max-w-xs md:max-w-3xl container mx-auto">
          <div className="flex flex-col justify-center space-y-2">
            <h1 className="font-bold text-4xl text-center">
              My Journey Into Web Development!
            </h1>
            <p className="text-lg text-justify">
              Hey there! I’m Abdurrazik, a 19-year-old web developer hailing
              from the beautiful island of Bali, Indonesia. I’m kicking off my
              first semester at Udayana University in Bali, diving headfirst
              into the world of computer science. As a self-taught coder with
              six years under my belt, I’ve become quite the JavaScript and web
              development enthusiast.
            </p>
            <h2 className="font-medium pt-2 text-2xl">
              Development Journey and Skills
            </h2>
            <p className="text-lg text-justify">
              My coding adventure began in 7th grade when I decided to dive into
              the world of HTML and CSS. Since then, I’ve leveled up my skills
              to tackle more complex languages like JavaScript. I’ve been on a
              mission to master front-end development, back-end programming,
              databases, and more. I love crafting responsive websites, apps,
              and all sorts of web solutions.
            </p>
            <p className="text-lg text-justify">
              Lately, I’ve been bitten by the mobile development bug and am
              eagerly learning Flutter to create awesome cross-platform mobile
              apps.
            </p>
            <h2 className="font-medium pt-2 text-2xl">
              Academic and Extracurricular Involvement
            </h2>
            <p className="text-lg text-justify">
              At Udayana University, I’m not just hitting the books. I’m also
              jumping into student organizations, where I’m sharpening my
              leadership, collaboration, and critical thinking skills. My
              problem-solving superpowers also come in handy for creative
              pursuits like photography, videography, and motion graphics.
            </p>
            <h2 className="font-medium pt-2 text-2xl">Hobbies and Interests</h2>
            <p className="text-lg text-justify">
              When I’m not buried in code, you’ll find me behind a camera lens,
              capturing cool landscapes, stunning architecture, and vibrant
              portraits of people in my community. I also love creating animated
              content that pops on social media.
            </p>
            <p className="text-lg text-justify">
              I’m a bookworm too, especially when it comes to non-fiction about
              science, personal growth, and digital media. To chill out, I
              binge-watch YouTube videos on everything from gaming streams to
              tech product reviews. I also love tinkering with gadgets and
              staying on top of the latest tech trends.
            </p>
            <h2 className="font-medium pt-2 text-2xl">Future Aspirations</h2>
            <p className="text-lg text-justify">
              Even though I’m just starting my college journey, I’m super
              excited to level up my development skills even further and always
              trying new things. I can’t wait to dive deeper into JavaScript,
              back-end programming, databases, and my new passion, mobile
              development with Flutter. My self-taught, can-do attitude has
              gotten me this far, and I’m pumped to see where my skills and
              experiences will take me next.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
