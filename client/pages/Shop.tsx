import { Link } from "react-router-dom";

const BEERS = [
  {
    id: 1,
    name: "Blue Sky Lager",
    description: "0.5% ABV - Light, crispy, and crushable",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/08cf3f6fe68540df581b68a0eb24580e0da5229b?width=720",
    price: "$4.99"
  },
  {
    id: 2,
    name: "Peach Paradise",
    description: "Natural peach flavour - Low calorie",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/a9ef010cc614212e3116a2806594a897f93bb924?width=720",
    price: "$5.99"
  },
  {
    id: 3,
    name: "Green Dream",
    description: "Crisp and refreshing - Perfect for any occasion",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/d472e6636e0fad9a3663fb70e60c55ada39f7f9c?width=720",
    price: "$4.99"
  },
  {
    id: 4,
    name: "Sky Blue IPA",
    description: "0.5% ABV - Hoppy and bold",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/08cf3f6fe68540df581b68a0eb24580e0da5229b?width=720",
    price: "$5.49"
  },
  {
    id: 5,
    name: "Peachy Keen",
    description: "Natural apricot & peach blend",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/430c627129c8ae7d229ab4a76cbd141af7c7441b?width=700",
    price: "$5.99"
  },
  {
    id: 6,
    name: "Clear Head Lager",
    description: "Guilt-free sipping Monday to Friday",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/55f9986a742de52a49148a8c5d1c9353f412e94c?width=1200",
    price: "$4.99"
  }
];

export default function Shop() {
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
      <section className="bg-loah-orange border-b-[5px] border-loah-dark py-16 lg:py-24 px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-loah-dark font-bold text-5xl lg:text-7xl mb-6">
            SHOP
          </h1>
          <p className="text-loah-dark text-lg max-w-[600px] mx-auto">
            Discover our range of crispy, light, and crushable beers. Perfect for any occasion.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-loah-cream py-16 lg:py-24 px-8 border-b-[5px] border-loah-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BEERS.map((beer) => (
              <div key={beer.id} className="bg-white border-4 border-loah-dark overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-loah-blue flex items-center justify-center">
                  <img 
                    src={beer.image} 
                    alt={beer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-loah-dark font-bold text-xl mb-2">
                    {beer.name}
                  </h3>
                  <p className="text-loah-dark text-sm mb-4">
                    {beer.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-loah-dark font-bold text-lg">
                      {beer.price}
                    </span>
                    <button className="inline-flex items-center justify-center px-4 py-2 border-3 border-loah-dark bg-loah-cta text-loah-dark font-bold text-sm hover:opacity-90 transition-opacity">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-loah-orange py-16 lg:py-24 px-8 border-b-[5px] border-loah-dark">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-loah-dark font-bold text-3xl lg:text-4xl mb-6">
            DON'T MISS NEW DROPS
          </h2>
          <p className="text-loah-dark mb-8">
            Subscribe to our newsletter for exclusive releases and updates.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="flex-1 h-[50px] px-4 border-4 border-loah-dark text-loah-dark placeholder:text-loah-dark/50"
            />
            <button className="inline-flex items-center justify-center px-6 py-[15.5px] border-4 border-loah-dark bg-loah-cta text-loah-dark font-bold text-base hover:opacity-90 transition-opacity whitespace-nowrap">
              SIGN UP
            </button>
          </div>
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
