"use client";

import React from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";

const FEATURES = [
  {
    image: "/image/assets/Networking Conference 2025/Copy of DSC03255.JPG",
    title: "College & Career Mentorship",
    desc: "One-on-one guidance from accomplished Tibetan college students and professionals to help you navigate high school, college, and beyond.",
  },
  {
    image: "/image/assets/More Images/IMG_2880.jpg",
    title: "Supportive Community",
    desc: "Join a vibrant network of Tibetan youth and mentors, fostering lifelong friendships and a sense of belonging.",
  },
  {
    image: "/image/assets/More Images/IMG_2818.jpeg",
    title: "Cultural Empowerment",
    desc: "Workshops and events that celebrate Tibetan heritage and identity, helping you stay connected to your roots.",
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
          {FEATURES.map((feature, index) => (
            <Card
              key={index}
              className="shadow-lg bg-white flex flex-col items-center p-0"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardBody
                className="flex flex-col items-center p-6"
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
                  {feature.title}
                </Typography>
                <Typography
                  className="font-sans text-gray-700 mb-4"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  {feature.desc}
                </Typography>
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
