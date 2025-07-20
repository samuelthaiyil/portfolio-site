import { Description } from "@/components/Description";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
    return (
        <>
            <Nav />
            <div className="min-h-screen bg-white dark:bg-black overflow-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style jsx>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                <div className="container mx-auto px-4 py-16 overflow-hidden">
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
                                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                                I build intelligent systems that solve complex problems.
                                </h1>
                                <div className="space-y-6">
                                    <p>
                                        I'm a Full Stack Engineer at PledgX, a Toronto based fintech startup. I use React, Typescript and Python Flask to architect and deploy AI workflows that drive operational efficiency in financial systems.
                                    </p>
                                    <p>
                                        I first developed a passion for building at age 12, teaching myself C++ and Direct3D to create a 3D game engine. This early spark led me to earn my BSc in Computer Science from Lakehead University, and I&apos;m currently completing my MSc in Computer Information Systems with a concentration in Data Analytics at Boston University to stay at the forefront of emerging technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}