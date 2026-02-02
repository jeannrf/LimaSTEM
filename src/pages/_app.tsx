import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Poppins } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <main className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  );
}
