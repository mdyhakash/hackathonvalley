import HackathonList from "@/components/home/HackathonList";
import FeaturedHackathons from "./FeaturedHackathons";
import Hero from "./Hero";
import TeamMembers from "./TeamMember";
import TrustedOrganizations from "./TrustedOrganization";

const Home = () => {
  return (
    <div className="bg-dark">
      <Hero />
      <TrustedOrganizations />
      <HackathonList />
      <FeaturedHackathons />
      <TeamMembers />
    </div>
  );
};

export default Home;
