import React from "react";
import msi from "../assets/MSI_MPG.jpg";
const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={msi} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-6xl font-bold">Brief about this project!</h1>
            <p className="py-6 text-2xl">
              That's a project that I created from scratch using ReactJS.<br /> I use the API from The Movie Database (TMDB) to get the data.<br /> I used the React Router to navigate between pages.<br /> I used the React Context to manage the state of the search bar.<br /> I used the React Hooks to manage the state of the cart.
            </p>
              <a href="https://github.com/alielabdo" className="btn btn-primary">See More projects !</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About