// pages/_app.tsx
import '../app/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: "--font-instrument-sans"
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={instrumentSans.className}>
            <ThemeProvider>
                <Component {...pageProps} />
                <Analytics 
                    mode="production"
                    debug={process.env.NODE_ENV === 'development'}
                />
            </ThemeProvider>
        </div>
    );
}

export default MyApp;
