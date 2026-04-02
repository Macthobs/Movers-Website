import React from 'react';
import { motion } from 'motion/react';
import { Users, HandCoins, Timer, Lightbulb } from 'lucide-react';

export default function App() {
  const testimonialCarouselRef = React.useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialCarouselRef.current) {
      const scrollAmount = 305 + 24; // width + gap
      testimonialCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white antialiased selection:bg-primary selection:text-dark">
      {/* 1. Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-heading font-bold tracking-tight text-dark flex items-center gap-2">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12L12 2l10 10-10 10L2 12z"/></svg>
              Movilo™
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-dark hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm font-medium text-gray hover:text-dark transition-colors">About</a>
              <a href="#services" className="text-sm font-medium text-gray hover:text-dark transition-colors">Services</a>
              <a href="#blog" className="text-sm font-medium text-gray hover:text-dark transition-colors">Blog</a>
              <a href="#contact" className="text-sm font-medium text-gray hover:text-dark transition-colors">Contact</a>
            </nav>
            <div className="hidden md:block">
              <a href="#quote" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-dark bg-primary hover:bg-primary-hover rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-sm">
                Help me move
              </a>
            </div>
            <button className="md:hidden p-2 text-dark">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="pt-28 pb-0 lg:pt-[60px] lg:pb-0 overflow-hidden">
        <div className="max-w-[1400px] mx-auto pl-6 pr-4 lg:pl-12 lg:pr-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-[40px] items-center justify-between">
            <div className="flex-1 max-w-2xl lg:mt-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-light text-sm font-medium text-dark mb-6">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Trusted moving services, Nationwide
              </div>
              <h1 className="text-5xl lg:text-[66px] font-bold tracking-tight leading-[1.1] mb-6 text-balance">
                Moving smarter <br/>starts here
              </h1>
              <p className="text-lg text-gray mb-10 leading-relaxed max-w-lg">
                Experience a hassle-free, seamless relocation with efficient, professional moving services tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#quote" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark bg-primary hover:bg-primary-hover rounded-full transition-all duration-200 hover:-translate-y-1 shadow-soft">
                  Get your free quote
                </a>
                <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-dark hover:text-gray transition-colors group">
                  View our offerings 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
            
            {/* Desktop Media (Hidden on Mobile/Tablet) */}
            <div className="hidden lg:flex justify-end gap-6 relative w-[650px] shrink-0 h-[775px] overflow-hidden mask-vertical-fade">
              {/* Column 1 */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-[310px] shrink-0"
              >
                <div className="animate-scroll-up" style={{ animationDelay: '-4s' }}>
                  {/* Set 1 */}
                  <div className="flex flex-col gap-6 pb-6">
                    <div className="h-[450px] w-full rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Movers carrying boxes" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="h-[450px] w-full rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" alt="Happy family moving" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                  {/* Set 2 (Duplicate for seamless loop) */}
                  <div className="flex flex-col gap-6 pb-6">
                    <div className="h-[450px] w-full rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Movers carrying boxes" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="h-[450px] w-full rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" alt="Happy family moving" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Column 2 */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-[310px] shrink-0 mt-24"
              >
                <div className="animate-scroll-up">
                  {/* Set 1 */}
                  <div className="flex flex-col gap-6 pb-6">
                    <div className="h-[370px] w-full rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" alt="Moving truck" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="h-[370px] w-full rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=800&q=80" alt="Professional movers" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                  {/* Set 2 (Duplicate for seamless loop) */}
                  <div className="flex flex-col gap-6 pb-6">
                    <div className="h-[370px] w-full rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" alt="Moving truck" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="h-[370px] w-full rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=800&q=80" alt="Professional movers" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile/Tablet Media (Hidden on Desktop) */}
            <div className="flex lg:hidden flex-col gap-4 relative w-[100vw] left-1/2 -translate-x-1/2 shrink-0 overflow-hidden mask-horizontal-fade mt-12">
              {/* Row 1 */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex w-full shrink-0"
              >
                <div className="flex animate-scroll-left" style={{ animationDelay: '-4s' }}>
                  {/* Set 1 */}
                  <div className="flex gap-4 pr-4">
                    <div className="w-[120px] h-[150px] md:w-[160px] md:h-[200px] rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Movers carrying boxes" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="w-[120px] h-[150px] md:w-[160px] md:h-[200px] rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" alt="Happy family moving" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                  {/* Set 2 (Duplicate for seamless loop) */}
                  <div className="flex gap-4 pr-4">
                    <div className="w-[120px] h-[150px] md:w-[160px] md:h-[200px] rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Movers carrying boxes" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="w-[120px] h-[150px] md:w-[160px] md:h-[200px] rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" alt="Happy family moving" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Row 2 */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex w-full shrink-0 ml-12"
              >
                <div className="flex animate-scroll-left">
                  {/* Set 1 */}
                  <div className="flex gap-4 pr-4">
                    <div className="w-[120px] h-[150px] md:w-[160px] md:h-[200px] rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" alt="Moving truck" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="w-[120px] h-[150px] md:w-[160px] md:h-[200px] rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=800&q=80" alt="Professional movers" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                  {/* Set 2 (Duplicate for seamless loop) */}
                  <div className="flex gap-4 pr-4">
                    <div className="w-[120px] h-[150px] md:w-[160px] md:h-[200px] rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" alt="Moving truck" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="w-[120px] h-[150px] md:w-[160px] md:h-[200px] rounded-[20px] overflow-hidden shadow-soft shrink-0">
                      <img src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=800&q=80" alt="Professional movers" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="py-8 border-b border-dashed border-gray-300 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <h3 className="text-lg lg:text-[20px] leading-tight font-medium text-dark max-w-[200px] shrink-0">
              110+ happy movers<br/>already on board.
            </h3>
            <div className="flex-1 w-full overflow-hidden mask-horizontal-fade">
              <div className="flex items-center gap-10 lg:gap-20 opacity-60 grayscale animate-scroll-left">
                {/* Logos */}
                <div className="text-xl font-heading font-bold tracking-widest">OSLO.</div>
                <div className="text-2xl font-heading italic">theo</div>
                <div className="text-xl font-heading font-bold uppercase flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg> KOBE</div>
                <div className="text-xl font-heading font-bold flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z"/></svg> Swiss</div>
                <div className="text-xl font-heading font-bold flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/></svg> Berlin.</div>
                <div className="text-xl font-heading font-bold flex items-center gap-1"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/></svg> Imprintify</div>
                {/* Duplicate for loop */}
                <div className="text-xl font-heading font-bold tracking-widest">OSLO.</div>
                <div className="text-2xl font-heading italic">theo</div>
                <div className="text-xl font-heading font-bold uppercase flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg> KOBE</div>
                <div className="text-xl font-heading font-bold flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z"/></svg> Swiss</div>
                <div className="text-xl font-heading font-bold flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/></svg> Berlin.</div>
                <div className="text-xl font-heading font-bold flex items-center gap-1"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/></svg> Imprintify</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left side text */}
            <div className="lg:w-1/2 shrink-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F4F4F4] text-sm font-medium text-dark mb-8">
                Why choose us
              </div>
              <h2 className="text-4xl lg:text-[56px] font-medium tracking-tight leading-[1.1] max-w-lg">
                Trusted movers who deliver peace of mind
              </h2>
            </div>
            
            {/* Right side grid */}
            <div className="flex-1 grid sm:grid-cols-2 gap-4 lg:gap-6">
              {/* Card 1 */}
              <div className="bg-[#F4F4F4] rounded-[24px] p-8 lg:p-10 flex flex-col justify-between h-[240px] lg:h-[280px]">
                <Users className="w-8 h-8 text-dark" strokeWidth={1.5} />
                <h3 className="text-[22px] font-medium text-dark leading-tight">Improved financial clarity</h3>
              </div>
              {/* Card 2 */}
              <div className="bg-[#F4F4F4] rounded-[24px] p-8 lg:p-10 flex flex-col justify-between h-[240px] lg:h-[280px]">
                <HandCoins className="w-8 h-8 text-dark" strokeWidth={1.5} />
                <h3 className="text-[22px] font-medium text-dark leading-tight">Transparent pricing</h3>
              </div>
              {/* Card 3 */}
              <div className="bg-[#F4F4F4] rounded-[24px] p-8 lg:p-10 flex flex-col justify-between h-[240px] lg:h-[280px]">
                <Timer className="w-8 h-8 text-dark" strokeWidth={1.5} />
                <h3 className="text-[22px] font-medium text-dark leading-tight">On-Time, Every time</h3>
              </div>
              {/* Card 4 */}
              <div className="bg-[#F4F4F4] rounded-[24px] p-8 lg:p-10 flex flex-col justify-between h-[240px] lg:h-[280px]">
                <Lightbulb className="w-8 h-8 text-dark" strokeWidth={1.5} />
                <h3 className="text-[22px] font-medium text-dark leading-tight">Full-Service solutions</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What We Offer Section */}
      <section id="services" className="flex flex-col lg:flex-row w-full min-h-[800px]">
        {/* Left Image */}
        <div className="lg:w-[45%] w-full h-[400px] lg:h-auto relative">
          <img src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=1200&q=80" alt="Professional movers carrying furniture" className="w-full h-full object-cover object-center" />
        </div>
        
        {/* Right Content */}
        <div className="lg:w-[55%] w-full bg-dark text-white p-10 lg:p-24 xl:p-32 flex flex-col justify-center">
          <div className="max-w-2xl w-full mx-auto lg:mx-0">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-sm font-medium text-dark w-max mb-8">
              What we offer
            </span>
            <h2 className="text-4xl lg:text-[56px] font-medium tracking-tight leading-[1.1] mb-16 text-white">
              Moving solutions built around you
            </h2>
            
            <ul className="space-y-0 mb-16">
              <li className="flex items-center justify-between border-b border-dashed border-white/20 py-6 group cursor-pointer">
                <span className="text-2xl lg:text-[28px] font-medium text-white">Residential moving</span>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-dark">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </div>
              </li>
              <li className="flex items-center justify-between border-b border-dashed border-white/20 py-6 group cursor-pointer">
                <span className="text-2xl lg:text-[28px] font-medium text-white/40 group-hover:text-white transition-colors">Long-Distance moving</span>
              </li>
              <li className="flex items-center justify-between border-b border-dashed border-white/20 py-6 group cursor-pointer">
                <span className="text-2xl lg:text-[28px] font-medium text-white/40 group-hover:text-white transition-colors">Commercial moving</span>
              </li>
              <li className="flex items-center justify-between border-b border-dashed border-white/20 py-6 group cursor-pointer">
                <span className="text-2xl lg:text-[28px] font-medium text-white/40 group-hover:text-white transition-colors">Packing & Unpacking</span>
              </li>
            </ul>
            
            <div>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark bg-primary hover:bg-primary-hover rounded-[12px] transition-all duration-200">
                View all services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Mission / Purpose Section */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 relative overflow-hidden bg-[#F4F4F4]">
        {/* Dotted line background graphic */}
        <svg className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1000 -100 C 1000 150, 1400 200, 1440 400" stroke="black" strokeWidth="1" strokeDasharray="4 4" fill="none" />
        </svg>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-sm font-medium text-dark mb-10 shadow-sm">
            Driven by purpose
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-medium leading-[1.2] text-dark max-w-5xl mx-auto tracking-tight">
            We’re not just about trucks and timelines, we’re about trust and responsibility. Our mission is to make every move smooth, secure, and stress-free, from the first box packed to the final delivery.
          </h2>
        </div>
      </section>

      {/* 7. Stats / Achievements Section */}
      <section className="pb-24 lg:pb-32 bg-[#F4F4F4]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            
            {/* Yellow Card (Spans 2 columns) */}
            <div className="md:col-span-2 bg-[#F8D166] rounded-[32px] p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between min-h-[360px] lg:min-h-[420px]">
              {/* Dotted circle graphic */}
              <svg className="absolute top-0 left-1/3 w-[500px] h-[500px] -translate-y-1/2 opacity-20 pointer-events-none" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="199" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
              
              <div className="relative z-10">
                <span className="text-sm font-medium text-dark block mb-2">Moves completed</span>
              </div>
              
              <div className="relative z-10 max-w-sm mt-auto">
                <h3 className="text-5xl lg:text-[64px] font-medium text-dark mb-4 tracking-tight">1,500+</h3>
                <p className="text-dark/80 text-base lg:text-lg leading-snug">
                  Whether it's a local apartment or a large office move, we've successfully relocated thousands.
                </p>
              </div>
              
              {/* Van Image */}
              <div className="absolute bottom-0 right-0 w-[70%] md:w-[60%] lg:w-[55%] max-w-[500px] translate-x-4 translate-y-4">
                <img src="https://images.unsplash.com/photo-1617500563456-4318021481b4?auto=format&fit=crop&w=800&q=80" alt="Moving Van" className="w-full h-auto object-contain mix-blend-multiply" />
              </div>
            </div>

            {/* Image Card 1 */}
            <div className="md:col-span-1 rounded-[32px] overflow-hidden min-h-[360px] lg:min-h-[420px]">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Packing boxes" className="w-full h-full object-cover" />
            </div>

            {/* Image Card 2 */}
            <div className="md:col-span-1 rounded-[32px] overflow-hidden min-h-[360px] lg:min-h-[420px]">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" alt="Fun moving" className="w-full h-full object-cover" />
            </div>

            {/* White Card */}
            <div className="md:col-span-1 bg-white rounded-[32px] p-8 lg:p-12 flex flex-col justify-between min-h-[360px] lg:min-h-[420px]">
              <div>
                <span className="text-sm font-medium text-dark block mb-2">Industry experience</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-5xl lg:text-[56px] font-medium text-dark mb-4 tracking-tight">10+ Years</h3>
                <p className="text-gray text-base lg:text-lg leading-snug">
                  A decade of expertise means you're in safe, experienced hands.
                </p>
              </div>
            </div>

            {/* Black Card */}
            <div className="md:col-span-1 bg-dark rounded-[32px] p-8 lg:p-12 flex flex-col justify-between min-h-[360px] lg:min-h-[420px] text-white">
              <div>
                <span className="text-sm font-medium text-white/50 block mb-2">Customer satisfaction</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-5xl lg:text-[56px] font-medium text-white mb-4 tracking-tight">98%</h3>
                <p className="text-white/80 text-base lg:text-lg leading-snug mb-8">
                  Our clients love us for our reliability, speed, and stress-free service.
                </p>
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-dark object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                  <img className="w-10 h-10 rounded-full border-2 border-dark object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                  <img className="w-10 h-10 rounded-full border-2 border-dark object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                  <img className="w-10 h-10 rounded-full border-2 border-dark object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                  <div className="w-10 h-10 rounded-full border-2 border-dark bg-black flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Pricing Plans Section */}
      <section id="pricing" className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Column */}
            <div className="lg:w-[30%] shrink-0">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#F4F4F4] text-sm font-medium text-dark mb-8">
                Transparent & Flexible pricing
              </span>
              <h2 className="text-4xl lg:text-[51px] font-medium tracking-tight mb-16 leading-[1.1]">
                Choose the plan<br/>that fits your move
              </h2>
              
              <div className="bg-[#F4F4F4] rounded-[32px] p-8 lg:p-10">
                <h3 className="text-[22px] font-medium text-dark mb-3">Need a custom quote?</h3>
                <p className="text-gray text-base mb-8">Contact us for a personalized plan based on your exact needs.</p>
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-dark hover:bg-dark/90 rounded-[12px] transition-all duration-200">
                  Request a custom quote
                </a>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="lg:w-[70%] grid md:grid-cols-2 gap-4 lg:gap-6">
              
              {/* Basic Move Container */}
              <div className="bg-[#F4F4F4] rounded-[32px] p-4 lg:p-6 flex flex-col">
                {/* White Card */}
                <div className="bg-white rounded-[24px] p-6 lg:p-8 mb-8">
                  <h3 className="text-[22px] font-medium text-dark mb-3">Basic move</h3>
                  <p className="text-gray text-base mb-8 h-12">Perfect for short-distance relocations within the same city.</p>
                  
                  <div className="border-b border-dashed border-gray-300 mb-8"></div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[48px] font-medium tracking-tight">$199</span>
                    <a href="#book" className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-dark bg-[#F8D166] hover:bg-[#e5bc50] rounded-[12px] transition-all duration-200">
                      Get started now
                    </a>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="px-4 lg:px-6 pb-4">
                  <p className="text-sm font-medium text-gray mb-6">Included features:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Local relocation (within city)
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> 2 Movers + Truck
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Basic packing supplies
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Loading & unloading
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Furniture loading & unloading
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Dolly & Basic equipment provided
                    </li>
                  </ul>
                </div>
              </div>

              {/* Full-Service Move Container */}
              <div className="bg-[#F4F4F4] rounded-[32px] p-4 lg:p-6 flex flex-col">
                {/* Yellow Card */}
                <div className="bg-[#F8D166] rounded-[24px] p-6 lg:p-8 mb-8">
                  <h3 className="text-[22px] font-medium text-dark mb-3">Full-Service move</h3>
                  <p className="text-dark/80 text-base mb-8 h-12">Ideal for intercity or cross-state moves with added care.</p>
                  
                  <div className="border-b border-dashed border-dark/20 mb-8"></div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[48px] font-medium tracking-tight">$499</span>
                    <a href="#book" className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-dark hover:bg-dark/90 rounded-[12px] transition-all duration-200">
                      Get started now
                    </a>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="px-4 lg:px-6 pb-4">
                  <p className="text-sm font-medium text-gray mb-6">Included features:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Long or short-distance moves
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Professional packing & unpacking
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Loading & Unloading
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> 3 skilled movers + Moving truck
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Appliance handling
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Blankets, straps & Protective gear
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Flexible scheduling
                    </li>
                    <li className="flex items-start gap-2 text-base text-dark">
                      <span className="mt-0.5">•</span> Insurance coverage
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <section className="py-24 lg:py-32 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#F4F4F4] text-sm font-medium text-dark mb-6">
                Trusted by customers
              </span>
              <h2 className="text-4xl lg:text-[56px] font-medium tracking-tight max-w-2xl leading-[1.1]">
                Trusted by families and businesses alike
              </h2>
            </div>
            <div className="hidden md:flex gap-3">
              <button onClick={() => scrollTestimonials('left')} className="w-14 h-14 rounded-[16px] bg-[#F4F4F4] flex items-center justify-center hover:bg-gray-200 transition-colors text-dark">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={() => scrollTestimonials('right')} className="w-14 h-14 rounded-[16px] bg-[#F4F4F4] flex items-center justify-center hover:bg-gray-200 transition-colors text-dark">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div ref={testimonialCarouselRef} className="flex gap-6 overflow-hidden pb-8 px-6 lg:px-12 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {/* Card 0 (Partial Left) */}
          <div className="shrink-0 w-[305px] bg-[#F4F4F4] rounded-[32px] p-8 flex flex-col h-[420px]">
            <p className="text-[18px] leading-snug text-dark mb-8 flex-grow font-medium">
              "The best moving experience I've ever had. They were professional, fast, and took great care of my belongings."
            </p>
            <div className="border-t border-dashed border-gray-300 pt-6 flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Sarah J" className="w-12 h-12 rounded-[12px] object-cover" />
              <div>
                <h4 className="font-medium text-dark text-base">Sarah J</h4>
                <p className="text-sm text-gray">Miami, FL</p>
              </div>
            </div>
          </div>

          {/* Card 1 */}
          <div className="shrink-0 w-[305px] bg-[#F4F4F4] rounded-[32px] p-8 flex flex-col h-[420px]">
            <p className="text-[18px] leading-snug text-dark mb-8 flex-grow font-medium">
              I was worried about damage, but every piece arrived just as it left. Highly recommend! The movers were on time, courteous.
            </p>
            <div className="border-t border-dashed border-gray-300 pt-6 flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Michael Kee" className="w-12 h-12 rounded-[12px] object-cover" />
              <div>
                <h4 className="font-medium text-dark text-base">Michael Kee</h4>
                <p className="text-sm text-gray">Seattle, WA</p>
              </div>
            </div>
          </div>

          {/* Card 2 (Image Background) */}
          <div className="shrink-0 w-[305px] rounded-[32px] p-8 flex flex-col h-[420px] relative overflow-hidden text-white">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Derrick Warner" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
            <div className="relative z-10 flex flex-col h-full justify-end">
              <p className="text-[18px] leading-snug font-medium mb-8 text-white">
                Moving always feels overwhelming, but they truly made it a breeze
              </p>
              <div className="border-t border-dashed border-white/30 pt-6">
                <h4 className="font-medium text-base text-white">Derrick Warner</h4>
                <p className="text-sm text-white/70">New York, NY</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="shrink-0 w-[305px] bg-[#F4F4F4] rounded-[32px] p-8 flex flex-col h-[420px]">
            <p className="text-[18px] leading-snug text-dark mb-8 flex-grow font-medium">
              I was dreading the move, but they made it so easy. Everything arrived safely and on time. The team was respectful and helpful.
            </p>
            <div className="border-t border-dashed border-gray-300 pt-6 flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Jessica Leo" className="w-12 h-12 rounded-[12px] object-cover" />
              <div>
                <h4 className="font-medium text-dark text-base">Jessica Leo</h4>
                <p className="text-sm text-gray">Austin, TX</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="shrink-0 w-[305px] bg-[#F4F4F4] rounded-[32px] p-8 flex flex-col h-[420px]">
            <p className="text-[18px] leading-snug text-dark mb-8 flex-grow font-medium">
              The crew was friendly, fast, and incredibly organized. They handled our large furniture with ease and didn't leave a scratch.
            </p>
            <div className="border-t border-dashed border-gray-300 pt-6 flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Aiden T" className="w-12 h-12 rounded-[12px] object-cover" />
              <div>
                <h4 className="font-medium text-dark text-base">Aiden T</h4>
                <p className="text-sm text-gray">Boston, MA</p>
              </div>
            </div>
          </div>
          
          {/* Card 5 (Partial Right) */}
          <div className="shrink-0 w-[305px] bg-[#F4F4F4] rounded-[32px] p-8 flex flex-col h-[420px]">
            <p className="text-[18px] leading-snug text-dark mb-8 flex-grow font-medium">
              "Fantastic service from start to finish. The pricing was transparent and the movers were incredibly efficient."
            </p>
            <div className="border-t border-dashed border-gray-300 pt-6 flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Emily R" className="w-12 h-12 rounded-[12px] object-cover" />
              <div>
                <h4 className="font-medium text-dark text-base">Emily R</h4>
                <p className="text-sm text-gray">Chicago, IL</p>
              </div>
            </div>
          </div>

        </div>
        
        {/* Centered Button */}
        <div className="mt-12 flex justify-center">
          <a href="#insights" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-dark bg-[#F4F4F4] hover:bg-gray-200 rounded-full transition-all duration-200">
            Moving Tips & Insights
          </a>
        </div>
      </section>

      {/* 10. Blog Teaser Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-gray-border rounded-full p-4 pl-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight">Guides and tips for a smooth move</h2>
            <a href="#blog" className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white bg-dark hover:bg-dark/90 rounded-full transition-all duration-200 whitespace-nowrap">
              View all blogs
            </a>
          </div>
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="relative py-32 lg:py-40 px-6 text-center flex flex-col items-center justify-center min-h-[600px]">
        <img src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1600&q=80" alt="Moving journey" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-sm font-medium text-dark mb-8 shadow-sm">
            Start your journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium !text-white tracking-tight mb-10 text-balance leading-[1.1]" style={{ color: 'white' }}>
            Let’s make your next move effortless and worry-free.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#book" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark bg-[#F8D166] hover:bg-[#e5bc50] rounded-[12px] transition-all duration-200">
              Book your move now
            </a>
            <a href="#quote" className="w-full sm:w-auto inline-flex items-center justify-center text-base font-medium text-white hover:text-gray-200 transition-colors group">
              <span className="border-b border-white pb-0.5">Get a free quote</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="bg-[#F4F4F4] pt-20 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
            <div className="lg:col-span-7">
              <p className="text-[20px] font-medium text-dark mb-6">Subscribe to our newsletter.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input type="email" placeholder="Enter your email" required className="flex-grow px-5 py-4 rounded-[12px] border border-dashed border-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-dark focus:border-transparent transition-shadow text-base" />
                <button type="submit" className="px-8 py-4 bg-[#F8D166] hover:bg-[#e5bc50] text-dark font-semibold rounded-[12px] transition-colors text-base whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-4">
                <li><a href="#services" className="text-dark hover:text-gray-600 transition-colors text-base">Services</a></li>
                <li><a href="#contact" className="text-dark hover:text-gray-600 transition-colors text-base">Contact</a></li>
                <li><a href="#pricing" className="text-dark hover:text-gray-600 transition-colors text-base">Pricing</a></li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-4">
                <li><a href="#404" className="text-dark hover:text-gray-600 transition-colors text-base">404</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-dashed border-gray-300 flex flex-col md:flex-row items-center justify-end gap-6">
            <div className="flex items-center gap-6">
              <a href="#" className="text-dark hover:text-gray-600 transition-colors flex items-center gap-2 text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>Facebook</span>
              </a>
              <a href="#" className="text-dark hover:text-gray-600 transition-colors flex items-center gap-2 text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
