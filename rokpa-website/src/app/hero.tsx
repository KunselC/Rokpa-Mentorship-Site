"use client";

import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="relative w-full h-[75vh] bg-[url('/image/assets/Networking%20Conference%202025/Copy%20of%20DSC03255.JPG')] bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Subtle animated gradient overlay for vibrancy */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/70 via-rokpa-dark-red/60 to-rokpa-yellow/40 animate-gradient-move" />
      {/* Decorative floating shapes for extra vibrancy */}
      <div
        className="hidden md:block absolute bottom-8 right-8 w-24 h-24 bg-rokpa-dark-red rounded-full opacity-20 blur-2xl z-10 animate-float-slower"
        data-aos="fade-up-left"
      />
      {/* New accent SVG divider at the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 z-20"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FEFCE9"
          d="M0,80 C480,0 960,160 1440,80 L1440,160 L0,160 Z"
        />
      </svg>
      <div className="grid h-full px-8">
        {/* Changed min-h-screen to h-full */}
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 lg:max-w-4xl font-cinzel-decorative"
            data-aos="fade-up"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            ROKPA — རོགས་པ།
          </Typography>
          <Typography
            variant="h3"
            color="white"
            className="mb-2 lg:max-w-3xl text-rokpa-yellow font-cinzel-decorative"
            data-aos="fade-up"
            data-aos-delay="150"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            TIBETANS CAN. TIBETANS WILL.
          </Typography>
          {/* Tagline for extra context */}
          <Typography
            variant="lead"
            color="white"
            className="mb-8 max-w-2xl mx-auto text-lg font-belleza text-white/90"
            data-aos="fade-up"
            data-aos-delay="300"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Empowering Tibetan youth through mentorship, community, and
            opportunity.
          </Typography>
          <div
            className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center relative z-20"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Link href="/get-involved">
              <Button
                variant="filled"
                className="bg-rokpa-yellow hover:bg-yellow-700 text-rokpa-dark-red font-sans"
                size="lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Become a Scholar
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button
                variant="filled"
                className="bg-rokpa-yellow hover:bg-yellow-700 text-rokpa-dark-red font-sans"
                size="lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Become a Mentor
              </Button>
            </Link>
          </div>
          {/* Scroll indicator - moved below buttons, only on md+ screens, and with more spacing */}
          <div
            className="hidden md:flex flex-col items-center z-30 mt-16"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="text-white/80 font-belleza text-sm mb-1">
              Scroll Down
            </span>
            <svg
              className="animate-bounce"
              width="24"
              height="24"
              fill="none"
              stroke="#E7B021"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
