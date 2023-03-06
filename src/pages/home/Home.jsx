import { useEffect, useContext } from "react";
import { Contextprovider } from "../../context/Generalprovider";
import Carousel from "../../components/Carousel/Carousel";
import Choice from "../../components/choice/Choice";
import Footer from "../../components/footer/Footer";
import Header from "../../components/heder/Header";
import Join from "../../components/Join/Join";
import Nav from "../../components/nav/Nav";
import Property from "../../components/Propery/Property";

import Rentbuy from "../../Hooks/Rentbuy";

const Home = () => {
  const { Buy, loading, data } = Rentbuy();

  useEffect(() => {
    Buy("for-rent");
  }, []);

  return (
    <>
      {/* <img src="https://bayut-production.s3.eu-central-1.amazonaws.com/image/269076661/e226b716a0744812924d60acd39147f8" /> */}
      <Header />
      <Choice />
      <Property />

      <Carousel />

      <Join />

      <Footer />
    </>
  );
};

export default Home;
