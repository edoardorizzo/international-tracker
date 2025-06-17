'use client'

export default function SideMenu({ menuOpen, setMenuOpen }) {
    return (
        <div className={`fixed top-0 left-0 h-full w-64 bg-[#2C302E] p-6 transition-transform duration-300 z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button
                className="mb-4 text-[#9AE19D] font-bold flex items-center gap-2"
                onClick={() => setMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#9AE19D" viewBox="0 0 384 512" className="h-8 w-8"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                Chiudi
            </button>
            <nav className="flex flex-col gap-4 text-white">
                <a href="#">Home</a>
                <a href="#">Servizi</a>
                <a href="#">Contatti</a>
            </nav>
        </div>
    );
}
