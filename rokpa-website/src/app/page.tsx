// "use client";

// components
import { Footer } from "@/components";

// sections
import Hero from "./hero";
import AboutRokpa from "./about-rokpa";
import RokpaScholarsHighlight from "./rokpa-scholars-highlight";
import OrganizationsWorkedWith from "./organizations-worked-with";

export default function Page() {
  return (
    <>
      {/* Navbar is included globally via Layout */}
      <Hero />
      <AboutRokpa />
      <RokpaScholarsHighlight />
      <OrganizationsWorkedWith />
      <Footer />
    </>
  );
}
