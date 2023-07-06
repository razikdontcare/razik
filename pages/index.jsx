import React from "react";
import Title from "../components/title";

function Home() {
  return (
    <>
      <Title description="18 year old web developer. based in Lombok, Indonesia. currently studying at Udayana University.">
        Abdurrazik
      </Title>
      
      <nav className="p-4 shadow">
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <span className="font-bold text-xl">Abdurrazik</span>
          <ul className="flex items-center justify-center font-light text-xl">
            <li><a href="#">Projects</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Home;
