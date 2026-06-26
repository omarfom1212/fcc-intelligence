import {

  Brain,

  BarChart3,

  Code2,

  Smartphone,

  PieChart,

  Settings,

} from "lucide-react";

import AnimatedSection from "./ui/AnimatedSection";

const services = [

  {

    title: "AI Solutions",

    desc: "Automation, predictions, recommendations, and intelligent workflows.",

    Icon: Brain,

  },

  {

    title: "Business Intelligence",

    desc: "Power BI dashboards, KPIs, reporting, and decision analytics.",

    Icon: BarChart3,

  },

  {

    title: "Web Applications",

    desc: "Modern, fast, and secure web applications for real business needs.",

    Icon: Code2,

  },

  {

    title: "Mobile Applications",

    desc: "Cross-platform mobile apps built for performance and usability.",

    Icon: Smartphone,

  },

  {

    title: "Data Analytics",

    desc: "Data cleaning, modeling, visualization, and insight generation.",

    Icon: PieChart,

  },

  {

    title: "Process Automation",

    desc: "Automate repetitive tasks and build efficient business processes.",

    Icon: Settings,

  },

];

export default function Services() {

  return (
<section id="services" className="relative py-24 px-6 border-t border-white/10">
<div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
<AnimatedSection className="relative max-w-7xl mx-auto grid lg:grid-cols-[1fr_2.2fr] gap-10">
<div>
<p className="text-blue-400 text-sm font-medium mb-3">WHAT WE DO</p>
<h2 className="text-4xl font-bold mb-5">

            Smart Solutions for Modern Businesses
</h2>
<p className="text-gray-400">

            We combine data, technology, and design to deliver solutions that

            drive efficiency and growth.
</p>
</div>
<div className="grid md:grid-cols-3 gap-5">

          {services.map(({ title, desc, Icon }, i) => (
<AnimatedSection key={title} delay={i * 0.08}>
<div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/60 hover:-translate-y-2 transition duration-300 shadow-[0_0_30px_rgba(37,99,235,0.08)]">
<Icon className="w-9 h-9 text-blue-400 mb-6" />
<h3 className="font-bold text-lg mb-3">{title}</h3>
<p className="text-gray-400 text-sm">{desc}</p>
</div>
</AnimatedSection>

          ))}
</div>
</AnimatedSection>
</section>

  );

}
 