"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const SPONSORS = [
  // Need to put images in public folder for the logos to be displayed
  { name: "Yinda Yin", logo: "/logos/logo-yinda-yin.svg" },
  { name: "Ngatso", logo: "/logos/logo-ngatso.svg" },
  { name: "Machik", logo: "/logos/logo-machik.svg" },
  { name: "The Yak Hustle", logo: "/logos/logo-the-yak-hustle.svg" },
  { name: "Project Yeti", logo: "/logos/logo-project-yeti.svg" },
  { name: "TCNYNJ", logo: "/logos/logo-tcnynj.svg" },
  { name: "GTPN", logo: "/logos/logo-gtpn.svg" },
  { name: "SFT", logo: "/logos/logo-sft.svg" },
  { name: "ICT", logo: "/logos/logo-ict.svg" },
];

export function SponsoredBy() {
  return (
    <section className="py-16 px-8 lg:py-24 bg-gray-100">
      <div className="container mx-auto text-center">
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-8 font-semibold"
        >
          Organizations We Have Worked With
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {SPONSORS.map((sponsor, key) => (
            <div
              key={key}
              className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg"
            >
              <Image
                width={128}
                height={128}
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
