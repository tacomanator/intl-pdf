import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Formats } from "next-intl";

export const formats: Partial<Formats> = {
  number: {
    currency: {
      style: "currency",
      currency: "JPY",
      currencyDisplay: "name",
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Asia/Tokyo"
      now={new Date(pageProps.now)}
      formats={formats}
      messages={pageProps.messages}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
