// pages/_app.tsx
import '../app/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Newsreader } from "next/font/google";
import { useEffect } from 'react';
import posthog from 'posthog-js';

const newsreader = Newsreader({ 
  subsets: ["latin"],
  variable: "--font-newsreader"
});

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
            posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
                api_host: "/ingest",
                ui_host: "https://us.posthog.com",
                debug: true, 
                loaded: (posthog) => {
                    console.log('PostHog loaded');
                },
            });
        } else {
            console.error('NEXT_PUBLIC_POSTHOG_KEY is not set');
        }
    }, []);
    return (
        <div className={newsreader.className}>
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
