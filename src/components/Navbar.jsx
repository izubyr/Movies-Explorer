import { NavLink, Link } from "react-router-dom"

const links = [
  { label: 'Explore', to: '/'},
  { label: 'Watchlist', to: '/watchlist'},
  { label: 'Watched', to: '/watched'},
  { label: 'Search', to: '/search'},
]

function Navbar({ watchlistCount, watchedCount }) {
  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#060e20]/85 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl'>
      <div className='mx-auto flex h-16 max-w-360 items-center justify-between gap-3 px-3 sm:h-20 sm:gap-6 sm:px-6 lg:px-10'>
        <Link to="/" className="flex shrink-0 items-center gap-2 text-[#ffc174]">
          <span className='material-symbols-outlined text-[27px]'>movie_filter</span>
          <span className='font-[Plus_Jakarta-Sans] text-lg font-bold tracking-tight sm:text-xl'>MoviesExplorer</span>
        </Link>

        <nav className='flex items-center gap-0.5 rounded-full border border-white/10 bg-[#131b2e]/80 p-1 sm:gap-1' aria-label='Main navigation'>
           {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => isActive
                ? 'flex items-center gap-1 rounded-full bg-[#222a3d] px-2 py-2 text-[10px] font-bold text-[#ffc174] shadow-inner sm:gap-2 sm:px-3 sm:text-xs'
                : 'flex items-center gap-1 rounded-full px-2 py-2 text-[10px] font-semibold text-[#94a3b8] transition hover:text-[#dae2fd] sm:gap-2 sm:px-3 sm:text-xs'}
            >
              {link.label}
              {link.to === '/watchlist' && <span className="rounded-full bg-[#cc003c] px-1.5 py-0.5 text-[9px] leading-none text-[#ffdcdc]">{watchlistCount}</span>}
              {link.to === '/watched' && <span className="hidden rounded-full bg-[#f59e0b]/15 px-1.5 py-0.5 text-[9px] leading-none text-[#ffc174] sm:inline">{watchedCount}</span>}
            </NavLink>
          ))}

        </nav>
        <div className='hidden shrink-0 items-center gap-3 border border-white/10 pl-4 sm:flex'>
          <div className="hidden text-right md:block">
            <p className="m-0 text-[9px] font-bold uppercase tracking-[0.18em] text-[#94a3b8]">Cinephile log</p>
            <p className="m-0 text-xs font-semibold text-[#ffc174">{watchedCount} watched</p>
          </div>
          <Link to="/search" aria-label="Search movies" className="grid h-9 w-9 place-items-center rounded-full border border-[#a08e7a]/30 bg-[#131b2e] text-[#d8c3ad] transition hover:border-[#ffc174]/60 hover:text-[#ffc174]">
            <span className="material-symbols-outlined text-[19px]">search</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar