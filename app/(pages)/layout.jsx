import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import "./_globals/globals.scss";
import { Inter, Merriweather } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font2",
  display: "swap",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font1",
  display: "swap",
  preload: false,
});

export const metadata = {
  title: "JVMC",
  description: "Serving the health care needs of uninsured drug users, sex workers, trans folks, and their families regardless of documentation status.",
  appleWebApp: {
    title: "JVMC",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
