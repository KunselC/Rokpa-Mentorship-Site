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
    <section className="py-12 px-4 bg-rokpa-beige">
      <div className="container mx-auto text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 font-cinzel-decorative"
        >
          What is Rokpa?
        </Typography>
        <Tabs value="what-is-rokpa" className="mt-8">
          <TabsHeader className="flex justify-center">
            <Tab value="what-is-rokpa">WHAT IS ROKPA</Tab>
            <Tab value="our-mission">OUR MISSION</Tab>
            <Tab value="our-values">OUR VALUES</Tab>
            <Tab value="our-work">OUR WORK</Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value="what-is-rokpa">
              <Typography className="text-gray-600 font-sans">
                Rokpa is a mentorship organization dedicated to empowering
                Tibetan youth through academic, professional, and cultural
                enrichment.
              </Typography>
            </TabPanel>
            <TabPanel value="our-mission">
              <Typography className="text-gray-600 font-sans">
                Our mission is to provide mentorship and resources that enable
                Tibetan youth to achieve their full potential.
              </Typography>
            </TabPanel>
            <TabPanel value="our-values">
              <Typography className="text-gray-600 font-sans">
                We value community, cultural heritage, and the pursuit of
                excellence in all endeavors.
              </Typography>
            </TabPanel>
            <TabPanel value="our-work">
              <Typography className="text-gray-600 font-sans">
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
