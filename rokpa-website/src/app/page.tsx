// "use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import AboutRokpa from "./about-rokpa";
import RokpaScholarsHighlight from "./rokpa-scholars-highlight";
import OrganizationsWorkedWith from "./organizations-worked-with";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutRokpa />
      <RokpaScholarsHighlight />
      <OrganizationsWorkedWith />
      <Footer />
    </>
  );
}
