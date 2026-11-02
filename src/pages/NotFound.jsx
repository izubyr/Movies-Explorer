import { Link } from "react-router-dom"

function NotFound() {
    return (
       <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b1326] px-5 pt-20 text-center">
        <span className="material-symbols-outlined mb-4 text-5xl text-[#ffc174]">movie_filter</span>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffc174]"> Wrong aisle</p>
        <h1 className="mb-6 font-[Plus_Jakarta_Sans] text-3xl font-extrabold text-[#dae2fd]">This page is off the reel.</h1>
        <Link className="rounded-lg bg-[#f59e0b] px-5 py-3 text-sm font-bold text-[#472a00] transition hover:bg-[#ffc174]" to="/">Back to Explore</Link>
       </main>
    )
}

export default NotFound