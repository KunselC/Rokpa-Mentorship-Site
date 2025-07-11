import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rokpa-dark-red": "#4D0000",
        "rokpa-bright-red": "#B0252A",
        "rokpa-deep-red": "#962721",
        "rokpa-yellow": "#E7B021",
        "rokpa-blue": "#1B75BB",
        "rokpa-green": "#009345",
        "rokpa-light-brown": "#A87C4F",
        "rokpa-beige": "#FEFCE9",
        "rokpa-grey": "#E6E7E7",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
});

export default config;
