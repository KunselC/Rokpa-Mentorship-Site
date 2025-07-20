"use client";

import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const involvementOpportunities = [
  {
    title: "Become a Mentor",
    description:
      "Guide and inspire the next generation of Tibetan leaders. Our mentors provide invaluable support in academic, professional, and personal development.",
    imageUrl:
      "/image/assets/Networking%20Conference%202025/Copy%20of%20DSC03255.JPG",
    buttonText: "Apply Now",
    buttonLink: "/apply",
  },
  {
    title: "Become a Board Member",
    description:
      "Play a vital role in shaping the future of Tibetan youth empowerment. Contribute your skills, insights, and passion to our dynamic team.",
    imageUrl: "/image/assets/College%20Fair%202024/DSC09448.JPG",
    buttonText: "Board Application",
    buttonLink: "/apply",
  },
  {
    title: "Intern With Us",
    description:
      "Gain hands-on experience in community enrichment and project management. This is your chance to transform your passion into action.",
    imageUrl:
      "/image/assets/Networking%20Conference%202025/Copy%20of%20a(1).JPG",
    buttonText: "Intern Application",
    buttonLink: "/apply",
  },
  {
    title: "Volunteer for Rokpa",
    description:
      "Make a positive difference on your own terms. Your involvement is flexible, aligning with your schedule while still contributing to our mission.",
    imageUrl: "/image/assets/Boston%20College%20Fair%202025/P2150254%20(1).png",
    buttonText: "Volunteer",
    buttonLink: "/apply",
  },
  {
    title: "Write for Our Blogs",
    description:
      "Amplify the voices of Tibetan youth in exile. Share your unique perspective and experiences of growing up in Western spaces.",
    imageUrl:
      "/image/assets/Networking%20Conference%202025/Copy%20of%20DSC03237.JPG",
    buttonText: "Blog Writer Application",
    buttonLink: "/apply",
  },
  {
    title: "Partner With Us",
    description:
      "Collaborate with Rokpa to create impactful programs and events. We welcome partnerships with organizations that share our mission.",
    imageUrl:
      "/image/assets/Boston%20College%20Fair%202025/Copy%20of%20IMG_4124.png",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    title: "Support Our Mission",
    description:
      "Your contribution helps us provide mentorship, scholarships, and educational resources to Tibetan students. Every donation makes a difference.",
    imageUrl: "/image/assets/Networking%20Conference%202025/Copy%20of%20a.JPG",
    buttonText: "Donate Now",
    buttonLink: "/donate",
  },
  {
    title: "Give Us Feedback",
    description:
      "Your feedback guides us in refining our initiatives and tailoring our efforts to better serve our community. Share your thoughts today!",
    imageUrl: "/image/assets/Ngatso%20Fest%202024/P1060219.JPG",
    buttonText: "Feedback Form",
    buttonLink: "/contact",
  },
];

const InvolvementCard = ({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
}: {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}) => (
  <Card
    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
    placeholder={undefined}
    onPointerEnterCapture={undefined}
    onPointerLeaveCapture={undefined}
    onResize={undefined}
    onResizeCapture={undefined}
  >
    <div className="relative h-56 w-full">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
    <CardBody
      className="p-6 flex flex-col flex-grow"
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
        {title}
      </Typography>
      <Typography
        className="font-belleza text-lg mb-6 flex-grow"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {description}
      </Typography>
      <Link href={buttonLink} passHref>
        <Button
          variant="filled"
          className="bg-rokpa-dark-red text-white mt-auto"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          {buttonText}
        </Button>
      </Link>
    </CardBody>
  </Card>
);

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-rokpa-beige text-gray-800">
      <div className="container mx-auto px-6 py-12">
        <Typography
          variant="h2"
          className="text-center mb-12 font-cinzel-decorative text-rokpa-dark-red"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Get Involved
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {involvementOpportunities.map((opportunity, index) => (
            <InvolvementCard key={index} {...opportunity} />
          ))}
        </div>
      </div>
    </main>
  );
}
