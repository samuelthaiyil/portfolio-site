import {Nav} from "@/components/Nav";

type Project = { name: string; stack: string; description: string; url: string; }

const projects: Project[] = [
    {
        name: "Cryptocurrency Price Viewer",
        stack: "JavaFX, Desktop",
        description: "Developed a cross-platform desktop application using Java and JavaFX to view cryptocurrency prices. Utilized Coinbase REST APIs to fetch BTC and ETH price data, and displayed historical prices in a line graph.",
        url: "https://github.com/samuelthaiyil/CryptoPriceWatcher"
    },
    {
        name: "Starter",
        stack: "Swift, iOS",
        description: "Created a solution for athletes in gaining easier exposure by building a social media style iOS application with Swift and\n" +
            "GCP. Users could upload video clips to a profile and edit the clips through an in app video editor.",
        url: "https://github.com/samuelthaiyil/StarterApp"
    },
    {
        name: "Statify",
        stack: ".NET C#, Web",
        description: "Reduced the need for manual stat taking at sports events by creating an interactive web application using ASP.NET MVC,\n" +
            "MSSQL Server and Azure to allow users to create teams and add players and games attached to players to track statistics.",
        url: "https://github.com/samuelthaiyil/COMP2084G_BasketballStatTracker"
    }
]

export default function Projects() {
    return (
        <>
            <Nav/>
            <div className="px-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-center py-8 lg:py-12">Projects</h1>
                {
                    projects.map(({name, stack, description, url}) => {
                        return (
                            <li className="py-4 list-none" key={name}>
                                <h3 className="text-xl font-bold pb-1">{name}</h3>
                                <p className="text-slate-400 pb-2">{stack}</p>
                                <p className="text-slate-600">{description}</p>
                                <div className="py-5">
                                    <a href={url} target="_blank"
                                       className="bg-blue-600 text-white py-2 px-5 mt-8 rounded hover:bg-blue-500 transition hover:duration-300 group">
                                        View Project <span
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
