export function NoteCard( ) {
    return (
        <button className='rounded-md bg-slate-800 p-5 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-line-400 outline-none'>
          <span className='text-sm font-medium text-slate-300'>
            ha 2 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, explicabo? Quisquam sapiente quos iure nemo praesentium, qui commodi consectetur molestiae mollitia, enim laborum autem ea sunt vero quia dicta laudantium.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ea inventore officia, qui sequi porro reprehenderit. Nobis doloribus similique dignissimos, praesentium porro maxime quam, tempore incidunt inventore alias ipsam! Eius?
            Lorem ipsum dolor sit amet, consectetur adipisicin
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </button>
    )
}