import React, { useEffect } from "react";
import Banner from "./Banner";
import Event from "./Event";
import axios from "axios";

const Home = () => {
  console.log("hello");
  return (
    <div className="flex-shrink-0">
      <div className="container">
        <Banner />
        <Event />
      </div>
    </div>
  );
};

export default Home;
