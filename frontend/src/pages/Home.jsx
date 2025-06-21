import Delicious from "../Delicious";
import Gallery from "../components/workpratices/Gallery";
import TeamSection from "../components/workpratices/TeamSection";
import Dinning from "../Dinning";
import Foods1 from "../components/workpratices/Foods1";
import Dinners from "../components/workpratices/Dinners";
import PreFooterSection from "../components/workpratices/PreFooterSection";

const Home = () => {
  return (
    <div>
      <Delicious />
      <Gallery />
      <TeamSection />
      <Dinning />
      <Foods1 />
      <Dinners />
      <PreFooterSection />
    </div>
  );
};

export default Home;
