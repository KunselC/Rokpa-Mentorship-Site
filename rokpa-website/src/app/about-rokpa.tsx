"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";

export default function AboutRokpa() {
  return (
    <section className="py-12 px-4 bg-rokpa-beige">
      <div className="container mx-auto text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 font-lora"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          What is Rokpa?
        </Typography>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 shadow-lg rounded-lg bg-white flex flex-col">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-lora"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Academic Excellence
            </Typography>
            <Typography
              className="text-gray-600 font-sans flex-grow"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              We support students in their academic pursuits, providing
              resources and mentorship to excel in their studies.
            </Typography>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white flex flex-col">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-lora"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Professional Excellence
            </Typography>
            <Typography
              className="text-gray-600 font-sans flex-grow"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              We help young professionals develop their careers through
              networking, skill-building workshops, and mentorship.
            </Typography>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white flex flex-col">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-lora"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Cultural & Community Enrichment
            </Typography>
            <Typography
              className="text-gray-600 font-sans flex-grow"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              We organize events and programs that celebrate Tibetan culture and
              strengthen community bonds.
            </Typography>
          </div>
        </div>
        <Button
          variant="filled"
          color="red"
          size="lg"
          className="mt-6 bg-rokpa-deep-red hover:bg-rokpa-dark-red font-sans"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Learn More About Our Mission
        </Button>
      </div>
    </section>
  );
}
