import "bootstrap/dist/css/bootstrap.css";
import "../styles/normalize.css";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
