"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

export default function OurTeam() {
  return (
    <section className="py-12 px-4 bg-rokpa-beige min-h-screen">
      <div className="container mx-auto max-w-5xl text-center">
        <Typography
          variant="h2"
          className="mb-8 font-cinzel-decorative text-rokpa-dark-red"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Meet the Rokpa Team
        </Typography>
        {/* Add team member cards and content here, modeled after https://rokpamentorship.org/team-2 */}
      </div>
    </section>
  );
}
