import React from "react";
import TopSec from "./section/TopSec";
import Brands from "./section/Brands";
import PortfolioSec from "./section/PortfolioSec";
import FaqSec from "@/components/FaqSec";


const Portfolio = () => {
  return (
    <>
      <TopSec />
      <PortfolioSec />
      <section className="section">
        <FaqSec />
      </section>


      <Brands />
    </>
  );
};

export default Portfolio;
