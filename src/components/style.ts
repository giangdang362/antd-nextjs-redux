import { createStyles } from "antd-style";

export const useStyleForm = createStyles(({token, css}) => ({
  container: {
    backgroundColor: token.colorBgLayout,
    color: token.colorPrimary
  }
}));
