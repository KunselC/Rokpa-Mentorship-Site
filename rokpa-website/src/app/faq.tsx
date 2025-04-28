"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQS = [
  {
    // Needs to be changed yearly for each year
    title: "When can I apply?",
    desc: "Application for the one-on-one mentorship will be released in summer 2025. We are accepting on a rolling basis for the 2025 mentorship cycle.",
  },
  {
    title: "How much does the program cost?",
    desc: "Our program is completely free! Many of our mentors come from low-income backgrounds, so we personally understand the difficulties that financial limitations can place one’s academic journey.",
  },
  {
    title: "What is the program duration?",
    desc: "The mentorship program is intended to last one academic year, working towards the goal of college application submissions and eventually acceptances. While mentors and mentees are allowed–and even encouraged–to maintain their relationship once the mentee has graduated from our program, the official support from Rokpa Mentorship during the mentee’s senior year will last from the beginning to end of the mentee’s senior year.",
  },
  {
    title: "What should I do if I don’t get accepted? ",
    desc: "Due to the high volume of mentee applicants and limited number of mentors, we are unable to pair every applicant with a mentor. This does not reflect your talent, skills or worth as an applicant. It just means that you will not be paired with a single one-on-one mentor. You will still have access to our resources such web seminars, alumni networks, email lists and social media pages. To request any help, please reach out to us on our Instagram or email.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            Welcome to the Rokpa FAQ section. We&apos;re here to address your
            most common queries.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
