"use client";

import { NextIntlClientProvider, useTranslations } from "next-intl";
import { SnackbarProvider } from "notistack";
import { ComponentProps } from "react";

const defaultTRef = (key: string) => key;
defaultTRef.rich = (key: string) => key;
defaultTRef.markup = (key: string) => key;
defaultTRef.raw = (key: string) => key;

export const tRef: { current: ReturnType<typeof useTranslations<never>> } = {
  current: defaultTRef,
};

const TranslationRefProvider = () => {
  const t = useTranslations();
  tRef.current = t;

  return null;
};

export default function ClientProviders(
  props: ComponentProps<typeof NextIntlClientProvider>,
) {
  return (
    <NextIntlClientProvider
      defaultTranslationValues={{
        b: (chunks) => <b>{chunks}</b>,
        u: (chunks) => <u>{chunks}</u>,
      }}
      {...props}
    >
      {props.children}
      <TranslationRefProvider />
      <SnackbarProvider
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        autoHideDuration={4000}
      />
    </NextIntlClientProvider>
  );
}
