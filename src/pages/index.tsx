import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Description } from "@/components/Description";

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <Description />
            <Footer />
        </>
    )
}
