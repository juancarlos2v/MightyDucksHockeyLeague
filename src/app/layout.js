import "bootstrap/dist/css/bootstrap.css";
import "../styles/normalize.css";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
