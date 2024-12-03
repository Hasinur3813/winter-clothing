import { useEffect } from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import BecomeVolunteer from "../components/BecomeVolunteer";
import DonationImpact from "../components/DonationImpact";
import HowItWorks from "../components/HowItWorks";
import AOS from "aos";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <Banner />
      <About />
      <HowItWorks />
      <DonationImpact />
      <BecomeVolunteer />
    </>
  );
};

export default Homepage;
