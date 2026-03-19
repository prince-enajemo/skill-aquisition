


export default function Home() {
  return (
    <div className="bg-black text-[#FDF6F0] font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg tracking-wide">SkillForge</h1>
          <a
            href="/apply"
            className="bg-[#800020] px-5 py-2 rounded-full text-sm font-semibold"
          >
            Apply Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5905754/pexels-photo-5905754.jpeg"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#800020]/30 blur-[120px] rounded-full top-20"></div>

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-[#800020] mb-4">
            Free Scholarship Program
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Learn Skills That Can <br />
            <span className="text-[#800020]">Change Your Life</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            A fully funded program designed to equip Nigerians with practical,
            income-generating skills — at no cost.
          </p>

          <a
            href="/apply"
            className="bg-[#800020] px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
          >
            Apply for Free
          </a>

          <p className="text-sm text-gray-400 mt-4">
            Limited slots • Selection based
          </p>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="relative -mt-20 z-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-3 text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl py-10">
          <div>
            <h2 className="text-3xl font-bold text-[#800020]">5K+</h2>
            <p className="text-gray-400 text-sm">Applicants</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#800020]">500+</h2>
            <p className="text-gray-400 text-sm">Selected</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#800020]">70%</h2>
            <p className="text-gray-400 text-sm">Now Earning</p>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="relative py-32 px-6 bg-black text-center overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-[#800020]/20 blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="uppercase text-sm tracking-widest text-[#800020] mb-4">
            Our Purpose
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Why This Program Exists
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Too many talented Nigerians lack access to the right opportunities.
            <br /><br />
            This scholarship bridges that gap — giving you structure,
            mentorship, and real-world skills that can change your future.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Lack of Access",
              "No Clear Direction",
              "Limited Opportunities",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:scale-105 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="py-32 px-6 bg-[#FDF6F0] text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <div>
            <p className="text-[#800020] uppercase text-sm mb-4">
              Our Approach
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Built for People Ready to Change Their Story
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Every part of this program is structured to move you from
              beginner to income-ready.
            </p>

            <div className="space-y-4">
              {[
                "Structured learning path",
                "Hands-on real projects",
                "Mentorship support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#800020] rounded-full"></div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg"
              className="rounded-2xl shadow-2xl group-hover:scale-105 transition"
            />

            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
              <h4 className="font-bold text-[#800020]">
                Skill → Confidence → Income
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-32 px-6 bg-black text-center overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#800020]/20 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          <h2 className="text-5xl font-bold mb-20">How It Works</h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            {["Apply", "Get Selected", "Start Learning"].map((step, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:scale-105 transition"
              >
                <div className="text-6xl font-bold text-[#800020] mb-6">
                  0{i + 1}
                </div>
                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 px-6 bg-[#FDF6F0] text-black">
        <h2 className="text-5xl font-bold text-center mb-16">
          Real People. Real Change.
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.pexels.com/photos/1181627/pexels-photo-1181627.jpeg"
            className="rounded-2xl shadow-2xl"
          />

          <div>
            <p className="italic text-xl mb-6">
              “This opportunity completely changed my direction. I now have a
              skill I can rely on.”
            </p>
            <p className="text-[#800020] font-semibold">
              – Program Beneficiary
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 text-center bg-black overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[#800020]/20 blur-[150px] rounded-full left-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            This Could Be Your Turning Point
          </h2>

          <p className="text-gray-400 mb-10">
            One decision can change everything. Apply now.
          </p>

          <a
            href="/apply"
            className="bg-[#800020] px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
          >
            Apply for Free
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

    {/* BRAND */}
    <div>
      <h2 className="text-xl font-bold mb-4">SkillForge</h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        Empowering Nigerians with free access to life-changing skills,
        mentorship, and real opportunities.
      </p>

      {/* Glow badge */}
      <div className="mt-4 inline-block bg-[#800020]/20 text-[#800020] px-4 py-2 rounded-full text-xs glow">
        Scholarship Program 🇳🇬
      </div>
    </div>

    {/* PROGRAM */}
    <div>
      <h3 className="font-semibold mb-4 text-[#FFF8F0]">Program</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li className="hover:text-white cursor-pointer transition">How it works</li>
        <li className="hover:text-white cursor-pointer transition">Eligibility</li>
        <li className="hover:text-white cursor-pointer transition">Application</li>
        <li className="hover:text-white cursor-pointer transition">FAQs</li>
      </ul>
    </div>

    {/* SKILLS */}
    <div>
      <h3 className="font-semibold mb-4 text-[#FFF8F0]">Skills</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li className="hover:text-white transition">Web Development</li>
        <li className="hover:text-white transition">Design</li>
        <li className="hover:text-white transition">Marketing</li>
        <li className="hover:text-white transition">Video Editing</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="font-semibold mb-4 text-[#FFF8F0]">Contact</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>Email: support@skillforge.com</li>
        <li>Location: Nigeria 🇳🇬</li>
      </ul>

      {/* CTA */}
      <a
        href="/apply"
        className="inline-block mt-4 bg-[#800020] px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition"
      >
        Apply Now
      </a>
    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
    <p>© 2026 SkillForge Scholarship. All rights reserved.</p>

    <div className="flex gap-6 mt-4 md:mt-0">
      <span className="hover:text-white cursor-pointer transition">Privacy</span>
      <span className="hover:text-white cursor-pointer transition">Terms</span>
    </div>
  </div>

</footer>
    </div>
  );
}