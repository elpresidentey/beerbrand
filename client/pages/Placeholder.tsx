import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-loah-cream">
      {/* Header */}
      <header className="flex items-center justify-between px-4 lg:px-[120px] py-3 lg:py-4 border-b-[5px] border-loah-dark bg-white">
        <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            {/* Beer can shape */}
            <rect x="8" y="6" width="16" height="24" rx="2" fill="#489EB7" />
            <rect x="8" y="6" width="16" height="6" fill="#FAA007" />
            <circle cx="16" cy="12" r="3" fill="#FFF9EB" opacity="0.6" />
            <path d="M14 16L18 16" stroke="#FFF9EB" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 20L18 20" stroke="#FFF9EB" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 24L18 24" stroke="#FFF9EB" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-loah-dark font-bold text-lg lg:text-2xl leading-none tracking-tight">
            LOAH
          </span>
        </Link>
        <nav className="flex gap-3 lg:gap-6 text-xs lg:text-xs">
          <Link to="/shop" className="text-loah-dark font-bold uppercase hover:opacity-70 transition-opacity whitespace-nowrap">
            SHOP
          </Link>
          <Link to="/journals" className="text-loah-dark font-bold uppercase hover:opacity-70 transition-opacity whitespace-nowrap">
            JOURNALS
          </Link>
          <Link to="/illustrators" className="text-loah-dark font-bold uppercase hover:opacity-70 transition-opacity whitespace-nowrap">
            ILLUSTRATORS
          </Link>
        </nav>
      </header>

      {/* Content */}
      <div className="flex flex-col items-center justify-center py-24 px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-loah-dark font-extrabold text-5xl lg:text-7xl mb-6">
            {title}
          </h1>
          <p className="text-loah-dark text-xl mb-8">
            This page is coming soon. We're working hard to bring you fresh content!
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-4 border-4 border-loah-dark bg-loah-cta text-loah-dark font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
