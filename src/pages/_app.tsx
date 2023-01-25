import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Notification from "../components/Notification";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <>
      <NavBar />
      <div className="p-10">
        <Component {...pageProps} />
        <Notification />
      </div>
      </>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);