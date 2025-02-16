"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a
      href="https://www.rokpamentorship.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50 shadow-lg"
      >
        <Image
          width={24}
          height={24}
          className="w-5 h-5"
          alt="Rokpa Logo"
          src="/logos/logo-rokpa.svg"
        />
        <span className="ml-2">Visit Rokpa</span>
      </Button>
    </a>
  );
}

export default FixedPlugin;
