import Footer from "@/components/Footer";

type Experience = { title: string; company: string; description: string[];  range: string; }

const experience: Experience[] = [
    {
        title: "Frontend Developer",
        company: "Bluefin Enterprises Inc.",
        description:[
            "Optimally designed and implemented CPC widgets which generating roughly $50k in revenue over a\n" +
            "2-month period.",
            "Developed and maintained 11 high-traffic websites built in React (Next.js), optimizing CPC advertising to drive consistent revenue growth.",
            "Engineered a web scraper in Javascript (Nest.js) that seamlessly extracted content from an AI writing service, decreasing content creation time by 40%.",
            "Collaborated in SCRUM development teams leveraging collective expertise to identify and resolve coding challenges swiftly."

        ],
        range: "May 2022 - Dec 2022"
    },
    {
        title: "Full Stack Developer",
        company: "Stealth Startup",
        description: [
            "Worked on the development team of a web-based B2B SaaS application built in Angular and Nest.js.",
            "Refactored Angular codebase to increase modularity reducing development time by 30%.\n",
            "Implemented RxJS state management which improved application performance by 25%.",
            "Led the development of from-scratch client scheduling system complete with a month, week and day view introducing 40% more features.",
            "Added optimistic UI updating which increased perceived application speed by 10%."
        ],
        range: "Jul 2021 - Jun 2022"
    },
    {
        title: "SWE Intern",
        company: "Kubernets Inc.",
        description: [
            "Spearheaded the creation of a journaling iOS application.",
            "Designed XIB storyboard files from Figma UI layouts and integrated secure user authentication using GCP."
        ],
        range: "June 2021 - Sept 2021"
    }

]

export default function Experience() {
    return (
        <>
            <div className="px-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-center py-8 lg:py-12">Experience</h1>
                {
                    experience.map(({ title, company, description, range}) => {
                        return (
                            <li className="py-4 list-none" key={title}>
                                <h3 className="text-2xl font-bold pb-1">{title}</h3>
                                <div className="flex justify-between">
                                    <h3 className="text-xl text-slate-500 font-bold pb-1">{company}</h3>
                                    <h3 className="text-lg text-slate-500 pb-1">{range}</h3>
                                </div>
                                <ul className="text-slate-600 space-y-3 py-4">
                                    {
                                        description.map((point) => (
                                            <li key={point}>
                                                {point}
                                            </li>
                                    ))}
                                </ul>
                            </li>
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}
