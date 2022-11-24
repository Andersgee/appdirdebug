import "./globals.css";
import { Montserrat } from "@next/font/google";
import { SessionProvider } from "lib/context/SessionContext";
import { DialogProvider } from "lib/context/DialogContext";
import { TrpcProvider } from "lib/context/TrpcContext";

//https://beta.nextjs.org/docs/optimizing/fonts#with-tailwind-css
//const oswald = Oswald({ weight: "variable", subsets: ["latin"], variable: "--font-paragraph" });
const montserrat = Montserrat({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-paragraph",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
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
