"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function OurWork() {
  return (
    <section className="py-12 px-4 bg-rokpa-beige min-h-screen">
      <div className="container mx-auto max-w-5xl">
        {/* Scholars Program Section */}
        <div className="mb-16 text-center">
          <Typography
            variant="h2"
            className="mb-4 font-cinzel-decorative text-rokpa-dark-red"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Rokpa Scholars Program
          </Typography>
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            <div className="flex-1">
              <Typography
                className="text-gray-700 font-sans text-lg mb-4"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                The Rokpa Scholars Program is our flagship mentorship
                initiative, pairing Tibetan youth with accomplished mentors in
                their fields of interest. Scholars receive guidance on
                academics, career planning, and personal growth, and join a
                supportive network of peers and professionals. Our goal is to
                empower the next generation of Tibetan leaders through
                opportunity, connection, and community.
              </Typography>
              <div className="mt-6 flex justify-center">
                <Image
                  src="/image/assets/College Fair 2024/DSC09448.JPG"
                  alt="Rokpa Scholar Event"
                  width={400}
                  height={260}
                  className="rounded-xl shadow-lg object-cover bg-white w-full h-64"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* College Conference & Fair Section */}
        <div className="mb-16 text-center">
          <Typography
            variant="h3"
            className="mb-4 font-cinzel-decorative text-rokpa-dark-red"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            College Conference & Fair
          </Typography>
          <div className="flex flex-col gap-8">
            <Typography
              className="text-gray-700 font-sans text-lg mb-4"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Each year, ROKPA organizes a College Conference and Fair open to
              the local community, in partnership with organizations like Apex
              for Youth. Since our first in 2023, we've brought together
              hundreds of students and families. At our inaugural event at the
              Tibetan Community Hall of NY & NJ, over 100 participants attended
              workshops on financial aid, personal statement writing, SAT prep,
              and more. Attendees also had the unique chance to speak directly
              with regional admissions counselors, alumni, and current college
              students about the admissions process and campus life.
              <br />
              <br />
              We’re committed to continuing events that bridge gaps in access,
              information, and opportunity for our community. Stay tuned for
              future conferences!
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Image
                src="/image/assets/Boston College Fair 2025/P2150254 (1).png"
                alt="College Fair 1"
                width={320}
                height={220}
                className="rounded-xl shadow-lg object-cover bg-white w-full h-48"
                priority
              />
              <Image
                src="/image/assets/Networking Conference 2025/Copy of DSC03450.JPG"
                alt="College Fair 2"
                width={320}
                height={220}
                className="rounded-xl shadow-lg object-cover bg-white w-full h-48"
                priority
              />
              <Image
                src="/image/assets/Networking Conference 2025/Copy of DSC03255.JPG"
                alt="College Fair 3"
                width={320}
                height={220}
                className="rounded-xl shadow-lg object-cover bg-white w-full h-48"
                priority
              />
              <Image
                src="/image/assets/Networking Conference 2025/Copy of DSC03237.JPG"
                alt="College Fair 4"
                width={320}
                height={220}
                className="rounded-xl shadow-lg object-cover bg-white w-full h-48"
                priority
              />
            </div>
          </div>
        </div>

        {/* Add more sections for other work as needed */}
      </div>
    </section>
  );
}
