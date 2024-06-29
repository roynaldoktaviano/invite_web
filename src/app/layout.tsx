import type { Metadata } from "next";
import { Inter, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import footerNav from "./component/footerNav";
import HeadNav from "./component/headNav";

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
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F77JHZ52R0"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-F77JHZ52R0');
        </script>
      </head>
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
