import React, { useState } from 'react';

// SVG icons for social links
const GitHubIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
);
const DribbbleIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2.05 13h19.9M8.21 2.05a10 10 0 015.58 19.9M17.74 6.26a10 10 0 01-11.48 11.48"/></svg>
);
const FramerIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm0 8h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"/></svg>
);

const navLinks = [
  { href: '#home', label: 'home' },
  { href: '#works', label: 'works' },
  { href: '#about-me', label: 'about-me' },
  { href: '#contacts', label: 'contacts' },
];

function MobileSidebar({ open, onClose, active }) {
  return (
    <div className={`fixed inset-0 z-50 bg-[#2a2c33] transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} md:hidden flex flex-col`}>
      <div className="flex items-center justify-between px-5 pt-5 pb-8">
        <span className="font-mono font-bold text-lg text-white flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /></svg>
          Elias
        </span>
        <button onClick={onClose} aria-label="Close sidebar">
          <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <nav className="flex-1 flex flex-col gap-6 px-8 pt-2">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`font-mono text-2xl font-bold ${active === link.href ? 'text-white' : 'text-purple-400'} transition`}
            onClick={onClose}
          >
            #{link.label}
          </a>
        ))}
      </nav>
      <div className="flex justify-center gap-8 pb-8 mt-auto">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><GitHubIcon /></a>
        <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><DribbbleIcon /></a>
        <a href="https://framer.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FramerIcon /></a>
      </div>
    </div>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#23252b] text-gray-100 font-mono relative overflow-x-hidden">
      {/* Mobile Sidebar */}
      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Header */}
      <header className="flex items-center justify-between px-5 pt-5 w-full">
        <span className="font-mono font-bold text-lg text-white flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /></svg>
          Alex
        </span>
        {/* Desktop nav links - show at md and up */}
        <nav className="hidden md:flex space-x-8 text-sm items-center">
          <a href="#home" className="font-mono font-bold text-purple-400 hover:text-white transition">#home</a>
          <a href="#projects" className="font-mono font-bold text-purple-400 hover:text-white transition">#projects</a>
          <a href="#about-me" className="font-mono font-bold text-purple-400 hover:text-white transition">#about-me</a>
          <a href="#contacts" className="font-mono font-bold text-purple-400 hover:text-white transition">#contacts</a>
        </nav>
        {/* Hamburger for mobile/tablet (show below md) */}
        <button
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </header>
      {/* Hero Section (revert to md: breakpoints) */}
      <section className="flex flex-col md:flex-row items-start max-w-6xl mx-auto pt-10 md:pt-16 pb-8 px-4 sm:px-8 md:px-0 relative z-10" id="hero">
        {/* Left: Text */}
        <div className="flex-1 pt-4 md:pt-8 px-0 md:px-8 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Alex is a <span className="text-purple-400 font-mono">pentester</span> and <br className="hidden sm:block" />
            <span className="text-purple-400 font-mono">back-end developer</span>
          </h1>
          <p className="mb-8 text-gray-400 text-base sm:text-lg">He crafts a secure and stable backend for your applications</p>
          <a
            href="#contacts"
            className="px-5 py-2 border border-purple-400 text-purple-300 rounded hover:bg-purple-400 hover:text-gray-900 transition font-mono"
          >
            Contact me !!
          </a>
        </div>
        {/* Right: Image and decorations */}
        <div className="relative flex flex-col items-center px-0 md:px-8 w-full md:w-auto mt-8 md:mt-0">
          {/* Geometric SVG shapes - stepped, interlocking pattern */}
          <svg className="absolute -top-8 -left-8 md:-left-20 z-0" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <rect x="0" y="40" width="60" height="60" stroke="#a78bfa" strokeWidth="2"/>
            <rect x="30" y="10" width="60" height="60" stroke="#a78bfa" strokeWidth="2"/>
            <rect x="60" y="-20" width="60" height="60" stroke="#a78bfa" strokeWidth="2"/>
          </svg>
          {/* Placeholder for masked person image */}
          <div className="w-48 h-56 sm:w-60 sm:h-72 md:w-72 md:h-80 bg-gray-700 rounded-lg flex items-center justify-center z-10 overflow-hidden">
            <img
              src="/main-photo.png"
              alt="Main"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Badge */}
          <div className="flex items-center mt-4 bg-[#23252b] border border-gray-600 px-4 py-2 rounded z-10">
            <span className="w-4 h-4 bg-purple-400 rounded mr-2 inline-block"></span>
            <span className="text-gray-200 font-mono text-xs sm:text-sm">Currently working on <span className="font-bold">Portfolio</span></span>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      <section className="relative flex justify-center items-center px-2 sm:px-8 py-6 min-h-[120px] sm:min-h-[140px] mt-0 mb-0">
        {/* Decorative geometric square on the right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 border border-gray-400 w-10 h-10 sm:w-16 sm:h-16" style={{opacity:0.5}} />
        <div className="relative">
          {/* Main quote box */}
          <div className="relative border border-gray-400 px-2 sm:px-6 pt-6 pb-10 min-w-[220px] sm:min-w-[400px] max-w-xs sm:max-w-2xl">
            {/* Opening quote */}
            <span className="absolute -top-4 left-4 text-2xl text-gray-400 select-none">&ldquo;</span>
            <p className="font-mono text-base sm:text-lg text-center text-white font-bold tracking-wide">With great power comes great electricity bill</p>
            {/* Closing quote (for author box) */}
            <span className="absolute bottom-2 right-8 sm:right-24 text-2xl text-gray-400 select-none">&rdquo;</span>
          </div>
          {/* Author box */}
          <div className="absolute right-0 -bottom-10 border border-gray-400 bg-[#23252b] px-4 sm:px-6 py-2 sm:py-3 min-w-[120px] sm:min-w-[160px] flex items-center">
            <span className="font-mono text-base sm:text-lg text-white">- Dr. Who</span>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="px-0 pt-10 md:pt-16 pb-8 flex flex-col items-center relative" id="projects">
        {/* Decorative rectangle on the right */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 border border-gray-400 h-24 md:h-48 w-[40px] md:w-[90px]" style={{opacity:0.5}} />
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mb-8 px-4 sm:px-8">
          <div className="flex items-center flex-1 w-full">
            <span className="font-mono text-2xl md:text-3xl font-bold text-purple-400 mr-2">#</span>
            <span className="font-mono text-2xl md:text-3xl font-bold text-white">projects</span>
            <div className="flex-1 ml-2 md:ml-4 h-px w-24 md:w-80 bg-purple-400 opacity-70" />
          </div>
          <a href="/projects" className="font-mono text-white text-base md:text-lg flex items-center ml-0 md:ml-8 whitespace-nowrap mt-4 md:mt-0">
            <span>View all</span>
            <svg className="ml-2" width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8c4-6 8 6 12 0s8 6 12 0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M26 2l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8">
          {/* Project Card 1 */}
          <div className="border border-gray-400 bg-[#23252b] flex flex-col min-h-[320px] md:min-h-[380px]">
            {/* Top image/banner */}
            <div className="h-20 md:h-32 bg-gradient-to-br from-[#2d2323] to-[#23252b] flex items-center justify-center border-b border-gray-400">
              <span className="text-white font-bold text-lg md:text-xl">[Image]</span>
            </div>
            {/* Tech stack bar */}
            <div className="border-b border-gray-400 bg-[#23252b] px-4 py-2 font-mono text-gray-300 text-xs md:text-sm">HTML SCSS Python Flask</div>
            {/* Content */}
            <div className="flex-1 flex flex-col px-4 py-4">
              <div className="font-mono text-lg md:text-xl font-bold text-white mb-1">ChertNodes</div>
              <div className="font-mono text-gray-400 text-sm md:text-base mb-4">Minecraft servers hosting</div>
              <div className="flex space-x-3 mt-auto">
                <button className="font-mono px-3 md:px-4 py-1 border border-purple-400 text-white rounded bg-transparent hover:bg-purple-400 hover:text-gray-900 transition flex items-center text-base">
                  Live <span className="ml-2">⇔</span>
                </button>
                <button className="font-mono px-3 md:px-4 py-1 border border-gray-400 text-white rounded bg-transparent hover:bg-gray-400 hover:text-gray-900 transition flex items-center text-base">
                  Cached <span className="ml-2">&gt;</span>
                </button>
              </div>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="border border-gray-400 bg-[#23252b] flex flex-col min-h-[320px] md:min-h-[380px]">
            {/* Top image/banner */}
            <div className="h-20 md:h-32 bg-gradient-to-br from-[#232b23] to-[#23252b] flex items-center justify-center border-b border-gray-400">
              <span className="text-white font-bold text-lg md:text-xl">[Image]</span>
            </div>
            {/* Tech stack bar */}
            <div className="border-b border-gray-400 bg-[#23252b] px-4 py-2 font-mono text-gray-300 text-xs md:text-sm">React Express Discord.js Node.js<br/>HTML SCSS Python Flask</div>
            {/* Content */}
            <div className="flex-1 flex flex-col px-4 py-4">
              <div className="font-mono text-lg md:text-xl font-bold text-white mb-1">ProtectX</div>
              <div className="font-mono text-gray-400 text-sm md:text-base mb-4">Discord anti-crash bot</div>
              <div className="flex space-x-3 mt-auto">
                <button className="font-mono px-3 md:px-4 py-1 border border-purple-400 text-white rounded bg-transparent hover:bg-purple-400 hover:text-gray-900 transition flex items-center text-base">
                  Live <span className="ml-2">⇔</span>
                </button>
              </div>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="border border-gray-400 bg-[#23252b] flex flex-col min-h-[320px] md:min-h-[380px]">
            {/* Top image/banner */}
            <div className="h-20 md:h-32 bg-gradient-to-br from-[#3b237a] to-[#23252b] flex items-center justify-center border-b border-gray-400">
              <span className="text-white font-bold text-lg md:text-xl">[Image]</span>
            </div>
            {/* Tech stack bar */}
            <div className="border-b border-gray-400 bg-[#23252b] px-4 py-2 font-mono text-gray-300 text-xs md:text-sm">CSS Express Node.js</div>
            {/* Content */}
            <div className="flex-1 flex flex-col px-4 py-4">
              <div className="font-mono text-lg md:text-xl font-bold text-white mb-1">Kahoot Answers Viewer</div>
              <div className="font-mono text-gray-400 text-sm md:text-base mb-4">Get answers to your kahoot quiz</div>
              <div className="flex space-x-3 mt-auto">
                <button className="font-mono px-3 md:px-4 py-1 border border-purple-400 text-white rounded bg-transparent hover:bg-purple-400 hover:text-gray-900 transition flex items-center text-base">
                  Live <span className="ml-2">⇔</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="relative max-w-6xl mx-auto pt-10 md:pt-16 pb-8 px-2 sm:px-4 md:px-0 flex flex-col items-start" id="skills">
        <div className="w-full flex flex-col md:flex-row items-start px-0 md:px-8">
          {/* Left: Title and decorations */}
          <div className="flex-1 relative min-h-[300px] md:min-h-[400px]">
            {/* Section title and underline */}
            <div className="flex items-center mb-8">
              <span className="font-mono text-2xl md:text-3xl font-bold text-purple-400 mr-2">#</span>
              <span className="font-mono text-2xl md:text-3xl font-bold text-white">skills</span>
              <div className="ml-2 md:ml-4 h-px w-24 md:w-80 bg-purple-400 opacity-50 mt-2" />
            </div>
            {/* Decorative dot grids */}
            <svg className="absolute left-12 md:left-24 top-12 md:top-24" width="80" height="80" fill="none">
              {Array.from({length: 5}).map((_, i) => (
                Array.from({length: 5}).map((_, j) => (
                  <circle key={i+','+j} cx={10 + i*15} cy={10 + j*15} r="2" fill="#A3A3A3" opacity="0.5" />
                ))
              ))}
            </svg>
            <svg className="absolute left-32 md:left-64 top-8 md:top-12" width="100" height="100" fill="none">
              <rect x="0" y="0" width="100" height="100" stroke="#a78bfa" strokeWidth="2" />
            </svg>
            <svg className="absolute left-24 md:left-40 top-40 md:top-64" width="60" height="60" fill="none">
              <rect x="0" y="0" width="60" height="60" stroke="#a78bfa" strokeWidth="2" />
            </svg>
            <svg className="absolute left-36 md:left-56 top-28 md:top-40" width="40" height="40" fill="none">
              <rect x="0" y="0" width="40" height="40" stroke="#A3A3A3" strokeWidth="2" opacity="0.5" />
            </svg>
            <svg className="absolute left-32 md:left-48 top-32 md:top-36" width="80" height="80" fill="none">
              {Array.from({length: 4}).map((_, i) => (
                Array.from({length: 4}).map((_, j) => (
                  <circle key={i+','+j} cx={10 + i*15} cy={10 + j*15} r="2" fill="#A3A3A3" opacity="0.5" />
                ))
              ))}
            </svg>
            {/* Overlapping purple squares */}
            <svg className="absolute left-20 md:left-32 top-56 md:top-80" width="140" height="140" fill="none">
              <rect x="0" y="40" width="60" height="60" stroke="#a78bfa" strokeWidth="2"/>
              <rect x="30" y="10" width="60" height="60" stroke="#a78bfa" strokeWidth="2"/>
            </svg>
          </div>
          {/* Right: Skill boxes 2x2 grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4 md:gap-8 mt-8 md:mt-24 w-full">
            <div className="border border-gray-400 bg-transparent min-w-[180px] md:min-w-[260px]">
              <div className="font-mono font-bold text-base md:text-lg text-white border-b border-gray-400 px-4 py-2">Languages</div>
              <div className="font-mono text-gray-300 px-4 py-2 text-sm md:text-base">C C++<br/>Python JavaScript</div>
            </div>
            <div className="border border-gray-400 bg-transparent min-w-[180px] md:min-w-[260px]">
              <div className="font-mono font-bold text-base md:text-lg text-white border-b border-gray-400 px-4 py-2">Databases</div>
              <div className="font-mono text-gray-300 px-4 py-2 text-sm md:text-base">SQLite MariaDB</div>
            </div>
            <div className="border border-gray-400 bg-transparent min-w-[180px] md:min-w-[260px]">
              <div className="font-mono font-bold text-base md:text-lg text-white border-b border-gray-400 px-4 py-2">Tools</div>
              <div className="font-mono text-gray-300 px-4 py-2 text-sm md:text-base">Nmap Burp Suite<br/>Wireshark Gobuster</div>
            </div>
            <div className="border border-gray-400 bg-transparent min-w-[180px] md:min-w-[260px]">
              <div className="font-mono font-bold text-base md:text-lg text-white border-b border-gray-400 px-4 py-2">Frameworks</div>
              <div className="font-mono text-gray-300 px-4 py-2 text-sm md:text-base">Fastify Express Flask</div>
            </div>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <section className="flex flex-col md:flex-row items-start max-w-6xl mx-auto pt-10 md:pt-16 pb-8 px-4 sm:px-8 md:px-0 relative" id="about-me">
        {/* Left: Text */}
        <div className="flex-1 px-0 md:px-8 w-full">
          <div className="flex items-center mb-8 whitespace-nowrap">
            <span className="font-mono text-2xl md:text-3xl font-bold text-purple-400 mr-2 whitespace-nowrap">#</span>
            <span className="font-mono text-2xl md:text-3xl font-bold text-white whitespace-nowrap">about-me</span>
            <div className="ml-2 md:ml-4 h-px w-24 md:w-[400px] bg-purple-400 opacity-50 mt-2" />
          </div>
          <p className="mb-4 text-gray-400 font-mono text-base md:text-lg">Hello, i’m Alex!</p>
          <p className="mb-4 text-gray-400 font-mono text-base md:text-lg">
          I’m a self-taught back-end developer and passionate penetration tester based in Casablanca, Morocco. I build secure and stable backend systems from scratch and enjoy finding vulnerabilities to improve software security. I’m always learning and exploring ways to combine development with cybersecurity.
          </p>
          <button className="px-6 py-2 border border-purple-400 text-white rounded hover:bg-purple-400 hover:text-gray-900 transition font-mono text-base md:text-lg flex items-center">
            Read more <span className="ml-2">→</span>
          </button>
        </div>
        {/* Right: Image and decorations */}
        <div className="flex-1 flex flex-col items-center justify-center relative px-0 md:px-8 w-full md:w-auto mt-8 md:mt-0">
          {/* Decorative dots */}
          <svg className="absolute left-0 top-8 md:top-12" width="100" height="100" fill="none">
            <rect x="0" y="0" width="100" height="100" stroke="#A3A3A3" strokeWidth="2" opacity="0.5" />
          </svg>
          <svg className="absolute right-0 top-12 md:top-24" width="120" height="40" fill="none">
            {Array.from({length: 2}).map((_, i) => (
              Array.from({length: 8}).map((_, j) => (
                <circle key={i+','+j} cx={10 + j*15} cy={10 + i*15} r="2" fill="#A3A3A3" opacity="0.5" />
              ))
            ))}
          </svg>
          {/* Placeholder for about-me image */}
          <div className="w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-96 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden z-10">
            <img
              src="/main-photo-2.png"
              alt="About Me"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Decorative dots below image */}
          <svg className="absolute right-0 bottom-0" width="160" height="40" fill="none">
            {Array.from({length: 2}).map((_, i) => (
              Array.from({length: 8}).map((_, j) => (
                <circle key={i+','+j} cx={10 + j*18} cy={10 + i*15} r="2" fill="#A3A3A3" opacity="0.5" />
              ))
            ))}
          </svg>
          {/* Purple underline at the bottom */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-purple-400 opacity-50" />
        </div>
      </section>
      {/* Contacts Section */}
      <section className="flex flex-col md:flex-row items-start max-w-6xl mx-auto pt-10 md:pt-16 pb-8 px-4 sm:px-8 md:px-0 relative justify-between mb-8 md:mb-16" id="contacts">
        {/* Left: Text */}
        <div className="flex-1 px-0 md:px-8 w-full">
          <div className="flex items-center mb-8">
            <span className="font-mono text-2xl md:text-3xl font-bold text-purple-400 mr-2">#</span>
            <span className="font-mono text-2xl md:text-3xl font-bold text-white">contacts</span>
            <div className="ml-2 md:ml-4 h-px w-24 md:w-80 bg-purple-400 opacity-50 mt-2" />
          </div>
          <p className="mb-0 text-gray-300 font-mono text-base md:text-xl whitespace-pre-line">
            I’m interested in job opportunities. However,
            if you have other request or question, don’t
            hesitate to contact me
          </p>
        </div>
        {/* Right: Contact Info Box */}
        <div className="flex-1 flex flex-col items-end px-0 md:px-8 justify-end w-full md:w-auto mt-8 md:mt-0">
          <div className="border border-gray-400 bg-transparent p-4 sm:p-8 min-w-[220px] sm:min-w-[320px] flex flex-col items-start mt-4 md:mt-12">
            <span className="font-mono font-bold text-lg md:text-xl text-gray-200 mb-4">Message me here</span>
            <div className="flex items-center mb-3 text-gray-400 font-mono text-base md:text-lg">
              {/* Discord icon */}
              <svg className="w-6 h-6 md:w-7 md:h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.164-.385-.405-.874-.617-1.249a.07.07 0 00-.073-.035 19.736 19.736 0 00-4.885 1.515.064.064 0 00-.03.027C.533 9.045-.32 13.579.099 18.057a.08.08 0 00.031.056c2.052 1.507 4.041 2.422 5.992 3.029a.077.077 0 00.084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 01-.008-.127c.125-.094.25-.192.371-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.122.099.246.198.372.292a.077.077 0 01-.006.127 12.298 12.298 0 01-1.873.891.076.076 0 00-.04.105c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028c1.961-.607 3.95-1.522 6.002-3.029a.077.077 0 00.031-.055c.5-5.177-.838-9.673-3.548-13.661a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/>
              </svg>
              alex.asm
            </div>
            <div className="flex items-center text-gray-400 font-mono text-base md:text-lg mb-3">
              {/* X (Twitter) icon */}
              <svg className="w-6 h-6 md:w-7 md:h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.53 2.47a.75.75 0 0 1 1.06 1.06l-5.72 5.72 5.72 5.72a.75.75 0 0 1-1.06 1.06l-5.72-5.72-5.72 5.72a.75.75 0 0 1-1.06-1.06l5.72-5.72-5.72-5.72z"/>
              </svg>
              al3xx_xy
            </div>
            <div className="flex items-center text-gray-400 font-mono text-base md:text-lg">
              {/* Email icon */}
              <svg className="w-6 h-6 md:w-7 md:h-7 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
              Alex@dev.me
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="w-full border-t border-gray-400 py-6 sm:py-8 bg-transparent">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-4 sm:px-8">
          {/* Left: Name, email, role */}
          <div className="flex flex-col items-start mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /></svg>
              <span className="font-mono font-bold text-lg md:text-xl text-white mr-4">Alex</span>
              <span className="font-mono text-gray-300 text-base md:text-lg">alex@dev.me</span>
            </div>
            <span className="font-mono text-lg md:text-xl text-gray-300">pentester and back-end developer</span>
          </div>
          {/* Right: Media */}
          <div className="flex flex-col items-end">
            <span className="font-mono font-bold text-lg md:text-xl text-white mb-2">Media</span>
            <div className="flex space-x-4 md:space-x-6">
              {/* GitHub icon */}
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-400 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                </svg>
              </a>
              {/* LinkedIn icon */}
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-400 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                </svg>
              </a>
              {/* X (Twitter) icon */}
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-400 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.53 2.47a.75.75 0 0 1 1.06 1.06l-5.72 5.72 5.72 5.72a.75.75 0 0 1-1.06 1.06l-5.72-5.72-5.72 5.72a.75.75 0 0 1-1.06-1.06l5.72-5.72-5.72-5.72z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-4 sm:mt-8 text-base sm:text-lg text-gray-400 font-mono">
          © Copyright 2025. Made by Alex
        </div>
      </footer>
    </div>
  );
}

export default App;
