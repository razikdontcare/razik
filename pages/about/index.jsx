import React from "react";
import Title from "../../components/title";

function About() {
  return (
    <>
      <Title description="18 year old web developer. based in Lombok, Indonesia. currently studying at Udayana University.">
        Abdurrazik | About
      </Title>

      <div className="min-h-screen overflow-hidden text-[#282828] flex flex-col">
        <nav className="p-4">
          <div className="container mx-auto max-w-6xl flex items-center justify-center">
            <a
              href="/"
              className="flex items-center justify-center space-x-2 hover:text-black transition-all"
            >
              <span className="md:text-lg hover:underline">
                Back to Homepage
              </span>
            </a>
          </div>
        </nav>
        <div className="mt-10 mb-20 flex-1 py-5 md:py-0 flex flex-col items-center justify-center space-y-10 max-w-xs md:max-w-3xl container mx-auto">
          <div className="flex flex-col justify-center space-y-2">
            <h1 className="font-bold text-4xl text-center">
              My Journey Into Web Development!
            </h1>
            <p className="text-lg text-justify">
              I'm Abdurrazik, a 19-year-old web developer living in Lombok,
              Indonesia. I'm currently studying my first semester of college at
              Udayana University in Bali, working towards my degree in computer
              science. As a self-taught programmer, I have spent 6 years
              learning web development and specialize in JavaScript and web
              development.
            </p>
            <p className="text-lg text-justify">
              As a self-taught coder since 7th grade, I'm eager to leverage my
              computer science degree to further evolve my development skills in
              areas like JavaScript, back-end programming, databases, and more.
              I specialize in developing responsive websites, apps, and other
              web solutions.
            </p>
            <p className="text-lg text-justify">
              In school, I stay involved in several student organizations where
              I've developed essential leadership, collaboration, and critical
              thinking abilities. I also apply my problem-solving mindset to
              creative pursuits like photography, videography, and motion
              graphics.
            </p>
            <p className="text-lg text-justify">
              When I'm not coding, you can find me reading to expand my
              knowledge or watching YouTube videos to relax. I also enjoy
              tinkering with gadgets and staying up-to-date on the latest tech
              trends.
            </p>
            <h2 className="font-medium pt-2 text-2xl">Background and Skills</h2>
            <p className="text-lg text-justify">
              I first started teaching myself how to code back in 7th grade. I
              began with basic HTML and CSS before moving on to more complex
              programming languages like JavaScript. Over the years, I've worked
              on personal projects to hone my skills in front-end development,
              back-end functionality, databases, and more.
            </p>
            <p className="text-lg text-justify">
              While I still have more to learn, I'm proud of my self-motivated
              and scrappy approach to web programming. I look forward to seeing
              how my skills progress in college and beyond.
            </p>
            <h2 className="font-medium pt-2 text-2xl">Hobbies and Interests</h2>
            <p className="text-lg text-justify">
              Outside of web development, I enjoy photography and motion
              graphics design, allowing me to be creative in new ways visually.
              For photography, I like to capture unique perspectives of
              landscapes, architecture, and portraits of people in my community.
              For motion graphics, I design engaging animated social media posts
              and videos.
            </p>
            <p className="text-lg text-justify">
              I also stay curious by reading non-fiction books/articles on
              science, personal growth, and digital media. To relax, I watch
              YouTube videos encompassing everything from gaming streams to tech
              product reviews.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
