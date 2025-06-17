"use client";

import React from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";

const SCHOLARS = [
  {
    name: "Scholar 1",
    image:
      "/image/assets/Rokpa Photos/Networking Conference 2025/Copy of a.JPG",
    story:
      "A brief highlight of a scholar's journey and achievements through the Rokpa Scholars program.",
  },
  {
    name: "Scholar 2",
    image:
      "/image/assets/Rokpa Photos/Networking Conference 2025/Copy of DSC03237.JPG",
    story:
      "Discover how our dedicated mentors make a difference in the lives of young Tibetan students.",
  },
  {
    name: "Scholar 3",
    image:
      "/image/assets/Rokpa Photos/Boston College Fair 2025/Copy of IMG_4124.png",
    story:
      "Learn about the vibrant community and network that Rokpa scholars become a part of.",
  },
];

export default function RokpaScholarsHighlight() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto text-center">
        <Typography
          variant="h2"
          className="mb-8 font-cinzel-decorative text-rokpa-dark-red"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Rokpa Scholars Program
        </Typography>
        <Typography
          variant="lead"
          className="text-gray-700 mx-auto max-w-3xl font-sans"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Our flagship program connects Tibetan high school students with
          accomplished Tibetan college mentors, providing one-on-one guidance, a
          supportive community, and a wealth of resources to navigate the path
          to higher education and beyond.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SCHOLARS.map((scholar, index) => (
            <Card
              key={index}
              className="shadow-lg bg-white"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <div className="relative w-full h-64">
                <Image
                  src={scholar.image}
                  alt={scholar.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardBody
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                <Typography
                  variant="h5"
                  className="mb-2 font-cinzel-decorative text-rokpa-deep-red"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  {scholar.name}
                </Typography>
                <Typography
                  className="font-sans text-gray-700 mb-4" // font-sans will be Belleza
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  {scholar.story}
                </Typography>
                {/* <Button variant="text" color="red" className="text-rokpa-dark-red">
                  Read More
                </Button> */}
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <Button
            variant="filled"
            color="yellow"
            size="lg"
            className="bg-rokpa-yellow text-rokpa-dark-red hover:bg-yellow-700 font-sans"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Learn More About Rokpa Scholars
          </Button>
          <Button
            variant="outlined"
            color="red"
            size="lg"
            className="border-rokpa-deep-red text-rokpa-deep-red hover:bg-rokpa-deep-red hover:text-white font-sans"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Sign Up for Mentorship
          </Button>
        </div>
      </div>
    </section>
  );
}
