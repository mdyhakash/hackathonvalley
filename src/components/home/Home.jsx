import HackathonList from "@/components/home/HackathonList";
import Hero from "./Hero";
import FeaturedHackathons from "./FeaturedHackathons";
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
