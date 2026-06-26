"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Hero() {
 return (
<section className="relative min-h-screen px-6 pt-32 pb-20 glow-grid overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-44 wave opacity-70" />
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
<motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
<div className="inline-flex px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs tracking-widest mb-6">
           AI • DATA • ENTERPRISE SOLUTIONS
</div>
<h1 className="text-5xl md:text-7xl font-bold leading-tight">
           FCC Intelligence
<span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
             From Data to Decisions
</span>
</h1>
<p className="mt-6 text-gray-300 text-lg max-w-xl">
           We build modern applications, Power BI dashboards, AI-powered tools, and business systems that help companies understand data, automate workflows, and make smarter decisions.
</p>
<div className="mt-9 flex gap-4">
<a href="#services" className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition">
             Explore Services →
</a>
<a href="#portfolio" className="px-7 py-4 rounded-xl border border-white/15 hover:bg-white/10 transition">
             View Work
</a>
</div>
<div className="mt-12">
<p className="text-blue-400 text-sm mb-4">Trusted by companies and teams</p>
<div className="flex gap-6 text-gray-500 text-lg flex-wrap">
<span>Microsoft</span>
<span>Google</span>
<span>Power BI</span>
<span>AWS</span>
</div>
</div>
</motion.div>
<motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9 }} className="relative">
<div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-blue-600/40 to-purple-600/40 blur-2xl" />
<div className="relative rounded-[2rem] border border-blue-500/40 bg-[#030712]/80 p-6 shadow-2xl">
<div className="flex justify-between mb-5">
<div>
<p className="text-blue-400 text-sm">Live Showcase</p>
<h3 className="text-2xl font-bold">Sales Performance Dashboard</h3>
</div>
<span className="h-fit px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-xs">
               ● Updated Live
</span>
</div>
<div className="grid grid-cols-3 gap-5 mb-6">
<Stat title="Total Revenue" value="2.30M" />
<Stat title="Avg Order Value" value="229.86" />
<Stat title="Total Orders" value="9994" />
</div>
<div className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10">
<Image src="/images/dashboard-1.png" alt="dashboard" fill className="object-cover" />
</div>
<div className="flex justify-center gap-2 mt-5">
<span className="w-2 h-2 rounded-full bg-blue-400" />
<span className="w-2 h-2 rounded-full bg-white/30" />
<span className="w-2 h-2 rounded-full bg-white/30" />
</div>
</div>
</motion.div>
</div>
</section>
 );
}
function Stat({ title, value }: { title: string; value: string }) {
 return (
<div>
<p className="text-blue-400 text-xs mb-1">{title}</p>
<p className="text-2xl font-bold">{value}</p>
</div>
 );
}