import React from "react";
import Delicious from "../Delicious";
import Gallery from "../components/workpratices/Gallery";
import TeamSection from "../components/workpratices/TeamSection";
import Dinning from "../Dinning";
import Foods1 from "../components/workpratices/Foods1";
import Dinners from "../components/workpratices/Dinners";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Delicious />
      <Gallery />
      <TeamSection />
      <Dinning />
      {/* <Foods/> */}
      <Foods1 />
      <Dinners />
      <Contact />
    </div>
  );
};

export default Home;
