import { base } from "@theme-ui/presets"

export default {
  ...base,

  fonts: {
    heading: "Nunito Sans , Conthrax",
    body: "Nunito Sans , Conthrax",
  },

  styles: {
    ...base.styles,
    a: {
      color: "black",
      "&:hover": {
        color: "gray",
        textDecoration: "underline",
      },
    },
    hr: {
      display: "block",
      height: "1px",
      border: 0,
      borderTop: "1px solid",
      borderColor: "gray",
      opacity: "0.3",
    },
    p: {
      color: `secondary`,
    },
    h5: {
      fontSize: 1,
      margin: 0,
    },
    h4: {
      color: "primary",
      fontSize: 1,
      margin: 0,
    },
    h1: {
      color: "primary",
    },
    h2: {
      fontSize: [`0.8rem`, `1.5rem`, `1.5rem`, `2rem`, `2rem`],
      color: "primary",
    },
    li: {
      fontSize: [`1.4rem`, `1rem`, `1rem`, `1rem`, `1rem`],
      fontWeight: [`800`, `1rem`, `1rem`, `1rem`, `1rem`],
      listStyleType: `none`,
      color: "primary",
    },
    h3: {
      margin: 0,
      fontSize: [`1rem`, `1rem`, `2rem`, `3rem`, `3rem`],
    },
  },

  colors: {
    text: "#3f3f3f",
    background: "black",
    primary: " #c5c0ab",
    secondary: `white`,
  },
  fontWeights: {
    medium: 600,
    bold: 800,
  },
  text: {
    // body: {
    //   fontFamily: `body`,
    //   color: `secondary`,
    // },
    heading: {
      fontFamily: `heading`,
    },
    bold: {
      fontWeight: 600,
    },
  },
  alerts: {
    primary: {
      border: "1px solid",
      borderColor: "gray",
      color: "black",
      bg: "white",
      fontWeight: "normal",
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      backgroundColor: "muted",
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  buttons: {
    primary: {
      color: "black",
      bg: " #c5c0ab",
      border: "1px solid",
      borderColor: "black",
      fontWeight: 600,
      "&:hover": {
        bg: "primary",
        cursor: "pointer",
        color: "white",
        border: `none`,
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
    link: {
      color: "black",
      textDecoration: "underline",
      padding: 0,
      background: "transparent",
      "&:hover": {
        color: "gray",
        cursor: "pointer",
      },
    },
  },
  breakpoints: ["480px", "991px", "1050px", "1300px", "1600px"],
}
