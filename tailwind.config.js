module.exports = {
  darkMode: 'class', // or 'media' if you want OS-based dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      screens: {
      '2xl': '2160px'
      },
      fontFamily: {
        estedad: ["estedad", "sans-serif"],
      },
      fontSize: {
        //title/text/7xl

        "title-7xl-regular": [
          "3.75rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        "title-7xl-semibold": [
          "3.75rem",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],

        //title/text/6xl

        "title-6xl-regular": [
          "3rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        "title-6xl-semibold": [
          "3rem",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],

        
        "title-6xl-bold": [
          "4rem",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],

        //title/text/5xl

        "title-5xl-regular": [
          "2.25rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        "title-5xl-semibold": [
          "2.25rem",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],

        //title/text/4xl

        "title-4xl-regular": [
          "1.875rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        "title-4xl-semibold": [
          "1.875rem",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],

        //title/text/3xl

        "title-3xl-regular": [
          "1.5rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        "title-3xl-semibold": [
          "1.5rem",
          {
            lineHeight: "133%",
            fontWeight: "600",
          },
        ],

        //title/text/2xl

        "title-2xl-regular": [
          "1.25rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        "title-2xl-semibold": [
          "1.25rem",
          {
            lineHeight: "160%",
            fontWeight: "600",
          },
        ],

        //title/text/xl

        "title-xl-regular": [
          "1.125rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        "title-xl-semibold": [
          "1.125rem",
          {
            lineHeight: "175%",
            fontWeight: "600",
          },
        ],

        //title/text/lg

        "title-lg-regular": [
          "1rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        "title-lg-semibold": [
          "1rem",
          {
            lineHeight: "175%",
            fontWeight: "600",
          },
        ],

        //title/text/md

        "title-md-regular": [
          "0.875rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        "title-md-semibold": [
          "0.875rem",
          {
            lineHeight: "170%",
            fontWeight: "600",
          },
        ],

        "title-md-semibold-UL": [
          "0.875rem",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],

        //title/text/sm

        "title-sm-regular": [
          "0.75rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        "title-sm-regular-UL": [
          "0.75rem",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],

        "title-sm-semibold": [
          "0.75rem",
          {
            lineHeight: "170%",
            fontWeight: "600",
          },
        ],

        "title-sm-semibold-UL": [
          "0.75rem",
          {
            lineHeight: "160%",
            fontWeight: "600",
          },
        ],
        //title/text/xs

        "title-xs-regular": [
          "0.625rem",
          {
            lineHeight: "135%",
            fontWeight: "400",
          },
        ],

        "title-xs-regular-UL": [
          "0.625rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],


        "title-xs-semibold": [
          "0.625rem",
          {
            lineHeight: "160%",
            fontWeight: "600",
          },
        ],

        "title-xs-semibold-UL": [
          "0.625rem",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],

        //title/text/2xs

        "title-2xs-regular": [
          "0.5rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        "title-2xs-medium": [
          "0.5rem",
          {
            lineHeight: "120%",
            fontWeight: "500",
          },
        ],

        "title-2xs-semibold": [
          "0.5rem",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],

        //title/text/3xs

        "title-3xs-regular": [
          "0.375rem",
          {
            lineHeight: "120%",
            fontWeight: "400",
          },
        ],

        "title-3xs-semibold": [
          "0.563rem",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],

        "title-3xs-regular-UL": [
          "0.375rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        //paragraph/text/xl

        "title-xl-regular": [
          "1.25rem",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],

        "title-xl-semibold": [
          "1.25rem",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],

        //paragraph/text/lg

        "title-lg-regular": [
          "1.125rem",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],

        "title-lg-semibold": [
          "1.125rem",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],

        //paragraph/text/md

        "title-md-regular": [
          "1rem",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],

        "title-md-semibold": [
          "1rem",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],

        //paragraph/text/sm

        "title-sm-regular": [
          "0.875rem",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],

        "title-sm-semibold": [
          "0.875rem",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],

        //paragraph/text/xs

        "title-xs-regular": [
          "0.75rem",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],

        "title-xs-semibold": [
          "0.75rem",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],

        //paragraph/text/2xs

        "title-2xs-regular": [
          "0.625rem",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],

        "title-2xs-semibold": [
          "0.625rem",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],
      },

      colors: {
        // neutral colors

        "neutral-00": "#FFF", //white
        "neutral-10": "#F5F5F5",
        "neutral-20": "#E6E6E6",
        "neutral-30": "#CCC",
        "neutral-40": "#999",
        "neutral-50": "#808080",
        "neutral-60": "#6C6C6C",
        "neutral-65": "#4D4D4D",
        "neutral-70": "#333",
        "neutral-75": "#262626",
        "neutral-80": "#1A1A1A",
        "neutral-90": "#101010",
        "neutral-100": "#000", // black

        // secondary colors

        "secondary-10": "#E7E9EC",
        "secondary-20": "#CED3D9",
        "secondary-30": "#B6BDC6",
        "secondary-40": "#9DA7B3",
        "secondary-50": "#8591A0",
        "secondary-60": "#6C7B8D",
        "secondary-70": "#54657A",
        "secondary-80": "#3B4F67",
        "secondary-90": "#273D58",
        "secondary-100": "#0A2341", //main
        "secondary-110": "#081C34",
        "secondary-120": "#07192E",
        "secondary-130": "#061527",
        "secondary-140": "#051221",
        "secondary-150": "#040E1A",
        "secondary-160": "#030B14",
        "secondary-170": "#02070D",
        "secondary-180": "#010407",

        // primary colors

        "primary-10": "#F8FDFC",
        "primary-20": "#F0F9F7",
        "primary-30": "#E1F4F0",
        "primary-40": "#D1EFE8",
        "primary-50": "#C2EAE1",
        "primary-55": "#B3E5D8",
        "primary-60": "#A4E0D1",
        "primary-65": "#95DBCA",
        "primary-70": "#85D5C3",
        "primary-75": "#76D0BB",
        "primary-80": "#67CBB4",
        "primary-85": "#58C6AC",
        "primary-90": "#49C1A5",
        "primary-95": "#3EB69A",
        "primary-100": " #39A78E", //main
        "primary-110": " #349881",
        "primary-120": " #2F8974",
        "primary-130": " #2A7A67",
        "primary-140": " #246A5A",
        "primary-150": " #1F5B4B",
        "primary-160": " #1A4C40",
        "primary-170": " #153D32",
        "primary-180": " #102E26",
        "primary-190": " #0B1E19",
        "primary-200": " #060F0C",

        // error colors

        "error-100": "#A92626",
        "error-90": "#D33030", //main
        "error-80": "#DC5959",
        "error-70": "#E06E6E",
        "error-60": "#E58383",
        "error-50": "#E99898",
        "error-40": "#EDACAC",
        "error-30": "#F2C1C1",
        "error-20": "#F6D6D6",
        "error-10": "#FBEAEA",

        // warning colors

        "warning-100": "#CC8F14",
        "warning-90": "#FFB319", //main
        "warning-80": "#FFC247",
        "warning-70": "#FFCA5E",
        "warning-60": "#FFD175",
        "warning-50": "#FFD98C",
        "warning-40": "#FFE1A3",
        "warning-30": "#FFE8BA",
        "warning-20": "#FFF0D1",
        "warning-10": "#FFF7E8",

        // success colors

        "success-100": "#052E16",
        "success-90": "#14532D",
        "success-80": "#166534",
        "success-70": "#15803D",
        "success-60": "#16A34A", // main 60
        "success-50": "#22C55E",
        "success-40": "#4ADE80",
        "success-30": "#86EFAC",
        "success-20": "#BBF7D0",
        "success-10": "#DCFCE7",


        //gradiant

        "green": "#16A085",
        "dark" : "#0A2341" ,
      },
      borderRadius: {
        'v-2xs': '0.125rem',
        'v-xs': '0.25rem',
        'v-sm': '0.375rem', //6 px
        'v-md': '0.5rem',  //8 px
        'v-lg': '0.625rem', //10 px
        'v-xl': '0.75rem', //12 px
        'v-2xl': '1rem',
        'v-3xl': '1.5rem',
        'v-4xl': '2rem',
        'v-5xl': '2.25rem',
      },
      minWidth: {
        '128': '16rem',
      },
      animation: {
        fade: 'fadeOut .5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { height:10 },
          '100%': { height:20 },
        },
      }),

    },
  },
  plugins: [],
};
