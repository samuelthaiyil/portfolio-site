"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => (
    <>
        <div className="py-2">
            <h1 className="font-bold text-5xl text-center leading-tight pt-12 pb-10 dark:text-white">
                <motion.span
                    animate={{ y: -30, opacity: 100 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="opacity-0"
                >
                    Hi!{" "}
                </motion.span>
                <motion.span
                    animate={{ y: -30, opacity: 100 }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
                    className="opacity-0"
                >
                    I&apos;m Sam, <br></br>
                </motion.span>
            </h1>
            <motion.h1
                animate={{ y: -30, opacity: 100 }}
                transition={{ ease: "easeOut", duration: 1, delay: 1.8 }}
                className="font-bold text-5xl text-center leading-tight px-12 pb-3 opacity-0 dark:text-white max-w-4xl mx-auto"
            >
                a full stack engineer who ships products that reshape how businesses operate
            </motion.h1>
        </div>
        <div className="py-4 flex justify-center space-x-3">
            <a href="https://github.com/samuelthaiyil" target="_blank" className="text-2xl bg-zinc-700 dark:bg-zinc-600 text-white py-4 px-5 rounded hover:bg-zinc-600 dark:hover:bg-zinc-500 hover:duration-300">
                <svg className="fill-white w-7 h-7 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
            </a>
            <Link href="/about" className="text-2xl bg-blue-600 dark:bg-blue-500 text-white py-4 px-5 rounded hover:bg-blue-500 dark:hover:bg-blue-400 transition hover:duration-300 group">
                More about me <span className="inline-block transition-transform transform group-hover:translate-x-1">-&gt;</span>
            </Link>
        </div>
    </>
)

