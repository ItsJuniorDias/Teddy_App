interface ThemeProps {
  fonts: {
    regular: string;
    medium: string;
    bold: string;
  };
  colors: {
    primaryButton: string;
    white: string;
    grayInput: string;
    black: string;
    grayBackground: string;
    grayBottom: string;
  };
}

export const theme: ThemeProps = {
  fonts: {
    regular: "Roboto-Regular",
    medium: "Roboto-Medium",
    bold: "Roboto-Bold",
  },
  colors: {
    primaryButton: "#ec6724",
    white: "#ffffff",
    grayInput: "#d9d9d9",
    black: "#000000",
    grayBottom: "#7A7A7A",
    grayBackground: "#F5F5F5",
  },
};
