function StatusMessage({ children, action }) {
  return (
    <div className="flex min-h-44 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#a08e7a]/30 bg-[#131b2e]/70 px-6 py-8 text-center" role="status">
        <svg className="h-9 w-9 text-[#ffc174]" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M4 10h24v17H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="m4 10 2-6 24 6-2 6-24-6Z" fill="currentColor" />
          <path d="m10 5 3 6m5-4 3 6m5-4 2 5" stroke="#0b1326" strokeWidth="2" />
          <path d="M9 17h3m4 0h3m4 0h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p className="m-0 m-w-lg text-sm leading-relaxed text-[#d8c3ad">{children}</p>
        {action}
    </div>
  )
}

export default StatusMessage