import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight:"400",
  variable: '--font-poppins'
});

export const metadata  =  {
  title: "Propre et Vert",
  description: "Nettoyage Écologique B2B et Réinsertion Sociale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
              href="https://fonts.googleapis.com/css2?Swash&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet" />
    </Head>
      <body className={poppins_init.className}>{children}</body>
    </html>
  );
}
