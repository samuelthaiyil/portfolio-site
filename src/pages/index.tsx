import Head from "next/head";
import Footer from "@/components/Footer";
import { Nav } from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Project = {
  name: string;
  stack: string;
  description: string;
  url: string;
  viewMethod: string;
};

type SectionId = "about" | "more-about-me" | "projects" | "reading-list";

const NavigationButtons = ({
  currentSection,
  onNavigate,
}: {
  currentSection: SectionId;
  onNavigate: (section: SectionId, direction: "next" | "prev") => void;
}) => {
  const [isNextHovered, setIsNextHovered] = useState(false);
  const [isPrevHovered, setIsPrevHovered] = useState(false);

  const sections: SectionId[] = [
    "about",
    "more-about-me",
    "projects",
    "reading-list",
  ];
  const currentIndex = sections.indexOf(currentSection);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < sections.length - 1;

  const sectionNames = {
    about: "intro",
    "more-about-me": "about",
    projects: "projects",
    "reading-list": "reading",
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-8">
      {/* Previous Section Button */}
      {canGoPrev && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={() => onNavigate(sections[currentIndex - 1], "prev")}
            onMouseEnter={() => setIsPrevHovered(true)}
            onMouseLeave={() => setIsPrevHovered(false)}
            className="flex flex-col items-center text-white hover:text-white transition-colors duration-300 group"
          >
            <motion.div
              animate={{ y: isPrevHovered ? -4 : 0 }}
              transition={{
                duration: 1,
                repeat: isPrevHovered ? 0 : Infinity,
                repeatType: "reverse",
              }}
              className="w-6 h-6 md:w-8 md:h-8 mb-2"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </motion.div>
            <span className="text-sm md:text-base font-medium text-center px-2">
              {sectionNames[sections[currentIndex - 1]]}
            </span>
          </button>
        </motion.div>
      )}

      {/* Next Section Button */}
      {canGoNext && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={() => onNavigate(sections[currentIndex + 1], "next")}
            onMouseEnter={() => setIsNextHovered(true)}
            onMouseLeave={() => setIsNextHovered(false)}
            className="flex flex-col items-center text-white hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm md:text-base font-medium mb-2 text-center px-2">
              {sectionNames[sections[currentIndex + 1]]}
            </span>
            <motion.div
              animate={{ y: isNextHovered ? 4 : 0 }}
              transition={{
                duration: 1,
                repeat: isNextHovered ? 0 : Infinity,
                repeatType: "reverse",
              }}
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </button>
        </motion.div>
      )}
    </div>
  );
};

const projects: Project[] = [
  {
    name: "Searchr AI",
    stack: "React, Next.js, TypeScript, Convex, TwelveLabs, Mux",
    description:
      "Built a video search platform that enables engineering and sales teams to search across thousands of recordings. The system leverages vision AI and transcription to identify and retrieve relevant clips from a large video library based on user queries.",
    url: "https://www.loom.com/share/d304e8eee6a24b4690b33736873cd3d5?sid=0302b3b2-71c0-4fef-92c1-8956b17b1c3e",
    viewMethod: "Watch Demo",
  },
  {
    name: "Redactify",
    stack: "React, Next.js, TypeScript, Tesseract.js",
    description:
      "Developed a platform for legal, compliance, and operations teams that uses OCR to automatically detect and redact sensitive information from PDFs, ensuring secure document sharing and compliance.",
    url: "https://redactify-kappa.vercel.app/",
    viewMethod: "Try Project",
  },
];

