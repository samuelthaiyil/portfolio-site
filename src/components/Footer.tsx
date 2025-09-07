export default function Footer() {
    return (
        <footer className="w-full py-8 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-center">
                <p className="text-slate-400 dark:text-slate-500">{new Date().getFullYear()} &#169; Sam Thaiyil</p>
            </div>
        </footer>
    )
}
