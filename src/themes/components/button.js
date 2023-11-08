const buttonStyle = {
  baseStyle: props => ({
    fontWeight: (props && props.fontWeight) || "semibold",
    fontSize: props && props.fontSize,
  }),

  sizes: {
    default: {},
    sm: {
      fontSize: "12px",
      px: "10px",
    },
    md: {
      fontSize: "16px",
      px: "15px",
    },
    lg: {
      fontSize: "20px",
      px: "20px",
    },
    xl: {
      fontSize: "24px",
      px: "25px",
    },
    solidsm: {
      fontSize: "16px",
      px: "14px",
      h: "30px",
    },
    solidmd: {
      fontSize: "18px",
      px: "18px",
      h: "36px",
    },
    solidlg: {
      fontSize: "20px",
      px: "22px",
      h: "42px",
    },
    solidxl: {
      fontSize: "22px",
      px: "26px",
      h: "48px",
    },
  },

  variants: {
    outline: {
      border: "1px solid",
      borderColor: "teal.300",
      color: "teal.500",
      _hover: { bg: "" },
      _focus: {
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 144, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        bg: "rgba(178, 245, 234, 0.2)",
        borderColor: "teal.500",
        borderWidth: "2px",
      },
      _active: {
        bg: "rgba(129, 230, 217, 0.3)",
      },
    },

    solid: props => ({
      bg: props.colorMode === "light" ? "teal.500" : "teal.900",
      color: props.color || "teal.100",
      rounded: props.rounded || { sm: "sm" },
      _hover: { bg: props.colorMode === "light" ? "teal.600" : "teal.800" },
      _focus: {
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 144, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        bg: props.colorMode === "light" ? "teal.600" : "teal.800",
        borderColor: "#bec3c9",
        borderWidth: "0px",
      },
      _active: {
        bg: props.colorMode === "light" ? "teal.700" : "teal.800",
      },
    }),

    ghost: props => ({
      color: props.colorMode === "light" ? "teal.500" : "teal.600",
      _hover: { bg: "" },
      _focus: {
        boxShadow: "outline",
        bg: "teal.600",
        borderColor: "teal.900",
        borderWidth: "0px",
      },
      _active: {
        bg: props.colorMode === "light" ? "teal.700" : "teal.800",
      },
      _expanded: { bg: props.colorMode === "light" ? "teal.500" : "teal.700" },
      transition: "all 0.2s",
    }),

    link: props => ({
      fontWeight: (props && props.fontWeight) || "normal",
      _hover: { fontWeight: "semibold", textDecoration: "underline" },
      _focus: {
        boxShadow: "",
      },
    }),

    linkHeader: props => ({
      color: props.colorMode === "light" ? "teal.900" : "teal.100",
      fontWeight: (props && props.fontWeight) || "bold",
      _hover: {},
      _focus: {
        boxShadow: "",
      },
    }),

    profile: props => ({
      color: props.colorMode === "light" ? "teal.500" : "teal.600",
      _hover: { bg: "" },
      _focus: {
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 144, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        bg: props.colorMode === "light" ? "teal.700" : "teal.800",
        borderColor: props.colorMode === "light" ? "teal.800" : "teal.900",
        borderWidth: "0px",
      },
      _active: {
        bg: props.colorMode === "light" ? "teal.800" : "teal.900",
      },
      _expanded: { bg: props.colorMode === "light" ? "teal.600" : "teal.700" },
      transition: "all 0.2s",
    }),

    unstyled: props => ({
      fontWeight: (props && props.fontWeight) || "normal",
    }),

    dragndrop: props => ({
      backgroundColor: props.colorMode === "light" ? "teal.200" : "teal.700",
      border: "1px",
      borderColor: props.colorMode === "light" ? "teal.300" : "teal.800",
      textColor: "white",
      fontSize: "18px",
      overflowY: "auto",
      overflowX: "hidden",
      align: "center",
      justify: "center",
    }),
  },
  // The default size and variant values
  defaultProps: {
    size: "solidmd",
    variant: "solid",
  },
};

export default buttonStyle;
