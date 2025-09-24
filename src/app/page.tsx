import React from "react";
import HeroSec from "./home-sections/HeroSec";
import AboutSec from "./home-sections/AboutSec";
import ServicesSec from "./home-sections/ServicesSec";
import PortfolioSec from "./home-sections/PortfolioSec";
import FaqSec from "@/components/FaqSec";
import TestimonialsCard from "@/components/TestimonialsCard";
import Brands from "./portfolio/section/Brands";

{
  /* HOME section */
}
const Home = () => {
  return (
    <>
      {/* Hero section */}
      <HeroSec />
      {/* About section */}
      <AboutSec />
      {/* Services section */}
      <ServicesSec />
      {/* Portfolio section */}
      <PortfolioSec />

      {/* Components section */}
      {/* FAQ section */}
      <section className="section">
        <FaqSec />
      </section>
      {/* Testimonials section */}
      <section className="section">
        <TestimonialsCard />
      </section>

      {/* portfolio section */}
      {/* Brands section */}
      <Brands />
    </>
  );
};

export default Home;
