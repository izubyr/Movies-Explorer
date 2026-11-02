import { Link } from "react-router-dom"


function Footer() {
    return (
        <footer className="mt-10 w-full border-t border-white/10 bg-[#060e20] py-8 sm:py-10">
            <div className="mx-auto flex max-w-360 flex-col items-start justify-between gap-6 px-4 text-sm text-[#d8c3ad] sm:px-8 md:flex-row md:items-center lg:px-10">
                <div className="max-w-sm">
                    <Link to="/" className="font-[Plus_Jakarta_Sans">
                    MoviesExplorer
                    </Link>
                    <p className="mb-0 mt-1 text-xs leading-5 text-[#a08e7a] sm:text-sm">
                        Curated cinema logging, discovery, and film analysis for passionate Cinephiles.
                    </p>
                </div>

                <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold sm:gap-x-6 sm:text-sm" aria-label="Footer navigation">
                    <Link className="text-[#d8c3ad] transition-colors hover:text-[#dae2fd]" to="/">Explore</Link>
                    <Link className="text-[#d8c3ad] transition-colors hover:text-[#dae2fd]" to="watchlist">Watchlist</Link>
                    <Link className="text-[#d8c3ad] transition-colors hover:text-[#dae2fd]" to="watched">History</Link>
                    <Link className="text-[#d8c3ad] transition-colors hover:text-[#dae2fd]" to="search">Search</Link>
                </nav>

                <p className="m-0 text-[10px] font-semibold text-[#a08e7a] sm:text-xs">
                    &copy; 2026 MoviesExplorer. All rights reserved.
                </p>
            </div>


        </footer>
    )
}

export default Footer