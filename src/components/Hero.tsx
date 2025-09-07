"use client";
import { motion } from "framer-motion";

export const Hero = () => (
    <div className="flex flex-col md:flex-row">
        <div className="py-2">
            <h1 className="font-bold text-4xl md:text-5xl text-center leading-tight pt-12 pb-10 dark:text-white">
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
                className="font-bold text-4xl md:text-5xl text-center leading-tight px-12 pb-3 opacity-0 dark:text-white max-w-4xl mx-auto"
            >
                a full stack engineer who ships products that reshape how businesses operate
            </motion.h1>
        </div>
        <div className="py-4 flex justify-center items-center space-x-3">
            <button 
                onClick={() => {
                    const element = document.getElementById("about");
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }}
                className="h-1/4 items-center text-2xl bg-blue-600 dark:bg-blue-500 text-white py-4 px-5 rounded hover:bg-blue-500 dark:hover:bg-blue-400 transition hover:duration-300 group"
            >
                More about me <span className="inline-block transition-transform transform group-hover:translate-x-1">-&gt;</span>
            </button>
        </div>
    </div>
)

