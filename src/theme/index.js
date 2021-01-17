import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6ec6ff",
      main: "#2196f3",
      dark: "#0069c0",
      contrastText: "#000000",
    },
    secondary: {
      light: "#ff7e4a",
      main: "#f44a1c",
      dark: "#b90000",
      contrastText: "#ffffff",
    },
    red: {
      light: "#ff3d41",
      main: "#ff0000",
      dark: "#dc0005",
    },
    green: {
      light: "#7ed321",
      main: "#00ac4d",
      dark: "#094c59",
    },
    blue: {
      dark: "rgba(10, 32, 41)",
    },
    grey: {
      light: "#dddddd",
      main: " #949494",
      dark: "#3c3b37",
    },
    white: {
      main: "#ffffff",
      dark: "#9b9b9b",
    },
    text: {
      primary: "#000000",
      secondary: "#f44a1c",
    },
    yellow: {
      light: "#dbf030",
      main: "#ffdc09",
      dark: "	#f9ac1b",
    },
  },
  background: {
    dark: "#000",
  },
  spacing: 10,
  shape: {
    borderRadius: 5,
  },
  typography: {
    h1: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 600,
      fontSize: "1.0rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiPickersCalendarHeader: {
      switchHeader: {
        "& button": {
          outline: "none",
        },
      },
    },
    MuiPickersCalendar: {
      week: {
        "& button": {
          outline: "none",
        },
      },
    },
    MuiPickersTimePickerToolbar: {
      hourMinuteLabel: {
        "& button": {
          outline: "none",
          "&:hover": {
            background: "none",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0, // smallMobile
      xsm: 375, // mediumMobile
      sm: 576, // largeMobile
      md: 768, // tablet
      lg: 992, // laptop
      xl: 1200, // desktop
      xxl: 1700, // large screen
    },
  },
});
export default theme;
