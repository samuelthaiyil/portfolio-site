export default function Footer() {
    return (
        <div className="absolute bottom-0 w-full py-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-slate-400 dark:text-slate-500">{new Date().getFullYear()} &#169; by Sam</p>
        </div>
    )
}
