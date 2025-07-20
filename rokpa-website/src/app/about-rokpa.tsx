"use client";

import React from "react";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function AboutRokpa() {
  return (
    <section className="py-12 px-4 bg-rokpa-beige relative">
      {/* Decorative accent shape */}
      <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-rokpa-yellow rounded-full opacity-30 blur-2xl z-0" />
      <div className="container mx-auto text-center relative z-10">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 font-cinzel-decorative"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          What is Rokpa?
        </Typography>
        <Tabs value="what-is-rokpa" className="mt-8">
          <TabsHeader
            className="flex justify-center"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <Tab
              value="what-is-rokpa"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              WHAT IS ROKPA
            </Tab>
            <Tab
              value="our-mission"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              OUR MISSION
            </Tab>
            <Tab
              value="our-values"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              OUR VALUES
            </Tab>
            <Tab
              value="our-work"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              OUR WORK
            </Tab>
          </TabsHeader>
          <TabsBody
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <TabPanel value="what-is-rokpa">
              <Typography
                className="text-gray-600 font-sans"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Rokpa is a mentorship organization dedicated to empowering
                Tibetan youth through academic, professional, and cultural
                enrichment.
              </Typography>
            </TabPanel>
            <TabPanel value="our-mission">
              <Typography
                className="text-gray-600 font-sans"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Our mission is to provide mentorship and resources that enable
                Tibetan youth to achieve their full potential.
              </Typography>
            </TabPanel>
            <TabPanel value="our-values">
              <Typography
                className="text-gray-600 font-sans"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                We value community, cultural heritage, and the pursuit of
                excellence in all endeavors.
              </Typography>
            </TabPanel>
            <TabPanel value="our-work">
              <Typography
                className="text-gray-600 font-sans"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Our work includes mentorship programs, cultural events, and
                professional development workshops.
              </Typography>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
}
