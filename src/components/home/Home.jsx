import HackathonList from "@/components/home/HackathonList";
import FeaturedHackathons from "./FeaturedHackathons";
import Hero from "./Hero";
import TeamMembers from "./TeamMember";

const Home = () => {
  return (
    <div>
      <Hero />
      
      <HackathonList />
      <FeaturedHackathons/>
      <TeamMembers/>
    </div>
  );
};

export default Home;
