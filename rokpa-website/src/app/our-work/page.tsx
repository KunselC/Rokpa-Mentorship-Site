"use client";

import React from "react";
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  UsersIcon,
  VideoCameraIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";
import { Footer } from "@/components/footer";

export default function OurWork() {
  return (
    <div className="bg-rokpa-beige">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src="/image/assets/Networking Conference 2025/Copy of DSC03450.JPG"
          alt="Rokpa Mentorship Event"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <Typography
            variant="h1"
            className="mb-4 font-cinzel-decorative"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Our Work
          </Typography>
          <Typography
            variant="h5"
            className="font-sans max-w-2xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Empowering the next generation of Tibetan leaders through mentorship
            and community.
          </Typography>
        </div>
      </div>

      <main className="p-8">
        <div className="container mx-auto">
          {/* Flagship Program Description */}
          <section className="my-24 text-center">
            <Typography
              variant="h2"
              className="mb-6 font-cinzel-decorative text-rokpa-dark-red"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Our Flagship Program
            </Typography>
            <Typography
              className="text-gray-800 font-sans text-xl max-w-3xl mx-auto leading-relaxed"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Rokpa Scholars, Rokpa’s flagship program, offers individualized
              and group resources to ensure high school juniors and seniors feel
              supported throughout the entire college application process,
              academically and personally.
            </Typography>
          </section>

          {/* Rokpa Scholars Section */}
          <section className="my-24">
            <Typography
              variant="h3"
              className="mb-12 text-center font-cinzel-decorative text-rokpa-dark-red"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Rokpa Scholars
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card
                className="bg-white shadow-2xl rounded-2xl overflow-hidden group"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                <CardBody
                  className="p-8 text-center"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  <div className="bg-rokpa-yellow inline-block p-4 rounded-full mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <UsersIcon className="h-12 w-12 text-white" />
                  </div>
                  <Typography
                    variant="h5"
                    className="mb-4 font-bold text-rokpa-deep-red font-sans"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    One-On-One Mentorship
                  </Typography>
                  <Typography
                    className="text-gray-700 font-sans text-base"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    We match mentees and mentors based on interests, academic
                    pursuits, and university selection. Our diverse mentors,
                    many first-generation students themselves, provide tailored
                    guidance.
                  </Typography>
                </CardBody>
              </Card>
              <Card
                className="bg-white shadow-2xl rounded-2xl overflow-hidden group"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                <CardBody
                  className="p-8 text-center"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  <div className="bg-rokpa-blue inline-block p-4 rounded-full mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <AcademicCapIcon className="h-12 w-12 text-white" />
                  </div>
                  <Typography
                    variant="h5"
                    className="mb-4 font-bold text-rokpa-deep-red font-sans"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    Community of Practice: Mentors
                  </Typography>
                  <Typography
                    className="text-gray-700 font-sans text-base"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    We foster a strong community among mentors to share
                    knowledge and best practices, enhancing the quality of
                    support they provide to our scholars.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Events Section */}
          <section className="my-24">
            <Typography
              variant="h3"
              className="mb-12 text-center font-cinzel-decorative text-rokpa-dark-red"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Our Events
            </Typography>
            <div className="space-y-20">
              {/* College Conference & Fair */}
              <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <CalendarDaysIcon className="h-10 w-10 text-rokpa-bright-red mr-4" />
                    <Typography
                      variant="h4"
                      className="font-bold text-rokpa-deep-red font-sans"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    >
                      College Conference & Fair
                    </Typography>
                  </div>
                  <Typography
                    className="text-gray-700 font-sans text-lg mb-6"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    Our annual conference brings together students, families,
                    and college representatives for workshops on financial aid,
                    essay writing, and more, bridging gaps in access and
                    opportunity.
                  </Typography>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                  <Image
                    src="/image/assets/Boston College Fair 2025/P2150254 (1).png"
                    alt="College Fair 1"
                    width={320}
                    height={220}
                    className="rounded-xl shadow-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                  <Image
                    src="/image/assets/Boston College Fair 2025/Copy of IMG_4124.png"
                    alt="College Fair 2"
                    width={320}
                    height={220}
                    className="rounded-xl shadow-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                  <Image
                    src="/image/assets/Networking Conference 2025/Copy of a.JPG"
                    alt="Networking Conference"
                    width={320}
                    height={220}
                    className="rounded-xl shadow-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                  <Image
                    src="/image/assets/College Fair 2024/DSC09448.JPG"
                    alt="College Fair Event"
                    width={320}
                    height={220}
                    className="rounded-xl shadow-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* College Tours */}
              <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col lg:flex-row-reverse gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <BuildingLibraryIcon className="h-10 w-10 text-rokpa-green mr-4" />
                    <Typography
                      variant="h4"
                      className="font-bold text-rokpa-deep-red font-sans"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    >
                      College Tours
                    </Typography>
                  </div>
                  <Typography
                    className="text-gray-700 font-sans text-lg"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    Rokpa Tours offers scholars immersive visits to
                    universities, providing a firsthand look at college life as
                    a Tibetan student, from dorms and dining halls to campus
                    traditions.
                  </Typography>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src="/image/assets/More Images/IMG_2818.jpeg"
                    alt="College Tour"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg object-cover w-full h-auto"
                  />
                </div>
              </div>

              {/* ROKPA Virtual Hours & Webinars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-2xl shadow-2xl">
                  <div className="flex items-center mb-4">
                    <VideoCameraIcon className="h-10 w-10 text-rokpa-blue mr-4" />
                    <Typography
                      variant="h5"
                      className="font-bold text-rokpa-deep-red font-sans"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    >
                      ROKPA Virtual Hours
                    </Typography>
                  </div>
                  <Typography
                    className="text-gray-700 font-sans text-base"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    Our virtual office hours provide continuous support for
                    Tibetans navigating the college application process,
                    extending our reach beyond one-time events.
                  </Typography>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-2xl">
                  <div className="flex items-center mb-4">
                    <PaintBrushIcon className="h-10 w-10 text-rokpa-light-brown mr-4" />
                    <Typography
                      variant="h5"
                      className="font-bold text-rokpa-deep-red font-sans"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    >
                      Webinars & Workshops
                    </Typography>
                  </div>
                  <Typography
                    className="text-gray-700 font-sans text-base mb-4"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    Scholars access on-demand workshops on topics from essay
                    editing to financial aid, now available to the public on our
                    YouTube channel.
                  </Typography>
                  <ul className="list-disc list-inside text-gray-600 font-sans text-sm space-y-1">
                    <li>Common App Walk Through</li>
                    <li>Back To School Panel</li>
                    <li>Financial Aid Workshop & FAFSA walkthrough</li>
                    <li>And many more!</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
