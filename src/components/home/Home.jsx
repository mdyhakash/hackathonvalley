import HackathonList from "@/components/home/HackathonList";
import FeaturedHackathons from "./FeaturedHackathons";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      
      <HackathonList />
      <FeaturedHackathons/>
    </div>
  );
};

export default Home;
