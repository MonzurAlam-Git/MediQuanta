import { getAuth } from "firebase/auth";
import Banner from "./Banner";
import Review from "./Review";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log("user", user);

  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Services  */}
      <Services></Services>
      {/* Diff  */}
      {/* Review  */}
      <Reviews />
      {/* Timeline  */}
      {/* Stat  */}
      {/* Contact  */}
    </div>
  );
};

export default Home;
