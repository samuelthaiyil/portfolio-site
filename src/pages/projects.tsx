import {Nav} from "@/components/Nav";

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
        stack: "React, Next.js, Tesseract.js",
        description: "A web application that leverages OCR to redact sensitive information from PDFs",
        url: "https://redactify-kappa.vercel.app/",
        viewMethod: "Try Project"
    }
]

export default function Projects() {
    return (
        <>
            <Nav/>
            <div className="px-8">
                {
                    projects.map(({name, stack, description, url, viewMethod }) => {
                        return (
                            <li className="py-4 list-none" key={name}>
                                <h3 className="text-xl font-bold pb-1">{name}</h3>
                                <p className="text-slate-400 pb-2">{stack}</p>
                                <p className="text-slate-600">{description}</p>
                                <div className="py-5">
                                    <a href={url} target="_blank"
                                       className="bg-blue-600 text-white py-2 px-5 mt-8 rounded hover:bg-blue-500 transition hover:duration-300 group">
                                        {viewMethod}<span
                                        className="inline-block transition-transform transform group-hover:translate-x-1">-&gt;</span>
                                    </a>
                                </div>
                            </li>
                        )
                    })
                }
            </div>
        </>
    )
}
