import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Home", "About Us", "Programs", "Contact", "Donate"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-gray-900 text-white">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-800 max-w-6xl mx-auto rounded-2xl p-5">
          <Typography className="text-2xl md:text-3xl text-center font-bold">
            Join the Rokpa Mentorship Program!
          </Typography>
          <Typography className="md:w-7/12 text-center my-3 !text-base">
            Empowering Tibetan youth through personalized mentorship and
            comprehensive resources.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <Button color="orange" size="md">
              Become a Mentor
            </Button>
            <Button color="orange" size="md">
              Find a Mentor
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.rokpa.org"
            target="_blank"
            variant="h6"
            className="text-white"
          >
            Rokpa
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal !text-gray-400 hover:!text-white transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-400"
        >
          &copy; {CURRENT_YEAR} Rokpa Mentorship Program. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
