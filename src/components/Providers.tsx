"use client";

import type { ReactNode } from "react";
import { App, ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#176B68",
    colorInfo: "#176B68",
    colorLink: "#176B68",
    colorTextBase: "#142B3B",
    colorBgBase: "#FFFFFF",
    colorBorder: "#DAD5C8",
    borderRadius: 10,
    fontFamily: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif",
  },
  components: {
    Button: {
      fontWeight: 600,
      primaryShadow: "none",
      defaultShadow: "none",
    },
    Input: {
      activeBorderColor: "#176B68",
      hoverBorderColor: "#176B68",
    },
    Drawer: {
      colorBgElevated: "#F8F6F0",
    },
  },
};

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider theme={theme}>
      <App>{children}</App>
    </ConfigProvider>
  );
}
