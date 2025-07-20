"use client";

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const teamData = {
  directors: [
    { name: "Lhamo Dolma", school: "Gustavus Adolphus College", year: 2022 },
    { name: "Norzin Lhadon", school: "Columbia University", year: 2026 },
  ],
  events: [
    { name: "Tenzin Yengkey", school: "Wesleyan University", year: 2025 },
    { name: "Tenzin Yonten", school: "Stony Brook University", year: 2028 },
    { name: "Jinpa Sangmo", school: "Stanford University", year: 2025 },
    { name: "Tenzin Namgyal Nyima", school: "Hunter College", year: 2028 },
    { name: "Tenzin Kalsang", school: "University at Buffalo", year: 2027 },
  ],
  communications: [
    { name: "Tenzin Pema", school: "Binghamton University", year: 2025 },
    { name: "Mandarava", school: "Stanford University", year: 2027 },
    { name: "Yeshi-Wangmu Sherpa", school: "UC San Diego", year: 2027 },
  ],
  curriculum: [
    { name: "Tenzin Jamdol", school: "Wesleyan University", year: 2025 },
    {
      name: "Tenzin Rabyoung Dhondup",
      school: "Yale University",
      year: 2026,
    },
    { name: "Dorjee Tugdul", school: "Uoregon", year: 2028 },
    { name: "Pema Zidig", school: "Amherst College", year: 2027 },
    { name: "Tzewa Dingpontsawa", school: "Barnard College", year: 2028 },
  ],
  professionalDevelopment: [
    { name: "Tenzin Kunsang", school: "Cornell University", year: 2025 },
    {
      name: "Tenzing Dekyong",
      school: "Washington University in St. Louis",
      year: 2026,
    },
    { name: "Tenzin Dadak", school: "Harvard University", year: 2025 },
    { name: "Tenzin Yiga", school: "Harvard University", year: 2027 },
    {
      name: "Tenzin (Tenla) Mathigongma",
      school: "University of Toronto",
      year: 2027,
    },
  ],
  programming: [
    { name: "Topjor Tsultrim", school: "Williams College", year: 2022 },
    { name: "Saldon Tenzin", school: "Cornell University", year: 2028 },
    { name: "Yangzom Noga Tenzin", school: "Cornell University", year: 2027 },
    { name: "Jigme Thupten", school: "Columbia University", year: 2028 },
  ],
  operations: [
    { name: "Kunsel Chodak", school: "Albany High School", year: 2026 },
  ],
};

const TeamMemberCard = ({
  name,
  school,
  year,
}: {
  name: string;
  school: string;
  year: number;
}) => (
  <Card
    className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
    placeholder={undefined}
    onPointerEnterCapture={undefined}
    onPointerLeaveCapture={undefined}
    onResize={undefined}
    onResizeCapture={undefined}
  >
    <div className="h-60 bg-gray-200 flex items-center justify-center">
      <Typography
        className="text-gray-500"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        Photo Coming Soon
      </Typography>
    </div>
    <CardBody
      className="text-center p-6"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
    >
      <Typography
        variant="h5"
        className="font-belleza text-rokpa-dark-blue mb-2"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {name}
      </Typography>
      <Typography
        className="font-belleza text-rokpa-dark-gray"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {school} '{year.toString().slice(-2)}
      </Typography>
    </CardBody>
  </Card>
);

const TeamSection = ({
  title,
  members,
}: {
  title: string;
  members: { name: string; school: string; year: number }[];
}) => (
  <div className="mb-16">
    <Typography
      variant="h3"
      className="mb-8 font-cinzel-decorative text-rokpa-dark-blue"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
    >
      {title}
    </Typography>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {members.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          school={member.school}
          year={member.year}
        />
      ))}
    </div>
  </div>
);

export default function OurTeam() {
  return (
    <section className="py-20 px-4 bg-rokpa-beige min-h-screen">
      <div className="container mx-auto max-w-7xl text-center">
        <Typography
          variant="h2"
          className="mb-12 font-cinzel-decorative text-rokpa-dark-red"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Meet the Rokpa Team
        </Typography>

        <TeamSection title="Directors" members={teamData.directors} />
        <TeamSection title="Events" members={teamData.events} />
        <TeamSection title="Communications" members={teamData.communications} />
        <TeamSection
          title="Curriculum & Resources"
          members={teamData.curriculum}
        />
        <TeamSection
          title="Professional Development"
          members={teamData.professionalDevelopment}
        />
        <TeamSection title="Programming" members={teamData.programming} />
        <TeamSection title="Operations" members={teamData.operations} />
      </div>
    </section>
  );
}
