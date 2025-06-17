"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const LOGOS = [
  { src: "/image/assets/Logos/YindaYin.png", alt: "Yinda Yin" },
  { src: "/image/assets/Logos/Ngatso.png", alt: "Ngatso" },
  { src: "/image/assets/Logos/Machik.png", alt: "Machik" },
  { src: "/image/assets/Logos/TheYakHustle.png", alt: "The Yak Hustle" },
  { src: "/image/assets/Logos/ProjectYeti.png", alt: "Project Yeti" },
  { src: "/image/assets/Logos/TCNYNJ.png", alt: "TCNYNJ" },
  { src: "/image/assets/Logos/GTPN.png", alt: "GTPN" },
  { src: "/image/assets/Logos/SFT.png", alt: "SFT" },
  { src: "/image/assets/Logos/ICT.png", alt: "ICT" },
];

export default function OrganizationsWorkedWith() {
  return (
    <section className="py-12 px-4 bg-rokpa-beige">
      <div className="container mx-auto text-center">
        <Typography
          variant="h2"
          className="mb-12 font-cinzel-decorative text-rokpa-dark-red"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Organizations We've Collaborated With
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {LOGOS.map((logo, index) => (
            <div
              key={index}
              className="w-40 h-20 flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={logo.src} // Ensure these paths are correct and images exist
                alt={logo.alt}
                width={120} // Adjusted width for better display
                height={60} // Adjusted height for better display
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <Typography
          variant="paragraph"
          className="text-gray-600 mt-10 mx-auto max-w-3xl"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Rokpa is proud to partner with a diverse range of organizations to
          expand our reach and impact. These collaborations are vital to our
          mission of supporting Tibetan youth.
        </Typography>
      </div>
    </section>
  );
}
