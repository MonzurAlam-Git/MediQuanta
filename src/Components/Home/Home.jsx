import { getAuth } from "firebase/auth";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Services from "./Services";
import ServicesWeOffer from "./Services/ServicesWeOffer";
import Stat from "./Stat";
import Contact from "./Contact";

const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log("user", user);

  return (
    <div className="max-w-[412]">
      {/* Banner */}
      <Banner></Banner>
      {/* Services  */}
      <Services></Services>
      <ServicesWeOffer></ServicesWeOffer>

      {/* Diff  */}
      {/* Review  */}
      <Reviews />
      {/* Timeline  */}
      {/* Stat  */}
      <Stat></Stat>
      {/* Contact  */}
      <Contact></Contact>
    </div>
  );
};

export default Home;
