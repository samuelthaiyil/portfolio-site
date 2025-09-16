import Head from 'next/head';
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
import { Nav } from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

type Project = { name: string; stack: string; description: string; url: string; viewMethod: string }

const projects: Project[] = [
    {
        name: "Searchr AI",
        stack: "React, Next.js, TypeScript, Convex, TwelveLabs, Mux",
        description: "A video searching platform that leverages vision AI and transcription to find relevant clips based on the users' search based on a library of videos",
        url: "https://www.loom.com/share/d304e8eee6a24b4690b33736873cd3d5?sid=0302b3b2-71c0-4fef-92c1-8956b17b1c3e",
        viewMethod: "Watch Demo"
    },
    {
        name: "Redactify",
        stack: "React, Next.js, TypeScript, Tesseract.js",
        description: "A web application that leverages OCR to redact sensitive information from PDFs",
        url: "https://redactify-kappa.vercel.app/",
        viewMethod: "Try Project"
    }
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Sam Thaiyil</title>
                <meta name="description" content="Sam Thaiyil&apos;s personal website" />
            </Head>
            <Nav />
            {/* About Section */}
            <section id="about" className="min-h-screen bg-white dark:bg-black overflow-hidden pt-20" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style jsx>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                <div className="container mx-auto px-4 py-8 overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Headshot Section */}
                            <div className="flex justify-center md:justify-start">
                                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-700 dark:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25)]">
                                    <Image
                                        src="/headshot.jpg"
                                        alt="Sam Thaiyil"
                                        fill
                                        className="object-cover"
                                        priority
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.innerHTML = `
                                                    <div class="flex items-center justify-center w-full h-full text-gray-500 dark:text-gray-400">
                                                        <div class="text-center">
                                                            <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                                            </svg>
                                                            <p class="text-sm">Add your headshot as<br/>headshot.jpg in public/</p>
                                                        </div>
                                                    </div>
                                                `;
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            
                            {/* Description Section */}
                            <div className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed">
                                <div className="space-y-6">
                                    <p>
                                        Hey! I&apos;m <strong>Sam</strong>. I&apos;m from Toronto and I&apos;m a Full Stack Engineer at PledgX, a fintech startup, where I recently used React, Typescript and Flask to lead the development an AI financial document data extractor that reduces manual data entry by 30&#37;.
                                    </p>
                                    <p>
                                        I first developed a passion for building at age 12, teaching myself C++ and Direct3D to create a 3D game engine. This early spark led me to earn my BSc in Computer Science from Lakehead University, and I&apos;m currently completing my MSc in Computer Information Systems with a concentration in Data Analytics at Boston University to stay at the forefront of emerging tech.
                                    </p>
                                    <p>
                                        When I&apos;m not building I love the gym, reading into stoic philsophy and playing chess. 
                                    </p>
                                    <p>
                                        Check out my{" "}
                                        <button 
                                            onClick={() => {
                                                const element = document.getElementById("projects");
                                                if (element) {
                                                    element.scrollIntoView({ behavior: "smooth" });
                                                }
                                            }}
                                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors duration-200"
                                        >
                                            projects
                                        </button>
                                        {" "}to explore some cool things I&apos;ve built
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Projects Section */}
            <section id="projects" className="min-h-screen bg-white dark:bg-black py-16 pt-32">
                <div className="container mx-auto px-8">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>
                    <div className="max-w-4xl mx-auto">
                        {
                            projects.map(({name, stack, description, url, viewMethod }) => {
                                return (
                                    <div className="py-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0" key={name}>
                                        <h3 className="text-2xl font-bold pb-2 text-gray-900 dark:text-white">{name}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 pb-3 text-lg">{stack}</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">{description}</p>
                                        <div className="py-2">
                                            <a href={url} target="_blank"
                                               className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition hover:duration-300 group inline-flex items-center text-lg">
                                                {viewMethod}<span
                                                className="inline-block transition-transform transform group-hover:translate-x-1 ml-2">→</span>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    )
}
