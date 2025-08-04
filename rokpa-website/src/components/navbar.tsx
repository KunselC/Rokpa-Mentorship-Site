import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  icon?: React.ElementType; // Added for potential icons in nav items
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-rokpa-deep-red transition-colors font-sans"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Our Team",
    href: "/our-team",
  },
  {
    name: "Our Work",
    href: "/our-work",
  },
  {
    name: "Get Involved",
    href: "/get-involved",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Donate",
    href: "/donate",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50 bg-rokpa-beige px-4 py-3"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          color="blue-gray"
          className="text-lg font-bold font-cinzel-decorative flex items-center"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <Image
            src="/image/assets/Logos/Rokpa%20Logo%20Black%20Text.png"
            alt="Rokpa Logo"
            width={100}
            height={32}
            className="mr-2"
            priority
          />
        </Typography>
        <div className="flex items-center gap-4 flex-1 justify-end">
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_MENU.filter(({ name }) => name !== "Donate").map(
              ({ name, href }) => (
                <NavItem key={name} href={href}>
                  {name}
                </NavItem>
              )
            )}
          </ul>
          {/* Always-visible Donate button (all screens >=md) */}
          <Link href="/donate" className="ml-4">
            <Button
              variant="filled"
              className="bg-rokpa-yellow text-rokpa-dark-red font-bold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-400 hover:text-rokpa-dark-red transition hidden md:inline-block"
              size="md"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Donate
            </Button>
          </Link>
          {/* Mobile: Donate button to the right of menu button */}
          <div className="flex items-center gap-2 md:hidden ml-auto">
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="inline-block"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
            <Link href="/donate">
              <Button
                variant="filled"
                className="bg-rokpa-yellow text-rokpa-dark-red font-bold px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400 hover:text-rokpa-dark-red transition sm:hidden"
                size="md"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.filter(({ name }) => name !== "Donate").map(
              ({ name, href }) => (
                <NavItem key={name} href={href}>
                  {name}
                </NavItem>
              )
            )}
            {/* Donate button always visible at bottom of mobile menu */}
            <li>
              <Link href="/donate">
                <Button
                  variant="filled"
                  className="bg-rokpa-yellow text-rokpa-dark-red font-bold w-full mt-2"
                  size="md"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  Donate
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
