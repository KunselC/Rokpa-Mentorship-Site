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
    name: "Contact Us",
    href: "/contact",
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
          className="text-lg font-bold font-cinzel-decorative flex items-center" // Changed from font-lora
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <Image
            src="/image/assets/Rokpa Photos/Logos/Rokpa Logo Black Text.png" // Corrected path
            alt="Rokpa Logo"
            width={100} // Keep or adjust as needed
            height={32} // Keep or adjust as needed
            className="mr-2"
            priority // Add priority if it's LCP
          />
        </Typography>
        <ul className="ml-10 hidden items-center gap-6 lg:flex">
          {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              {name}{" "}
              {/* NavItem already uses font-sans which will be Belleza */}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID"
            target="_blank"
          >
            <Button
              color="red"
              className="bg-rokpa-dark-red hover:bg-rokpa-deep-red font-sans" // Ensure font-sans for Belleza
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Donate
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
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
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {name}{" "}
                {/* NavItem already uses font-sans which will be Belleza */}
              </NavItem>
            ))}
            {/* Mobile Donate Button */}
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID"
              target="_blank"
              className="mt-2"
            >
              <Button
                color="red"
                fullWidth
                className="bg-rokpa-dark-red hover:bg-rokpa-deep-red font-sans" // Ensure font-sans for Belleza
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Donate
              </Button>
            </a>
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
