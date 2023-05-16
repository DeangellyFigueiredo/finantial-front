import { colors } from "../../shared/themes";

export const titleStyle = {
  fontWeight: 500,
  colors: "#5e548e",
  fontSize: "24px",
};

export const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "2.5rem",
  marginBottom: "2rem",
  colors: "#5e548e",
};

export const actions = {
  display: "flex",
  height: "2.5rem",
  gap: "0.3125rem",
  color: "#ffffff",
  backgroundColor: "#29658a",
  "&:hover": {
    backgroundColor: "#222546",
  },
};
