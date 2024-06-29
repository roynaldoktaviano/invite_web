import type { Metadata } from "next";
import { Inter, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import footerNav from "./component/footerNav";
import HeadNav from "./component/headNav";
import GoogleAnalytics from "./component/GoogleAnalytics";

const inter = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invite You Invitation",
  description: "Invite You - Create Your Digital Invitation",
  openGraph: {
    images: ['/img_1.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics/>
      <body className={inter.className}>
        <Provider>
          <HeadNav/>
          {children}
          {footerNav()}
        </Provider>
      </body>
    </html>
  );
}
