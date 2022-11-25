import "./globals.css";
import { Montserrat } from "@next/font/google";
import { SessionProvider } from "lib/context/SessionContext";
import { DialogProvider } from "lib/context/DialogContext";
import { TrpcProvider } from "lib/context/TrpcContext";
import { SignInDialog } from "./Signin";
import { Nav } from "./Nav";
import { Header } from "./Header";
//import Script from "next/script";
//import { THEME_SCRIPT_STRING } from "lib/utils/theme";

//https://beta.nextjs.org/docs/optimizing/fonts#with-tailwind-css
//const oswald = Oswald({ weight: "variable", subsets: ["latin"], variable: "--font-paragraph" });
const montserrat = Montserrat({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-paragraph",
});

//<Script id="theme-script">{THEME_SCRIPT_STRING}</Script>
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} dark`}>
      <head />
      <SessionProvider>
        <TrpcProvider>
          <DialogProvider>
            <body>
              <SignInDialog />
              <div
                className="container grid 
              grid-cols-phone grid-rows-phone
              sm:grid-cols-sm sm:grid-rows-sm md:grid-cols-md lg:grid-cols-lg xl:grid-cols-xl 2xl:grid-cols-2xl 3xl:grid-cols-3xl"
              >
                <Nav className="fixed bottom-0 h-12 w-full border-t bg-yellow-500 sm:h-full sm:w-16 sm:border-t-0 md:w-20 3xl:w-72" />
                <Header className="feedwidth fixed h-12 bg-orange-500 sm:ml-16 md:ml-20 3xl:ml-72" />
                <main className="row-start-2 bg-red-500 sm:col-start-2">{children}</main>
                <aside className="hidden bg-purple-500 xl:col-start-3 xl:row-span-2 xl:row-start-1 xl:block">
                  <article className="px-2 pt-1">
                    <h2>What is this?</h2>
                    <p>
                      Musker is a twitter clone built with the latest (experimental) features of nextjs 13 such as
                      server components and more.
                    </p>
                  </article>
                </aside>
              </div>
            </body>
          </DialogProvider>
        </TrpcProvider>
      </SessionProvider>
    </html>
  );
}
