import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {

  return (
<footer className="px-6 py-14 border-t border-white/10 bg-[#030712]">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
<div>
<h3 className="text-2xl font-bold">

            FCC <span className="text-sm">Intelligence</span>
</h3>
<p className="text-blue-400 text-xs mb-5">From Data to Decisions</p>
<p className="text-gray-400">

            We help businesses understand their data, automate workflows, and

            build modern digital solutions that drive growth.
</p>
</div>
<div>
<h4 className="font-bold mb-4">Quick Links</h4>
<div className="space-y-2 text-gray-400">
<p>Services</p>
<p>Work</p>
<p>Packages</p>
<p>Process</p>
<p>Contact</p>
</div>
</div>
<div>
<h4 className="font-bold mb-4">Services</h4>
<div className="space-y-2 text-gray-400">
<p>AI Solutions</p>
<p>Business Intelligence</p>
<p>Web Applications</p>
<p>Data Analytics</p>
<p>Process Automation</p>
</div>
</div>
<div>
<h4 className="font-bold mb-4">Contact Us</h4>
<div className="space-y-4 text-gray-400">
<p className="flex gap-3">
<Mail className="w-4 h-4 text-blue-400" />

              fccadmin7@gmail.com
</p>
<p className="flex gap-3">
<Phone className="w-4 h-4 text-blue-400" />

              +968 97655700
</p>
<p className="flex gap-3">
<MapPin className="w-4 h-4 text-blue-400" />

              Muscat, Oman
</p>
</div>
</div>
</div>
<p className="text-center text-gray-500 text-sm mt-12">

        © 2026 FCC Intelligence. All rights reserved.
</p>
</footer>

  );

}
 