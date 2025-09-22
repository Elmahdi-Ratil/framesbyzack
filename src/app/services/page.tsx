import React from "react";
import TopSec from "./Sections/TopSec";
import ServicesIntroSec from "./Sections/ServicesIntroSec";
import Divider from "@/components/Divider";
import PricingSec from "./Sections/PricingSec";
import {
  servicePriceItems,
  servicePriceItemsSecond,
  servicePriceItemsThird,
  serviceExtraOptions,
  serviceNotes,
} from "@/data/data";
import ServicesCard from "@/components/ServicesCard";

const Services = () => {
  return (
    <>
      <TopSec />
      <ServicesIntroSec
        title="Portrait Photography"
        image="/images/services-banner-1.png"
        description="Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story."
      />

      <Divider />
      {/* pricing section */}
      <section className="section">
        <div className="container grid gap-12">
          {servicePriceItems.map((item) => (
            <div className="grid lg:grid-cols-[0.4fr_1fr] gap-10" key={item.id}>
              <div>
                <PricingSec
                  key={item.id}
                  subtitle={item.subtitle}
                  prices={item.prices}
                />
              </div>
              <div>
                {item.texts.map((item, index) => (
                  <ServicesCard key={index} label={item.text} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />
      <ServicesIntroSec
        title="Events Photography"
        description="Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day."
        image="/images/services-banner-2.png"
      />

      <Divider />
      {/* pricing section */}
      <section className="section">
        <div className="container grid gap-12">
          {servicePriceItemsSecond.map((item) => (
            <div className="grid lg:grid-cols-[0.4fr_1fr] gap-10" key={item.id}>
              <div>
                <PricingSec
                  key={item.id}
                  subtitle={item.subtitle}
                  prices={item.prices}
                />
              </div>
              <div>
                {item.texts.map((item, index) => (
                  <ServicesCard key={index} label={item.text} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />
      <ServicesIntroSec
        title="Commercial Photography"
        description="In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience."
        image="/images/services-banner-3.png"
      />

      {/* pricing section */}
      <section className="section">
        <div className="container grid gap-12">
          {servicePriceItemsThird.map((item) => (
            <div className="grid lg:grid-cols-[0.4fr_1fr] gap-10" key={item.id}>
              <div>
                <PricingSec
                  key={item.id}
                  subtitle={item.subtitle}
                  prices={item.prices}
                />
              </div>
              <div>
                {item.texts.map((item, index) => (
                  <ServicesCard key={index} label={item.text} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />
      {/* Extra Options */}
      <section className="py-8">
        <div className="container">
          <h2 className="text-xl font-semibold mb-4">⚡ Extra Options</h2>
          <div className="grid gap-3">
            {serviceExtraOptions.map((opt, index) => (
              <ServicesCard
                key={index}
                label={`${opt.option} — ${opt.price} €`}
              />
            ))}
          </div>
        </div>
      </section>

      <Divider />
      {/* Notes */}
      <section className="py-8">
        <div className="container text-center">
          <h2 className="text-xl font-semibold mb-4">📌 Notes</h2>
          <div className="grid gap-3">
            {serviceNotes.map((note, index) => (
              <ServicesCard key={index} label={note.note} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
