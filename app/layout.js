import "bootstrap/dist/css/bootstrap.css";
import "@styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

// export const metadata = {
//   name: "viewport",
//   content: "width=device-width, initial-scale=1, shrink-to-fit=no",
// };

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
