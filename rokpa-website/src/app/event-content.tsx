"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";

const EVENT_CONTENT = [
  {
    title: "Navigating College Applications",
    des: "Learn the ins and outs of the college application process, including tips on writing personal statements, securing recommendations, and choosing the right schools.",
    name: "Jane Doe",
    position: "College Admissions Counselor",
    panel: "Workshop",
    img: "/image/avatar1.jpg",
  },
  {
    title: "Building a Strong Academic Profile",
    des: "Discover strategies for excelling academically, managing your time effectively, and building a profile that stands out to colleges and universities.",
    name: "John Smith",
    position: "High School Counselor",
    panel: "Panel Discussion",
    img: "/image/avatar2.jpg",
  },
  {
    title: "Finding the Right Mentor",
    des: "Join us for a discussion on the importance of mentorship, how to find the right mentor, and how to make the most of your mentoring relationship.",
    name: "Emily Johnson",
    position: "Mentorship Program Coordinator",
    panel: "Panel Discussion",
    img: "/image/avatar3.jpg",
  },
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab value="Day1" className="font-medium">
              Day 1
            </Tab>
            <Tab value="Day2" className="font-medium">
              Day 2
            </Tab>
            <Tab value="Day3" className="font-medium">
              Day 3
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
