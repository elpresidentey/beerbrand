import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section - Split Screen */}
      <section className="grid lg:grid-cols-2 border-b-[5px] border-loah-dark">
        {/* Left - Orange Side */}
        <div className="bg-loah-orange border-r-0 lg:border-r-[2.5px] border-b-[5px] lg:border-b-0 border-loah-dark px-6 lg:px-[120px] py-16 lg:py-32 min-h-[600px] lg:min-h-[1024px] flex items-center">
          <div className="w-full max-w-[440px]">
            <h1 className="text-loah-dark mb-12 lg:mb-16">
              <span className="font-bold text-5xl sm:text-6xl lg:text-[90px] leading-none block">Blue</span>
              <span className="italic font-normal text-5xl sm:text-6xl lg:text-[90px] leading-none block">Sky</span>
              <span className="font-bold text-5xl sm:text-6xl lg:text-[90px] leading-none block" style={{ width: "253px", height: "94px" }}>Drinking</span>
            </h1>
            <p className="text-loah-dark text-sm sm:text-base leading-relaxed mb-10 font-medium">
              OUR <span className="font-bold">CRISPY, LIGHT, CRUSHABLE BEERS</span> CARRY ALL THE POSSIBILITIES OF A CLEAR HEAD. AND THEY TASTE DELICIOUS TOO. OPEN THAT WINDOW AND LET YOUR MIND RUN FREE
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-4 py-3 sm:py-[15.5px] border-3 sm:border-4 border-loah-dark bg-loah-cta text-loah-dark font-bold text-sm sm:text-base hover:opacity-90 transition-opacity"
            >
              SHOP NOW
            </Link>
          </div>
        </div>

        {/* Right - Blue Side */}
        <div className="bg-loah-blue border-l-0 lg:border-l-[2.5px] border-loah-dark px-8 lg:px-[60px] py-16 lg:py-[212px] min-h-[600px] lg:min-h-[1024px] flex items-center justify-center">
          <div className="w-full max-w-[600px] aspect-square flex items-center justify-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/55f9986a742de52a49148a8c5d1c9353f412e94c?width=1200" 
              alt="LOAH Beer Can" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Meet the Beers Section */}
      <section className="bg-loah-cream border-b-[5px] border-loah-dark py-16 lg:py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-loah-dark font-extrabold text-5xl lg:text-[72px] leading-tight mb-6">
              MEET THE BEERS.
            </h2>
            <p className="text-loah-dark text-base leading-[165%] max-w-[688px] mx-auto font-medium">
              WHEN WE SET OUT TO BREW A BEER, IT'S ALL ABOUT FLAVOUR.<br />
              WE START WITH THE END GOAL AND WORK BACK USING CAREFULLY SELECTED HOPS<br />
              TO ENHANCE OUR NATURAL FRUIT FLAVOURS AND BRING OUR LAGERS TO LIFE
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-[60px] max-w-[1200px] mx-auto">
            {[
              { img: "https://api.builder.io/api/v1/image/assets/TEMP/08cf3f6fe68540df581b68a0eb24580e0da5229b?width=720" },
              { img: "https://api.builder.io/api/v1/image/assets/TEMP/a9ef010cc614212e3116a2806594a897f93bb924?width=720" },
              { img: "https://api.builder.io/api/v1/image/assets/TEMP/d472e6636e0fad9a3663fb70e60c55ada39f7f9c?width=720" }
            ].map((beer, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img src={beer.img} alt={`Beer ${idx + 1}`} className="w-full max-w-[360px] h-auto mb-10" />
                <Link 
                  to="/shop" 
                  className="inline-flex items-center justify-center px-4 py-[15.5px] border-4 border-loah-dark bg-loah-cta text-loah-dark font-bold text-base hover:opacity-90 transition-opacity"
                >
                  SHOP NOW
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Section with Labels */}
      <section className="bg-loah-blue border-b-[5px] border-loah-dark py-16 lg:py-24 px-8 min-h-[600px] lg:min-h-[1024px] flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full max-w-[1440px] mx-auto flex items-center justify-center">
          {/* Floating Labels */}
          <div className="absolute left-[10%] lg:left-[20%] top-[20%] lg:top-[30%] flex items-center justify-center bg-loah-cta px-6 py-3 transform rotate-[23deg] z-10">
            <span className="text-loah-dark font-bold text-sm">0.5 lager</span>
          </div>
          <div className="absolute left-[30%] lg:left-[35%] top-[15%] lg:top-[25%] flex items-center justify-center bg-loah-cta px-6 py-3 transform -rotate-[28deg] z-10">
            <span className="text-loah-dark font-bold text-sm">Low sugar</span>
          </div>
          <div className="absolute left-[30%] lg:left-[35%] top-[45%] lg:top-[55%] flex items-center justify-center bg-loah-cta px-6 py-3 z-10">
            <span className="text-loah-dark font-bold text-sm">Low calorie</span>
          </div>

          {/* Beer Can Image */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/23eee08b8c6a15f2c3ca235f213ba4c75659b60f?width=1418" 
            alt="LOAH Beer Can" 
            className="w-full max-w-[500px] lg:max-w-[709px] h-auto transform -rotate-[0.065deg]"
          />
        </div>
      </section>

      {/* Peach Beer Section */}
      <section className="grid lg:grid-cols-2 gap-12 lg:gap-0 bg-loah-pink border-b-[5px] border-loah-dark py-16 lg:py-24 px-8 lg:px-[120px] min-h-[600px] lg:min-h-[1024px]">
        <div className="flex flex-col justify-center max-w-[580px]">
          <h2 className="text-loah-dark font-extrabold text-4xl lg:text-[56px] leading-tight mb-8">
            <span className="block">SAVOUR THE TASTE</span>
            <span className="block">OF PEACH AND BEER</span>
          </h2>
          <div className="text-loah-dark text-base leading-[32.5px] font-bold mb-10">
            <p className="mb-4">
              INGREDIENTS: OATS, WHEAT, BARLEY, HOPS, WATER, YEAST, <span className="text-teal-600">NATURAL PEACH</span> & APRICOT FLAVOURINGS, HOP EXTRACT.
            </p>
            <p>
              ALLERGENS*GLUTEN BELOW 10PPM, WHEAT, BARLEY. NUTRITIONAL VALUES (PER 100ML); ENERGY - 35KJ / 8KCAL PROTEIN - 0.2GFAT - &lt;0.1GSALT - 0.04G CARBOHYDRATE - 1.4G OF WHICH SUGARS - &lt;0.1G
            </p>
          </div>
          <Link 
            to="/shop" 
            className="inline-flex items-center justify-center px-4 py-[15.5px] border-4 border-loah-dark bg-loah-cta text-loah-dark font-bold text-base hover:opacity-90 transition-opacity w-fit"
          >
            SHOP NOW
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/430c627129c8ae7d229ab4a76cbd141af7c7441b?width=700" 
            alt="Peach Beer" 
            className="w-full max-w-[350px] h-auto"
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-loah-cream border-b-[5px] border-loah-dark py-16 lg:py-24 px-8 min-h-[600px] lg:min-h-[1024px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-loah-dark font-extrabold text-2xl lg:text-[32px] text-center mb-12">
            BLUE SKY STRAIGHT TO YOUR INBOX
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Person Image */}
            <div className="flex flex-col gap-8">
              <div className="w-full max-w-[504px] aspect-square rounded-full overflow-hidden mx-auto lg:mx-0">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e72a005268961d26e626bacf523a13df95defc37?width=1008" 
                  alt="Person" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full max-w-[252px] aspect-square rounded-full overflow-hidden mx-auto lg:mx-0">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f656605bf85c80f1550e22ebdf193dc4d9c4e4fc?width=504" 
                  alt="Person drinking" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Form and Donut Images */}
            <div className="flex flex-col gap-8">
              <form className="w-full max-w-[360px] mx-auto lg:mx-0 flex flex-col gap-[43px]">
                <input 
                  type="text" 
                  placeholder="FIRST NAME" 
                  className="w-full h-[50px] px-3 bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.25)] text-loah-dark/50 text-xs placeholder:text-loah-dark/50"
                />
                <input 
                  type="text" 
                  placeholder="LAST NAME" 
                  className="w-full h-[50px] px-3 bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.25)] text-loah-dark/50 text-xs placeholder:text-loah-dark/50"
                />
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full h-[50px] px-3 bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.25)] text-loah-dark/50 text-xs placeholder:text-loah-dark/50"
                />
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center px-4 py-[15.5px] border-4 border-loah-dark bg-loah-cta text-loah-dark font-bold text-base hover:opacity-90 transition-opacity mx-auto"
                >
                  SIGN UP
                </button>
              </form>

              {/* Donut Images */}
              <div className="flex flex-col gap-8 items-end">
                <div className="flex gap-4">
                  <div className="w-[75px] h-[75px] rounded-full overflow-hidden">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f656605bf85c80f1550e22ebdf193dc4d9c4e4fc?width=504" 
                      alt="Donut" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[75px] h-[75px] rounded-full overflow-hidden">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f656605bf85c80f1550e22ebdf193dc4d9c4e4fc?width=504" 
                      alt="Donut" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[15px] h-[15px] rounded-full bg-[#F5573E]"></div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#F7B0CC]"></div>
                  <div className="w-[75px] h-[75px] rounded-full overflow-hidden">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f656605bf85c80f1550e22ebdf193dc4d9c4e4fc?width=504" 
                      alt="Donut" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[75px] h-[75px] rounded-full overflow-hidden">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f656605bf85c80f1550e22ebdf193dc4d9c4e4fc?width=504" 
                      alt="Donut" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-loah-cream border-b-[5px] border-loah-dark py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://api.builder.io/api/v1/image/assets/TEMP/c336b27e3c63b19112cfabe1fca9f6b730eee0f5?width=570",
              "https://api.builder.io/api/v1/image/assets/TEMP/0f6f144e519777e7c32ff78e5ff107269a87abf4?width=570",
              "https://api.builder.io/api/v1/image/assets/TEMP/9425aca90fbc2330153aaf4d4e8b74bcd0e5812d?width=570",
              "https://api.builder.io/api/v1/image/assets/TEMP/f50957b8b495761946d495183c0d958af1a9d278?width=570",
              "https://api.builder.io/api/v1/image/assets/TEMP/ae84f1d439672d2d29083ea8f249f58d2e33fc01?width=570",
              "https://api.builder.io/api/v1/image/assets/TEMP/460ede595101de3537bd39c0eb78ddf29e8c8a4c?width=570",
              "https://api.builder.io/api/v1/image/assets/TEMP/c55f2014fe9c7242d27681babea62f083dfed59e?width=570",
              "https://api.builder.io/api/v1/image/assets/TEMP/63dc1ef5e556f0e7a400f515107bcd72bbd50f7d?width=570"
            ].map((img, idx) => (
              <div key={idx} className="aspect-[285/200] overflow-hidden">
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sounds of LOAH Section */}
      <section className="bg-loah-orange border-b-[5px] border-loah-dark py-16 lg:py-24 px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-loah-dark font-extrabold text-4xl lg:text-[56px] leading-tight mb-4">
            SOUNDS OF LOAH
          </h2>
          <p className="text-loah-dark text-base leading-relaxed mb-12 max-w-[642px] mx-auto">
            MUSIC IS A BIG PART OF OUR CREATIVE PROCESS, AND SO WE'VE PAIRED OUR BEERS<br />
            WITH A SELECTION OF SPOTIFY PLAYLISTS FOR WHATEVER MOOD YOU'RE IN
          </p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-[900px] mx-auto">
            {[
              { title: "Mix 01" },
              { title: "Mix 02" },
              { title: "Mix 03" }
            ].map((mix, idx) => (
              <div key={idx} className="bg-loah-blue p-8 flex flex-col items-center justify-center min-h-[300px] relative">
                <div className="w-20 h-20 rounded-full bg-loah-dark flex items-center justify-center mb-6">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                </div>
                <h3 className="text-loah-dark font-bold text-2xl">{mix.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-loah-cream border-b-[5px] border-loah-dark py-16 px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-loah-dark font-bold text-xl lg:text-[22px]">
            "I WOULD STRONGLY RECOMMEND IT FOR ANYONE WHO LIKES A NOT TOO SWEET LOW ALCOHOL BEER"
          </p>
        </div>
      </section>

      <section className="bg-loah-cream border-b-[5px] border-loah-dark py-16 px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-loah-dark font-bold text-xl lg:text-[22px]">
            "THIS BEER IS SO CRISP AND FRESH ESPECIALLY WITH A WEDGE OF LIME"
          </p>
        </div>
      </section>

      <section className="bg-loah-cream border-b-[5px] border-loah-dark py-16 px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-loah-dark font-bold text-xl lg:text-[22px]">
            "MONDAY TO FRIDAY GUILT FREE SIPPING - REFRESHING AND OH SO COOL"
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-loah-orange py-16 lg:py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Newsletter Signup */}
            <div>
              <h3 className="text-loah-dark font-extrabold text-2xl lg:text-[32px] mb-8">
                DON'T WANT TO MISS A THING?
              </h3>
              <form className="flex gap-4 max-w-[400px]">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="flex-1 h-[50px] px-3 border-4 border-loah-dark text-loah-dark placeholder:text-loah-dark/50"
                />
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center px-4 py-[15.5px] border-4 border-loah-dark bg-loah-cta text-loah-dark font-bold text-base hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  SIGN UP
                </button>
              </form>
            </div>

            {/* Beer Can Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/55f9986a742de52a49148a8c5d1c9353f412e94c?width=1200" 
                alt="LOAH Beer" 
                className="w-full max-w-[200px] h-auto"
              />
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-loah-dark font-bold text-sm mb-4">SHOP</h4>
              <ul className="space-y-2 text-loah-dark text-sm">
                <li><Link to="/shop" className="hover:opacity-70">All Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-loah-dark font-bold text-sm mb-4">ABOUT</h4>
              <ul className="space-y-2 text-loah-dark text-sm">
                <li><Link to="/about" className="hover:opacity-70">Our Story</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-loah-dark font-bold text-sm mb-4">HELP</h4>
              <ul className="space-y-2 text-loah-dark text-sm">
                <li><Link to="/contact" className="hover:opacity-70">Contact</Link></li>
                <li><Link to="/faq" className="hover:opacity-70">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-loah-dark font-bold text-sm mb-4">MORE</h4>
              <ul className="space-y-2 text-loah-dark text-sm">
                <li><Link to="/delivery" className="hover:opacity-70">Delivery</Link></li>
                <li><Link to="/trade" className="hover:opacity-70">Trade</Link></li>
                <li><Link to="/stockists" className="hover:opacity-70">Stockists</Link></li>
              </ul>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t-2 border-loah-dark">
            <div className="flex gap-6">
              <a href="#" className="text-loah-dark hover:opacity-70">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-loah-dark hover:opacity-70">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <div className="text-loah-dark text-xs text-center md:text-right">
              <p>© 2024 LOAH. All rights reserved.</p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <Link to="/privacy" className="hover:opacity-70">Privacy Policy</Link>
                <Link to="/terms" className="hover:opacity-70">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
