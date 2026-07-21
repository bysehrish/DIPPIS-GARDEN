import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Heart, Star, Quote, PlayCircle, ShoppingBag, Award, ThumbsUp, MapPin, Utensils, Building, Coffee } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { HeroCarousel } from '../components/HeroCarousel';

export function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#0F0A08] via-[#1A0F0A] to-[#22120C] text-white py-20 px-6 flex flex-col justify-center items-center overflow-hidden">
        {/* Background Elements */}
      
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent z-0"></div>
        {/* Glows */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] blur-[150px] rounded-full opacity-20 z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left flex flex-col justify-center py-4 lg:py-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-4 md:mb-6">
                <Star className="w-4 h-4 text-[#ff4e00]" />
                <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">Pakistan's Most Loved Sauces</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter leading-none mb-4 md:mb-6 uppercase">
                Crafted With <br className="hidden md:block" />
                <span className="text-[#ff4e00] drop-shadow-[0_0_20px_rgba(255,78,0,0.6)]">Passion</span>
                <br />
                Packed With <br className="hidden md:block" />
                <span className="text-[#ffcd00] drop-shadow-[0_0_20px_rgba(255,205,0,0.4)]">Flavor</span>
              </h1>

              <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Experience the authentic taste of Lahore. <br className="hidden md:block" />
                Made with the freshest ingredients to <br className="hidden md:block" />
                elevate your everyday meals.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-10">
                <Link to="/products" className="bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] hover:scale-105 text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,78,0,0.4)] flex items-center gap-2 text-sm md:text-base">
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" /> Shop Our Sauces <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
                <Link to="/about" className="bg-transparent hover:bg-white/5 backdrop-blur-sm text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold uppercase tracking-wider transition-all border border-white/20 flex items-center gap-2 text-sm md:text-base">
                  <PlayCircle className="w-4 h-4 md:w-5 md:h-5" /> Watch Our Story
                </Link>
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffcd00]" />
                  <div>
                    <div className="text-white font-black text-base sm:text-lg">25+</div>
                    <div className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest">Premium<br/>Products</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffcd00]" />
                  <div>
                    <div className="text-white font-black text-base sm:text-lg">100%</div>
                    <div className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest">Quality<br/>Ingredients</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffcd00]" />
                  <div>
                    <div className="text-white font-black text-base sm:text-lg">12K+</div>
                    <div className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest">Happy<br/>Customers</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffcd00]" />
                  <div>
                    <div className="text-white font-black text-base sm:text-lg">15+</div>
                    <div className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest">Cities<br/>Served</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Product Collection */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] w-full flex items-center justify-center mt-10 lg:mt-0"
            >
              {/* Floating Ingredients */}
              <motion.div
               initial={{ opacity: 0, scale: 0, rotate: -45 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.5 }}
               className="absolute top-10 left-10 z-20"
              >
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl filter drop-shadow-lg"
                >
                  🌶️
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute bottom-20 left-4 z-20"
              >
                <motion.div 
                  animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="text-4xl filter drop-shadow-lg"
                >
                  🧄
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.0, type: "spring", bounce: 0.5 }}
                className="absolute top-20 right-10 z-20"
              >
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 20, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="text-4xl filter drop-shadow-lg"
              >
                  🍅
                </motion.div>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.2, type: "spring", bounce: 0.5 }}
              className="absolute bottom-10 right-20 z-20"
              >
             <motion.div 
              animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="text-4xl filter drop-shadow-lg"
              >
                🌿
              </motion.div>
            </motion.div>

          {/* Product Bottles Carousel */}
          <div className="relative w-full h-[400px] md:h-full max-w-3xl mx-auto flex items-center justify-center mt-12 lg:mt-0 z-30">
            <HeroCarousel />
          </div>
        </motion.div>
      </div>
      </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-[#22120C] to-[#0F0A08] relative z-10">
        {/* Glows */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ff4e00]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-4">Our Signature Range</h2>
            <p className="text-white/70 text-lg font-medium">Discover the perfect companion for your burgers, fries, and everyday meals.</p>
          </div>
         
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
               className="group bg-white/5 backdrop-blur-md rounded-3xl p-6 shadow-2xl flex flex-col justify-between transition transform text-white border border-white/5 hover:border-white/20"
              >
                <div className="h-64 overflow-hidden relative rounded-xl mb-4 border border-black/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-[#ff4e00] backdrop-blur-md text-white border border-[#ff4e00]/30 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-bold text-lg mb-1 uppercase tracking-tight text-white">{product.name}</h3>
                  <p className="text-xs text-white/60 mb-4 line-clamp-2 font-medium">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-white">Rs. {(product.price * 100).toFixed(0)}</span>
                    <Link 
                      to={`/products`}
                      className="bg-[#ff4e00] text-white hover:bg-[#ffcd00] hover:text-black px-4 py-2 rounded-full font-bold uppercase tracking-wider text-xs transition-colors shadow-[0_0_15px_rgba(255,78,0,0.3)]"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/products" className="inline-flex items-center gap-2 text-[#ff4e00] font-black uppercase tracking-widest hover:text-black transition-colors">
              Explore All Sauces <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0F0A08] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-4">Loved by our Customers</h2>
            <p className="text-white/70 text-lg font-medium">Don't just take our word for it. See what real people are saying about our sauces.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Ayesha K.",
                review: "The Smoky Burger Sauce is an absolute game changer! It tastes exactly like the premium sauces you get at high-end burger joints.",
                rating: 5,
              },
              {
                id: 2,
                name: "Usman A.",
                review: "I've tried many local brands, but Dippis Garden's Chili Garlic sauce has the perfect balance of spice and flavor. Highly recommended!",
                rating: 5,
              },
              {
                id: 3,
                name: "Fatima S.",
                review: "Their Mayo Garlic is so rich and creamy. It's become a staple in our household for sandwiches and fries. Love the packaging too!",
                rating: 5,
              }
            ].map((testimonial) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-3xl p-8 relative border border-white/10 transition-transform backdrop-blur-sm"
              >
                <Quote className="w-10 h-10 text-[#ffcd00]/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ffcd00] text-[#ffcd00]" />
                  ))}
                </div>
                <p className="text-white/90 font-medium leading-relaxed mb-6 relative z-10">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff4e00] to-[#ffcd00] rounded-full flex items-center justify-center text-black font-bold uppercase shadow-[0_0_15px_rgba(255,78,0,0.3)]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <span className="text-xs text-white/60 font-medium uppercase tracking-wider">Verified Buyer</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-32 relative overflow-hidden bg-[#0F0A08]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff4e00]/20 to-[#ffcd00]/10"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 drop-shadow-2xl">
            CRAFTED FOR<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] italic filter drop-shadow-[0_0_20px_rgba(255,78,0,0.5)]">EVERY MEAL</span>
          </h2>
          <p className="text-white/70 font-light text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether it's a family barbecue, a quick snack, or a gourmet burger, our sauces are designed to bring out the best in your food.
          </p>
          <Link to="/about" className="inline-block bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] text-black px-8 py-4 rounded-full font-black uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,78,0,0.4)]">
            Discover Our Story
          </Link>
        </div>
      </section>
    </div>
  );
}
