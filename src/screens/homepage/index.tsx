"use client";

import FormTest from "@/components/FormTest";
import { useTranslations } from "next-intl";
import { Button } from "antd";
import { useTheme } from "@/providers/ThemeContext";

const HomePage = () => {
  const t = useTranslations("common");

  const theme = useTheme();
  
  return (
    <div>
      <div style={{
        color: theme.token?.colorPrimary
      }}>Test Provider</div>
      Homepage_{t("welcome")}
      <FormTest />
      <Button>Default</Button>
    </div>
  );
}

export default HomePage;