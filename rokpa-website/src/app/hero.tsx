"use client";

import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative w-full h-[75vh] bg-[url('/image/assets/Rokpa%20Photos/Networking%20Conference%202025/Copy%20of%20DSC03255.JPG')] bg-cover bg-center bg-no-repeat">
      {/* Adjusted height to 75vh and added bg-center */}
      <div className="absolute inset-0 h-full w-full bg-black/70" />
      <div className="grid h-full px-8">
        {" "}
        {/* Changed min-h-screen to h-full */}
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1" // Changed from h3 to h1 for the main headline
            color="white"
            className="mb-4 lg:max-w-4xl font-lora" // Added font-lora, adjusted margin
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            ROKPA — རོགས་པ།
          </Typography>
          <Typography
            variant="h3" // Changed from h1 to h3 for the sub-headline
            color="white"
            className="mb-12 lg:max-w-3xl text-rokpa-yellow"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            TIBETANS CAN. TIBETANS WILL.
          </Typography>
          <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Button
              variant="filled"
              className="bg-rokpa-dark-red hover:bg-rokpa-deep-red text-white font-sans"
              size="lg"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Become a Scholar
            </Button>
            <Button
              variant="outlined"
              className="border-rokpa-yellow text-rokpa-yellow hover:bg-rokpa-yellow hover:text-rokpa-dark-red font-sans"
              size="lg"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Become a Mentor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
