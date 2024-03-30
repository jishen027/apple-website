import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
const Hightlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.5,
    });
  }, []);

  return (
    <section
      id="hightlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the Hightlights.
          </h1>
        </div>

        <div className="flex flex-wrap md:flex items-end gap-5">
          <p className="link">
            Watch the film
            <img src={watchImg} alt="watch" className="ml-2" />
          </p>
          <p className="link">
            Watch the events
            <img src={watchImg} alt="watch" className="ml-2" />
          </p>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Hightlights;
