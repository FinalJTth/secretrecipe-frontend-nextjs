const inputStyle = {
  baseStyle: props => ({
    ...props,
  }),

  sizes: {
    default: {},
  },

  variants: {
    default: {},

    underline: {
      _hover: { bg: "teal.600" },
      _focus: {
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 144, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        bg: "teal.600",
        borderColor: "#bec3c9",
        borderWidth: "0px",
      },
      _active: {
        bg: "teal.700",
      },
    },

    unstyled: {},
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

export default inputStyle;
