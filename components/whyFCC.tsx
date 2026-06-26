import { ShieldCheck, Zap, LineChart, Layers } from "lucide-react";

import AnimatedSection from "./ui/AnimatedSection";

const points = [

  {

    icon: LineChart,

    title: "Decision-Focused",

    desc: "We design insights that support real business decisions.",

  },

  {

    icon: Zap,

    title: "Fast Execution",

    desc: "We move from idea to working solution quickly.",

  },

  {

    icon: Layers,

    title: "End-to-End Solutions",

    desc: "Dashboards, applications, automation, and data systems.",

  },

  {

    icon: ShieldCheck,

    title: "Built for Growth",

    desc: "Solutions designed to grow with your business.",

  },

];

export default function WhyFCC() {

  return (
<section className="py-24 px-6 bg-white/[0.02]">
<AnimatedSection className="max-w-7xl mx-auto">
<p className="text-blue-400 font-medium mb-3">Why FCC Intelligence</p>
<h2 className="text-4xl md:text-5xl font-bold mb-5">

          We build systems that turn data into action.
</h2>
<p className="text-gray-400 text-lg max-w-3xl mb-12">

          Our focus is simple: help businesses understand their data, improve

          operations, and build digital tools that create measurable value.
</p>
<div className="grid md:grid-cols-4 gap-6">

          {points.map((point, i) => (
<AnimatedSection key={point.title} delay={i * 0.08}>
<div className="h-full p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition">
<point.icon className="w-8 h-8 text-blue-400 mb-5" />
<h3 className="text-xl font-semibold mb-3">{point.title}</h3>
<p className="text-gray-400">{point.desc}</p>
</div>
</AnimatedSection>

          ))}
</div>
</AnimatedSection>
</section>

  );

}
 