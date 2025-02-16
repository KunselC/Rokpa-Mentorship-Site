"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Personalized Guidance!",
    description:
      "Receive one-on-one mentorship from experienced professionals who understand the challenges you face.",
    subTitle: "Mentorship",
  },
  {
    title: "Comprehensive Resources!",
    description:
      "Access a wealth of resources including webinars, alumni networks, and educational materials to support your academic journey.",
    subTitle: "Resources",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        About the Program
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Join?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Welcome to the Rokpa Mentorship Program, where your future begins! If
        you're a high school student looking for guidance, this program is
        designed to empower, educate, and connect you with the right mentors.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Community Support!"
            subTitle="Community"
            description="Join a supportive community of mentors and mentees who are dedicated to helping each other succeed."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
