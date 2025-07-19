// pages/_app.tsx
import '../app/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Instrument_Sans } from "next/font/google";
import { useEffect } from 'react';
import posthog from 'posthog-js';

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: "--font-instrument-sans"
});

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
            posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
                api_host: "/ingest",
                ui_host: "https://us.posthog.com",
                debug: process.env.NODE_ENV === "development",
            });
        }
    }, []);
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
