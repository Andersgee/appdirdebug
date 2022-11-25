import "./globals.css";
import { Montserrat } from "@next/font/google";
import { SessionProvider } from "lib/context/SessionContext";
import { DialogProvider } from "lib/context/DialogContext";
import { TrpcProvider } from "lib/context/TrpcContext";
import Script from "next/script";

//https://beta.nextjs.org/docs/optimizing/fonts#with-tailwind-css
//const oswald = Oswald({ weight: "variable", subsets: ["latin"], variable: "--font-paragraph" });
const montserrat = Montserrat({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-paragraph",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head />
      <Script id="theme-script">{`console.log('Hello world!');`}</Script>
      <SessionProvider>
        <TrpcProvider>
          <DialogProvider>
            <body>{children}</body>
          </DialogProvider>
        </TrpcProvider>
      </SessionProvider>
    </html>
  );
}
