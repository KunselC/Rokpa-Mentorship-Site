"use client";

import { Card, CardBody, Typography } from "@material-tailwind/react";

interface AboutCardProps {
  title: string;
  description: string;
  subTitle: string;
}

export default function AboutCard({
  title,
  description,
  subTitle,
}: AboutCardProps) {
  return (
    <Card className="shadow-lg">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
          {title}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {subTitle}
        </Typography>
        <Typography variant="body1" color="gray" className="font-normal">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}
