import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

// Corrected LINKS structure
const LINKS = [
  {
    name: "Quick Links", // Column title
    items: [
      { name: "Home", path: "/" },
      { name: "Our Team", path: "/our-team" },
      { name: "Our Work", path: "/our-work" },
      { name: "Get Involved", path: "/get-involved" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    name: "Resources", // Column title
    items: [
      {
        name: "Donate",
        path: "https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID",
      }, // Replace with actual donate link
      // Add other resource links if needed, e.g., FAQ, Blog
      // { name: "FAQ", path: "/faq" },
      // { name: "Blog", path: "/blog" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-rokpa-dark-red px-4 pt-8 pb-6 text-rokpa-beige">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography
              variant="h4"
              className="mb-4 font-cinzel-decorative" // Changed from font-lora
              color="white"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              ROKPA — རོགས་པ།
            </Typography>
            <Typography
              variant="h5"
              className="mb-2 font-normal text-rokpa-yellow font-cinzel-decorative" // Added font-cinzel-decorative
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Tibetans Can. Tibetans Will.
            </Typography>
            <div className="mt-6 lg:mb-0 mb-6 flex justify-center lg:justify-start">
              <a
                href="https://www.facebook.com/rokpamentorship"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  color="white"
                  className="rounded-full mr-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  <i className="fa-brands fa-facebook" />
                </IconButton>
              </a>
              <a
                href="https://www.instagram.com/rokpamentorship"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  color="white"
                  className="rounded-full mr-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  <i className="fa-brands fa-instagram" />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/company/rokpa-mentorship-program/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  color="white"
                  className="rounded-full mr-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  <i className="fa-brands fa-linkedin" />
                </IconButton>
              </a>
              {/* Add other social media icons as needed */}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-full grid-cols-2 gap-8 lg:mt-0 lg:w-5/12">
            {LINKS.map(
              (
                { name, items } // 'name' is the column title, 'items' is the array of links
              ) => (
                <div key={name}>
                  <Typography
                    variant="small"
                    color="white"
                    className="mb-2 block font-medium uppercase font-sans" // font-sans will now be Belleza
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    {name}
                  </Typography>
                  <ul className="mt-3 list-none">
                    {items.map(
                      (
                        link // This 'items' is now correctly defined
                      ) => (
                        <li key={link.name}>
                          <Typography
                            as="a"
                            href={link.path}
                            target={
                              link.path.startsWith("http") ? "_blank" : "_self"
                            } // Open external links in new tab
                            rel={
                              link.path.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            variant="small"
                            className="mb-2 block font-normal text-rokpa-beige hover:text-rokpa-yellow font-sans" // font-sans will now be Belleza
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                          >
                            {link.name}
                          </Typography>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
        <hr className="my-6 border-rokpa-yellow" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <Typography
              variant="small"
              className="font-normal text-rokpa-beige font-sans" // font-sans will now be Belleza
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Copyright © {CURRENT_YEAR} Rokpa Mentorship. All Rights Reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
