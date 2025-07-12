import Link from "next/link";
import {useRouter} from "next/router";
import { ThemeToggle } from "./ThemeToggle";

export const Nav = () => {
    const router = useRouter();
    return (
       <div className="relative top-0 w-full">
            <div className="p-8 flex justify-between items-center">
                <div className="space-x-4">
                    <Link className={router.pathname === "/" ? "text-xl font-bold dark:text-white" : "text-xl font-bold text-slate-400 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-200 hover:duration-200 ease-in-out"} href="/">Home</Link>
                    {/* <Link className={router.pathname === "/experience" ? "text-xl font-bold dark:text-white" : "text-xl font-bold text-slate-400 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-200 hover:duration-200"} href="/experience">Experience</Link>
                    <Link className={router.pathname === "/projects" ? "text-xl font-bold dark:text-white" : "text-xl font-bold  text-slate-400 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-200 hover:duration-200"} href="/projects">Projects</Link> */}
                    <Link className={router.pathname === "/contact" ? "text-xl font-bold dark:text-white" : "text-xl font-bold text-slate-400 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-200 hover:duration-200"} href="/contact">Contact</Link>
                </div>
                <ThemeToggle />
            </div>
        </div>
    )
}
