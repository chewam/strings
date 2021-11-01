import "../styles/tailwind.css";
import "../styles/globals.scss";

import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider
      session={pageProps.session}
      options={{ clientMaxAge: 0, keepAlive: 0 }}
    >
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
