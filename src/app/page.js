import React from "react";

import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/Feature-Cards";
import Faq from "@/components/Faq";
import Cta from "@/components/cta";
import TestimonialCarousel from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <div className="relative container mx-auto px-4 pt-16 pb-16">
        <HeroSection />
        <FeatureCards />
        <TestimonialCarousel />
        <Faq />
        <Cta />
      </div>
    </>
  );
}
