import ClientProviders from "@/providers/ClientProviders";
import { useLocale, useMessages, useTimeZone } from "next-intl";
import "@/app/global.css";
import AppThemeProvider from "@/providers/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = useMessages();
  const locale = useLocale();
  const timeZone = useTimeZone();

  return (
    <ClientProviders messages={messages} locale={locale} timeZone={timeZone} >
      <AppThemeProvider>
        <html lang={locale}>
          <body>{children}</body>
        </html>
      </AppThemeProvider>
    </ClientProviders>
  );
}
