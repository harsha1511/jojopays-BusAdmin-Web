module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e2c",
        secondary: "#242636",
        tertiary: "#3E4050",
        quaternary: "#2F3142",
        quinary: "#484A5A",
        primaryText: "#3973FF",
        secondaryText: "#FF0783",
        tertiaryText: "#2C2B4F",
        quaternaryText: "#50FF84",
        quinaryText: "#EFFF50",
        greyText : "#A8A8A8",
        yellowText: "#E0FF40",
        pinkText : "#FF4188",
        redText : "#FF5050",
        violetText: "#6C50FF",
        blueText: "#0095E2"
      },
      backgroundImage: {
        "signin-cover": "url(./assets/images/signin-cover.png)",
        "signup-cover": "url(./assets/images/signup-cover.svg)",
        calendar: "url(./assets/images/calendar.png)",
        "driver-cover": "url(./assets/images/driver-cover.svg)",
        "add-driver-cover": "url(./assets/images/add-driver.png)",
      },
      screens: {
        "mb" : "500px"
      },
      gridColumnEnd: {
        "15" : "15"
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
