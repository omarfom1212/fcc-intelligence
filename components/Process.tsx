import { Lightbulb, PenTool, Code2, CheckCircle } from "lucide-react";

import AnimatedSection from "./ui/AnimatedSection";

const steps = [

  {

    number: "01",

    title: "Understand",

    desc: "We understand your business, data, workflow, and expected outcomes.",

    Icon: Lightbulb,

    color: "text-cyan-400",

  },

  {

    number: "02",

    title: "Design",

    desc: "We design the structure, dashboard, or system before development.",

    Icon: PenTool,

    color: "text-yellow-400",

  },

  {

    number: "03",

    title: "Build",

    desc: "We build using modern tools, clean code, and best practices.",

    Icon: Code2,

    color: "text-purple-400",

  },

  {

    number: "04",

    title: "Deliver",

    desc: "We deliver, explain, and support your team to ensure success.",

    Icon: CheckCircle,

    color: "text-rose-400",

  },

];

export default function Process() {

  return (
<section id="process" className="py-24 px-6">
<AnimatedSection className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-[1fr_3fr] gap-10 items-start">
<div>
<p className="text-blue-400 text-sm font-medium mb-3">HOW WE WORK</p>
<h2 className="text-4xl font-bold mb-5">From Idea to Solution</h2>
<p className="text-gray-400">

              A clear process that ensures quality, transparency, and results.
</p>
</div>
<div className="grid md:grid-cols-4 gap-5">

            {steps.map((step, i) => (
<AnimatedSection key={step.number} delay={i * 0.1}>
<div className="relative h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-2 transition">
<div className="flex justify-between items-center mb-6">
<span className={`text-3xl font-bold ${step.color}`}>

                      {step.number}
</span>
<step.Icon className={`w-7 h-7 ${step.color}`} />
</div>
<h3 className="text-xl font-bold mb-3">{step.title}</h3>
<p className="text-gray-400 text-sm">{step.desc}</p>
</div>
</AnimatedSection>

            ))}
</div>
</div>
</AnimatedSection>
</section>

  );

}
 