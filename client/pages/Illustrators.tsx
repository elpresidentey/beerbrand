import { Link } from "react-router-dom";

const ILLUSTRATORS = [
  {
    id: 1,
    name: "Alex Rivera",
    bio: "Digital artist specializing in bold, colorful designs",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c336b27e3c63b19112cfabe1fca9f6b730eee0f5?width=570",
    work: "Can Design Series"
  },
  {
    id: 2,
    name: "Maya Chen",
    bio: "Contemporary illustrator with a focus on nature and sustainability",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0f6f144e519777e7c32ff78e5ff107269a87abf4?width=570",
    work: "Environmental Campaign"
  },
  {
    id: 3,
    name: "James Wilson",
    bio: "Retro-inspired artist bringing vintage vibes to modern designs",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/9425aca90fbc2330153aaf4d4e8b74bcd0e5812d?width=570",
    work: "Classic Labels"
  },
  {
    id: 4,
    name: "Sofia Martinez",
    bio: "Abstract artist exploring the intersection of art and beverage culture",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/f50957b8b495761946d495183c0d958af1a9d278?width=570",
    work: "Abstract Series"
  },
  {
    id: 5,
    name: "Lucas Park",
    bio: "3D artist creating immersive visual experiences",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ae84f1d439672d2d29083ea8f249f58d2e33fc01?width=570",
    work: "3D Can Renderings"
  },
  {
    id: 6,
    name: "Emma Thompson",
    bio: "Mixed media artist blending traditional and digital techniques",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/460ede595101de3537bd39c0eb78ddf29e8c8a4c?width=570",
    work: "Mixed Media Collection"
  }
];

export default function Illustrators() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 lg:px-[120px] py-3 lg:py-4 border-b-[5px] border-loah-dark bg-white">
        <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
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

      {/* Page Header */}
      <section className="bg-loah-pink border-b-[5px] border-loah-dark py-16 lg:py-24 px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-loah-dark font-bold text-5xl lg:text-7xl mb-6">
            ILLUSTRATORS
          </h1>
          <p className="text-loah-dark text-lg max-w-[600px] mx-auto">
            Meet the talented artists behind LOAH's stunning visual identity.
          </p>
        </div>
      </section>

      {/* Featured Illustrator */}
      <section className="bg-loah-cream border-b-[5px] border-loah-dark py-16 lg:py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-loah-dark font-bold text-4xl lg:text-5xl mb-4">
                {ILLUSTRATORS[0].name}
              </h2>
              <p className="text-loah-dark/60 font-bold text-lg mb-6">
                {ILLUSTRATORS[0].work}
              </p>
              <p className="text-loah-dark text-lg leading-relaxed mb-8">
                {ILLUSTRATORS[0].bio}
              </p>
              <p className="text-loah-dark text-base mb-8">
                Alex's bold and colorful approach to design has become synonymous with LOAH's visual identity. With a background in digital illustration and graphic design, Alex brings creativity and precision to every project. His work explores the intersection of minimalism and vibrant color, creating designs that are both striking and memorable.
              </p>
              <button className="inline-flex items-center justify-center px-6 py-4 border-4 border-loah-dark bg-loah-cta text-loah-dark font-bold hover:opacity-90 transition-opacity">
                VIEW PORTFOLIO
              </button>
            </div>
            <div className="aspect-square overflow-hidden border-4 border-loah-dark">
              <img 
                src={ILLUSTRATORS[0].image} 
                alt={ILLUSTRATORS[0].name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Illustrators Grid */}
      <section className="bg-white py-16 lg:py-24 px-8 border-b-[5px] border-loah-dark">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-loah-dark font-bold text-3xl mb-12">OUR ARTIST COLLECTIVE</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ILLUSTRATORS.map((artist) => (
              <div key={artist.id} className="border-4 border-loah-dark overflow-hidden group">
                <div className="aspect-square overflow-hidden bg-loah-blue relative">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-loah-dark/0 group-hover:bg-loah-dark/20 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-loah-dark font-bold text-xl mb-1">
                    {artist.name}
                  </h4>
                  <p className="text-loah-orange font-bold text-sm mb-3">
                    {artist.work}
                  </p>
                  <p className="text-loah-dark text-sm leading-relaxed">
                    {artist.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="bg-loah-orange py-16 lg:py-24 px-8 border-b-[5px] border-loah-dark">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-loah-dark font-bold text-3xl lg:text-4xl mb-6">
            INTERESTED IN COLLABORATING?
          </h2>
          <p className="text-loah-dark text-lg mb-8">
            We're always looking for talented artists to join our creative journey. If you're passionate about design and beer culture, we'd love to hear from you.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 border-4 border-loah-dark bg-loah-cta text-loah-dark font-bold text-lg hover:opacity-90 transition-opacity">
            GET IN TOUCH
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-loah-cream py-12 px-8 border-b-[5px] border-loah-dark">
        <div className="max-w-[1200px] mx-auto text-center text-loah-dark">
          <p className="font-bold mb-4">© 2024 LOAH. All rights reserved.</p>
          <div className="flex gap-4 justify-center text-sm">
            <Link to="/privacy" className="hover:opacity-70">Privacy Policy</Link>
            <Link to="/terms" className="hover:opacity-70">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
