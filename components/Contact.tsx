import { Mail, MessageCircle } from "lucide-react";

import AnimatedSection from "./ui/AnimatedSection";

export default function Contact() {

  return (
<section id="contact" className="py-20 px-6">
<AnimatedSection className="max-w-7xl mx-auto">
<div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-white/5 p-10 md:p-14">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-transparent" />
<div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-600/30 blur-[120px]" />
<div className="relative grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-bold mb-4">

                Ready to build something{" "}
<span className="text-blue-400">intelligent?</span>
</h2>
<p className="text-gray-300">

                Let’s build systems that turn data into action and ideas into

                real solutions.
</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 md:justify-end">
<a

                href="mailto:hello@fcc-intelligence.com"

                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
>
<Mail className="w-5 h-5" />

                Email Us
</a>
<a

                href="https://wa.me/96800000000"

                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition"
>
<MessageCircle className="w-5 h-5 text-green-400" />

                WhatsApp
</a>
</div>
</div>
</div>
</AnimatedSection>
</section>

  );

}
 