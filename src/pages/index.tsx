import Head from 'next/head';
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Description } from "@/components/Description";

export default function Home() {
    return (
        <>
            <Head>
                <title>Sam Thaiyil</title>
                <meta name="description" content="Sam Thaiyil's personal website" />
            </Head>
            <Nav />
            <Hero />
            <Description />
            <Footer />
        </>
    )
}
