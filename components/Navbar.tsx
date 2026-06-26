export default function Navbar() {
 return (
<nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div>
<h1 className="text-2xl font-bold tracking-tight">FCC <span className="text-sm font-medium">Intelligence</span></h1>
<p className="text-[11px] text-blue-400 -mt-1">From Data to Decisions</p>
</div>
<div className="hidden md:flex gap-8 text-sm text-gray-300">
<a href="#services" className="hover:text-white">Services</a>
<a href="#portfolio" className="hover:text-white">Work</a>
<a href="#process" className="hover:text-white">Process</a>
<a href="#contact" className="hover:text-white">Contact</a>
</div>
<a href="#contact" className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition">
         Get Started →
</a>
</div>
</nav>
 );
}