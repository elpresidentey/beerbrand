import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-loah-cream">
      {/* Header */}
      <header className="flex items-center justify-between px-8 lg:px-[120px] h-[100px] border-b-[5px] border-loah-dark bg-white">
        <Link to="/" className="text-loah-dark font-semibold text-[60px] leading-[76px] tracking-tight">
          LOAH
        </Link>
        <nav className="flex gap-8 lg:gap-14">
          <Link to="/shop" className="text-loah-dark font-black text-lg uppercase hover:opacity-70 transition-opacity">
            SHOP
          </Link>
          <Link to="/journals" className="text-loah-dark font-black text-lg uppercase hover:opacity-70 transition-opacity">
            JOURNALS
          </Link>
          <Link to="/illustrators" className="text-loah-dark font-black text-lg uppercase hover:opacity-70 transition-opacity">
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
