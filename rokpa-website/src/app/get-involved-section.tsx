"use client";

import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import Link from "next/link";
import {
  FaUserFriends,
  FaHandsHelping,
  FaDonate,
  FaPenFancy,
} from "react-icons/fa";

const options = [
  {
    icon: <FaUserFriends className="text-4xl text-rokpa-dark-red mb-4" />,
    title: "Become a Mentor",
    desc: "Guide and inspire Tibetan youth as a mentor.",
    link: "/get-involved",
    color: "bg-rokpa-yellow",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-rokpa-dark-red mb-4" />,
    title: "Volunteer or Intern",
    desc: "Support our mission through flexible opportunities.",
    link: "/get-involved",
    color: "bg-rokpa-beige border border-rokpa-yellow",
  },
  {
    icon: <FaPenFancy className="text-4xl text-rokpa-dark-red mb-4" />,
    title: "Write for Our Blog",
    desc: "Share your story and amplify Tibetan voices.",
    link: "/get-involved",
    color: "bg-rokpa-yellow",
  },
  {
    icon: (
      <FaDonate className="text-4xl text-rokpa-yellow mb-4 bg-rokpa-dark-red rounded-full p-2 shadow-lg" />
    ),
    title: "Donate",
    desc: "Help us empower the next generation by supporting our mission.",
    link: "/donate",
    color: "bg-white border border-rokpa-yellow text-rokpa-dark-red",
    buttonClass:
      "bg-rokpa-dark-red text-white hover:bg-rokpa-yellow hover:text-rokpa-dark-red",
  },
];

export default function GetInvolvedSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-rokpa-yellow/30 to-rokpa-beige">
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
          How to Get Involved
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {options.map((opt, idx) => (
            <Card
              key={idx}
              className={`rounded-xl shadow-lg flex flex-col items-center p-6 ${opt.color}`}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              {opt.icon}
              <CardBody
                className="flex flex-col items-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                {opt.title && (
                  <Typography
                    variant="h5"
                    className="mb-2 font-cinzel-decorative text-rokpa-dark-red"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    {opt.title}
                  </Typography>
                )}
                <Typography
                  className="mb-4 font-belleza text-gray-700 text-center"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  {opt.desc}
                </Typography>
                <Link href={opt.link} passHref>
                  <Button
                    variant="filled"
                    className={
                      idx === 3
                        ? `${opt.buttonClass} font-bold px-6 py-2 rounded-lg transition`
                        : "bg-rokpa-dark-red text-white font-bold px-6 py-2 rounded-lg hover:bg-rokpa-yellow hover:text-rokpa-dark-red transition"
                    }
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    Learn More
                  </Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
