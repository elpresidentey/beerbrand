import { Link } from "react-router-dom";

const JOURNAL_POSTS = [
  {
    id: 1,
    title: "The Art of Crafting Low-Alcohol Beer",
    excerpt: "Discover how we brew the perfect low-alcohol lager without compromising on taste.",
    date: "March 15, 2024",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c336b27e3c63b19112cfabe1fca9f6b730eee0f5?width=570"
  },
  {
    id: 2,
    title: "Meet Our Hop Suppliers",
    excerpt: "A deep dive into the farms and people behind our carefully selected hops.",
    date: "March 10, 2024",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0f6f144e519777e7c32ff78e5ff107269a87abf4?width=570"
  },
  {
    id: 3,
    title: "Natural Flavours: Peach & Apricot",
    excerpt: "Learn about our natural flavouring process and why it matters.",
    date: "March 5, 2024",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/9425aca90fbc2330153aaf4d4e8b74bcd0e5812d?width=570"
  },
  {
    id: 4,
    title: "LOAH Behind the Scenes",
    excerpt: "Take a tour of our brewery and meet the team making it happen.",
    date: "February 28, 2024",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/f50957b8b495761946d495183c0d958af1a9d278?width=570"
  },
  {
    id: 5,
    title: "Sustainability in Brewing",
    excerpt: "Our commitment to environmental responsibility in every batch.",
    date: "February 20, 2024",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ae84f1d439672d2d29083ea8f249f58d2e33fc01?width=570"
  },
  {
    id: 6,
    title: "Music & Beer: A Perfect Pairing",
    excerpt: "Explore our playlist series and discover the soundtrack to guilt-free sipping.",
    date: "February 15, 2024",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/460ede595101de3537bd39c0eb78ddf29e8c8a4c?width=570"
  }
];

export default function Journals() {
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
      <section className="bg-loah-blue border-b-[5px] border-loah-dark py-16 lg:py-24 px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-loah-dark font-bold text-5xl lg:text-7xl mb-6">
            JOURNALS
          </h1>
          <p className="text-loah-dark text-lg max-w-[600px] mx-auto">
            Stories, insights, and behind-the-scenes content from the LOAH community.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-loah-cream border-b-[5px] border-loah-dark py-16 lg:py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-loah-orange font-bold text-sm uppercase">Featured</span>
              <h2 className="text-loah-dark font-bold text-4xl lg:text-5xl my-4">
                {JOURNAL_POSTS[0].title}
              </h2>
              <p className="text-loah-dark text-lg mb-6 leading-relaxed">
                {JOURNAL_POSTS[0].excerpt}
              </p>
              <p className="text-loah-dark/60 font-bold mb-8">
                {JOURNAL_POSTS[0].date}
              </p>
              <button className="inline-flex items-center justify-center px-6 py-4 border-4 border-loah-dark bg-loah-cta text-loah-dark font-bold hover:opacity-90 transition-opacity">
                READ MORE
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={JOURNAL_POSTS[0].image} 
                alt={JOURNAL_POSTS[0].title} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Posts Grid */}
      <section className="bg-white py-16 lg:py-24 px-8 border-b-[5px] border-loah-dark">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-loah-dark font-bold text-3xl mb-12">RECENT POSTS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JOURNAL_POSTS.slice(1).map((post) => (
              <div key={post.id} className="border-4 border-loah-dark overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-loah-blue">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <p className="text-loah-dark/60 font-bold text-sm mb-2">
                    {post.date}
                  </p>
                  <h4 className="text-loah-dark font-bold text-lg mb-3">
                    {post.title}
                  </h4>
                  <p className="text-loah-dark text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-loah-dark font-bold text-sm hover:opacity-70 transition-opacity">
                    READ MORE →
                  </button>
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
            STAY UPDATED
          </h2>
          <p className="text-loah-dark mb-8">
            Get the latest journal posts straight to your inbox.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="flex-1 h-[50px] px-4 border-4 border-loah-dark text-loah-dark placeholder:text-loah-dark/50"
            />
            <button className="inline-flex items-center justify-center px-6 py-[15.5px] border-4 border-loah-dark bg-loah-cta text-loah-dark font-bold text-base hover:opacity-90 transition-opacity whitespace-nowrap">
              SUBSCRIBE
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
