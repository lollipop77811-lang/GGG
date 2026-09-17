import React from "react";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import About from "../components/About";
import Countries from "../components/Countries";
import JobCategories from "../components/JobCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Countries />
      <JobCategories />
      <WhyChooseUs />
      <Process />
      <Contact />
    </>
  );
}
