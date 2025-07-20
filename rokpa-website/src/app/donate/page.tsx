"use client";

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";

const donateImages = [
  {
    src: "/image/assets/More Images/IMG_2818.jpeg",
    alt: "Rokpa Event 1",
  },
  {
    src: "/image/assets/More Images/IMG_2880.jpg",
    alt: "Rokpa Event 2",
  },
];

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-rokpa-beige text-gray-800">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Typography
          variant="h2"
          className="text-center mb-8 font-cinzel-decorative text-rokpa-dark-red"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Support our cause.
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 mb-8 justify-center">
          {donateImages.map((img, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[200px] max-w-[350px] mx-auto"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={350}
                height={220}
                className="rounded-lg object-cover w-full h-56 shadow-md"
              />
            </div>
          ))}
        </div>
        <Card
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <CardBody
            className="p-8"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <Typography
              className="font-belleza text-lg mb-6"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Envision a world where empowerment knows no limits, where dreams
              find fertile ground, and where change echoes through communities.
              At Rokpa, this vision is our driving force, and we extend an
              invitation to you to join us in making it a reality.
              <br />
              <br />
              Your donation holds the power to ignite transformation – to
              empower Tibetan youth, fuel aspirations, and pave the way for
              lasting change. From providing educational opportunities to
              fostering mentorship and amplifying cultural awareness, your
              support is the cornerstone of progress.
              <br />
              <br />
              With your help, we can continue guiding the journey of young
              minds, nurturing growth, and preserving our precious heritage.
              Every contribution resonates with the potential to mold brighter
              futures and amplify the voices of tomorrow's leaders.
              <br />
              <br />
              Join us in this journey of empowerment and impact.
              <br />
              <br />
              Make a difference today and contribute. Your gift, regardless of
              its size, fuels the spirit of Rokpa's mission, nurturing a world
              where possibilities flourish.
              <br />
              <br />
              Our heartfelt thanks for being an indispensable part of our
              mission.
            </Typography>
            <div className="flex justify-center mb-4">
              <button
                className="bg-rokpa-yellow text-rokpa-dark-red font-bold py-3 px-8 rounded-lg text-lg shadow-md hover:bg-yellow-400 transition"
                disabled
              >
                Donate (Givebutter Coming Soon)
              </button>
            </div>
            <Typography
              className="text-center text-xs text-gray-500 mb-2"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Powered by Givebutter
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <CardBody
            className="p-8"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <Typography
              variant="h4"
              className="mb-4 font-cinzel-decorative text-rokpa-dark-red"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              We help you see your impact through:
            </Typography>
            <ul className="list-disc pl-6 mb-6 text-left font-belleza">
              <li>
                Monthly newsletters to share empowering stories of the youth
                within our community
              </li>
              <li>An Annual Report sharing what we accomplished together</li>
              <li>
                Social media posts and occasional newsletters offering stories
                you can share
              </li>
              <li>
                Personalized Letters from Rokpa Scholars to share their
                accomplishments with you
              </li>
            </ul>
            <Typography
              variant="h4"
              className="mb-4 font-cinzel-decorative text-rokpa-dark-red"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Where will my money go?
            </Typography>
            <ul className="list-disc pl-6 text-left font-belleza">
              <li>
                Our initiatives foster welcoming spaces for Tibetan youth to
                connect with their identity, engage with their community, and
                ultimately feel supported navigating life in diaspora.
              </li>
              <li>Educational: Our core mentorship program: Rokpa Scholars</li>
              <li>
                Teach-in series: Help Rokpa improve the breadth and quality of
                our series to equip Tibetan youth with cultural knowledge.
              </li>
              <li>
                Professional: Help fund our annual networking conferences across
                North America!
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
