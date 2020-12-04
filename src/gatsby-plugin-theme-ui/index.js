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
      // textDecoration: `none`,
    },
    h4: {
      fontSize: 1,
    },
    li: {
      fontSize: [`0.6rem`, `1rem`, `1rem`, `1rem`, `1rem`],
      listStyleType: `none`,
      color: "primary",
    },
    h3: {
      margin: 0,
      fontSize: [`1rem`, `1rem`, `2rem`, `3rem`, `3rem`],
    },
  },

  colors: {
    text: "#888888",
    background: " #cfa600",
    primary: "#888888",
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
  breakpoints: ["480px", "800px", "1050px", "1300px", "1600px"],
}
