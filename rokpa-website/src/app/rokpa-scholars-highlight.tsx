"use client";

import React from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";

export default function RokpaScholarsHighlight() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 font-lora"
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
            accomplished Tibetan college mentors, providing one-on-one guidance,
            a supportive community, and a wealth of resources to navigate the
            path to higher education and beyond.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Placeholder for Scholar Stories/Highlights - repeat this block for each story */}
          <Card
            className="shadow-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <Image
              src="/image/assets/Rokpa Photos/Networking Conference 2025/Copy of a.JPG" // Replace with actual scholar image
              alt="Rokpa Scholar Story 1"
              width={500}
              height={300}
              className="rounded-t-lg object-cover h-48 w-full"
            />
            <CardBody
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 font-lora"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Scholar Success Story
              </Typography>
              <Typography
                className="text-gray-600 mb-4 font-sans"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                A brief highlight of a scholar's journey and achievements
                through the Rokpa Scholars program.
              </Typography>
              {/* <Button variant="text" color="red" className="text-rokpa-dark-red">
                Read More
              </Button> */}
            </CardBody>
          </Card>
          <Card
            className="shadow-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <Image
              src="/image/assets/Rokpa Photos/Networking Conference 2025/Copy of DSC03237.JPG" // Replace with actual scholar image
              alt="Rokpa Scholar Story 2"
              width={500}
              height={300}
              className="rounded-t-lg object-cover h-48 w-full"
            />
            <CardBody
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 font-lora"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Mentorship Impact
              </Typography>
              <Typography
                className="text-gray-600 mb-4 font-sans"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Discover how our dedicated mentors make a difference in the
                lives of young Tibetan students.
              </Typography>
              {/* <Button variant="text" color="red" className="text-rokpa-dark-red">
                Read More
              </Button> */}
            </CardBody>
          </Card>
          <Card
            className="shadow-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <Image
              src="/image/assets/Rokpa Photos/Boston College Fair 2025/Copy of IMG_4124.png" // Replace with actual scholar image
              alt="Rokpa Scholar Story 3"
              width={500}
              height={300}
              className="rounded-t-lg object-cover h-48 w-full"
            />
            <CardBody
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 font-lora"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Community and Connection
              </Typography>
              <Typography
                className="text-gray-600 mb-4 font-sans"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Learn about the vibrant community and network that Rokpa
                scholars become a part of.
              </Typography>
              {/* <Button variant="text" color="red" className="text-rokpa-dark-red">
                Read More
              </Button> */}
            </CardBody>
          </Card>
        </div>

        <div className="text-center">
          <Button
            variant="filled"
            color="yellow"
            size="lg"
            className="mt-8 bg-rokpa-yellow text-rokpa-dark-red hover:bg-yellow-700 font-sans"
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
            className="mt-4 border-rokpa-deep-red text-rokpa-deep-red hover:bg-rokpa-deep-red hover:text-white font-sans"
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
