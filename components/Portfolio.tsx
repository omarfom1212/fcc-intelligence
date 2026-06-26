import Image from "next/image";
import AnimatedSection from "./ui/AnimatedSection";
const works = [
 {
   title: "Power BI Decision Dashboard",
   desc: "Interactive KPI dashboard for business performance and decision support.",
   img: "/images/dashboard-1.png",
 },
 {
   title: "AI-Powered Marketplace",
   desc: "A modern marketplace with analytics, recommendations, and bilingual support.",
   img: "/images/dashboard-1.png",
 },
 {
   title: "Data Analytics Report",
   desc: "Cleaned data, visualized trends, and extracted useful business insights.",
   img: "/images/dashboard-1.png",
 },
];
export default function Portfolio() {
 return (
<section id="portfolio" className="relative py-24 px-6">
<AnimatedSection className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-10">
<div>
<p className="text-blue-400 text-sm font-medium mb-3">OUR WORK</p>
<h2 className="text-4xl font-bold">Selected Projects</h2>
<p className="text-gray-400 mt-3">
             Real dashboards, real applications, real impact.
</p>
</div>
<button className="hidden md:block px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition">
           View All Projects
</button>
</div>
<div className="grid md:grid-cols-3 gap-6">
         {works.map((work, i) => (
<AnimatedSection key={work.title} delay={i * 0.1}>
<div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 hover:-translate-y-2 transition duration-300">
<div className="relative h-56 bg-slate-900">
<Image
                   src={work.img}
                   alt={work.title}
                   fill
                   className="object-cover"
                 />
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2">{work.title}</h3>
<p className="text-gray-400 text-sm mb-4">{work.desc}</p>
<p className="text-blue-400 text-sm">View Case Study →</p>
</div>
</div>
</AnimatedSection>
         ))}
</div>
</AnimatedSection>
</section>
 );
}