// Section Components
const AboutSection = () => (
  <div className="container mx-auto px-4 md:px-8 py-8 h-full flex items-center">
    <div className="max-w-6xl mx-auto h-full">
      <div className="grid md:grid-cols-2 gap-12 items-center h-full min-h-[calc(100vh-10rem)]">
        <div className="text-white text-center md:text-left text-lg md:text-xl leading-relaxed flex flex-col justify-center">
          <div className="space-y-4 md:space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Hey, I&apos;m <strong>Sam</strong>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              I&apos;m a Full Stack Engineer at a fintech startup based in
              Toronto, where I&apos;m building AI pipelines that accelerate risk
              assessment.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              I love building beautiful, scalable software that elegantly solves
              a hard problem.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MoreAboutSection = () => (
  <div className="container mx-auto px-4 md:px-8 py-8 md:py-0 h-full flex items-center">
    <div className="max-w-4xl mx-auto text-center">
      <div className="max-w-3xl mx-auto text-left">
        <ul className="list-none space-y-4 md:space-y-6 text-base md:text-lg text-white leading-relaxed">
          <li className="flex items-start space-x-3">
            <span className="text-white mt-1">•</span>
            <span>
              I have a BSc in CS and I&apos;m currently working an MSc @ Boston
              University
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-white mt-1">•</span>
            <span>
              First developed a passion for building at 12 when I taught myself
              C++ and Direct3D and built a 3D game engine.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-white mt-1">•</span>
            <span>
              Worked at a EMR SaaS startup where I built a calendar system for
              patient appointments, validation systems for healthcard
              (government ID) and a PDF field mapper that allowed mapped PDfs to
              be filled out later using text input
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-white mt-1">•</span>
            <span>
              Worked at a marketing agency where I built and maintained 11+
              high-traffic advertising sites built in and React Next.js, and
              built an web scraping bot that would scrape data from an LLM and
              add it to our CRM
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-white mt-1">•</span>
            <span>
              Currently working on a Clay-esque enrichment platform project
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => (
  <div className="container mx-auto px-4 md:px-8 py-8 md:py-0 h-full flex items-center">
    <div className="max-w-4xl mx-auto">
      <div>
        {projects.map(({ name, stack, description, url, viewMethod }) => (
          <div className="py-6 md:py-8" key={name}>
            <h3 className="text-xl md:text-2xl font-bold pb-2 text-white">
              {name}
            </h3>
            <p className="text-white pb-3 text-base md:text-lg">{stack}</p>
            <p className="text-white text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              {description}
            </p>
            <div className="py-2">
              <a
                href={url}
                target="_blank"
                className="bg-transparent border border-white text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-white hover:text-black transition hover:duration-300 group inline-flex items-center text-base md:text-lg"
              >
                {viewMethod}
                <span className="inline-block transition-transform transform group-hover:translate-x-1 ml-2">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ReadingSection = () => (
  <div className="container mx-auto px-4 md:px-8 py-8 md:py-0 h-full flex items-center">
    <div className="max-w-4xl mx-auto text-center">
      <div className="max-w-3xl mx-auto text-left">
        <ul className="list-none space-y-4 md:space-y-6 text-base md:text-lg text-white leading-relaxed">
          <li className="flex items-start space-x-3">
            <span>
              <a
                href="https://www.sahilbloom.com/newsletter/the-4-types-of-luck"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white underline transition-colors duration-200"
              >
                The 4 Types of Luck - Sahil Bloom
              </a>
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span>
              <a
                href="https://www.paulgraham.com/schlep.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white underline transition-colors duration-200"
              >
                Schlep Blindness - Paul Graham
              </a>
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span>
              <a
                href="https://jamesclear.com/shadow-side"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white underline transition-colors duration-200"
              >
                The Shadow Side of Greatness - James Clear
              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white underline transition-colors duration-200"
              >
                Designing Data-Intensive Applications - Martin Kleppmann
              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                href="https://lawsofux.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white underline transition-colors duration-200"
              >
                Laws of UX
              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                href="https://www.amazon.ca/Thinking-Systems-Primer-Donella-Meadows/dp/1603580557"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white underline transition-colors duration-200"
              >
                Thinking in Systems - Donella H. Meadows
              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                href="https://www.amazon.ca/Ultralearning-Essential-Mastering-Skills-Future-Proofing/dp/006285268X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white underline transition-colors duration-200"
              >
                Ultralearning - Scott H. Young
              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                href="https://www.amazon.ca/Obstacle-Way-Timeless-Turning-Triumph/dp/1591846358"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white underline transition-colors duration-200"
              >
                The Obstacle Is The Way - Ryan Holiday
              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                href="https://www.amazon.ca/Statistics-Data-Analysis-Financial-Engineering/dp/1461427495"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white underline transition-colors duration-200"
              >
                Statistics and Data Analysis for Financial Engineering - David Ruppert
              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                href="https://www.amazon.ca/Statistics-Data-Analysis-Financial-Engineering/dp/1461427495"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white underline transition-colors duration-200"
              >
                The 7 Habits of Highly Effective People - Stephen Covey
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [currentSection, setCurrentSection] = useState<SectionId>("about");
  const [navigationDirection, setNavigationDirection] = useState<
    "next" | "prev"
  >("next");

  const handleNavigation = (section: SectionId, direction: "next" | "prev") => {
    setNavigationDirection(direction);
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <AboutSection key="about" />;
      case "more-about-me":
        return <MoreAboutSection key="more-about-me" />;
      case "projects":
        return <ProjectsSection key="projects" />;
      case "reading-list":
        return <ReadingSection key="reading-list" />;
      default:
        return <AboutSection key="about" />;
    }
  };

  return (
    <>
      <Head>
        <title>Sam Thaiyil</title>
        <meta name="description" content="Sam Thaiyil's personal website" />
      </Head>
      <Nav />

      {/* Single Section with Dynamic Content */}
      <section className="min-h-screen h-screen pt-20 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{
              opacity: 0,
              y: navigationDirection === "next" ? 15 : -15,
            }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: navigationDirection === "next" ? -15 : 15,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full overflow-y-auto scrollbar-hide"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>

        <NavigationButtons
          currentSection={currentSection}
          onNavigate={handleNavigation}
        />
      </section>
    </>
  );
}
