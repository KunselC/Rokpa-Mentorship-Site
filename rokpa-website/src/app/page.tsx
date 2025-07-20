// "use client";

// components
import { Footer } from "@/components";

// sections
import Hero from "./hero";
import AboutRokpa from "./about-rokpa";
import RokpaScholarsHighlight from "./rokpa-scholars-highlight";
import OrganizationsWorkedWith from "./organizations-worked-with";
import GetInvolvedSection from "./get-involved-section";

export default function Page() {
  return (
    <>
      {/* Navbar is included globally via Layout */}
      <Hero />
      <AboutRokpa />
      <GetInvolvedSection />
      <RokpaScholarsHighlight />
      <OrganizationsWorkedWith />
      {/* TODO: Add a Latest News/Events section here in the future */}
      <Footer />
    </>
  );
}
