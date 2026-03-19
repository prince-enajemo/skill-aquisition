"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="bg-black text-[#FDF6F0] font-sans">

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg tracking-wide">SkillForge</h1>
          <a
            href="/apply"
            className="bg-[#800020] px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
          >
            Apply Now
          </a>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

        <img
          src="https://images.pexels.com/photos/5905754/pexels-photo-5905754.jpeg"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] bg-[#800020]/30 blur-[120px] rounded-full top-20"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl"
        >
          <motion.p variants={fadeUp} className="uppercase tracking-widest text-sm text-[#800020] mb-4">
            Free Scholarship Program
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6">
            Learn Skills That Can <br />
            <span className="text-[#800020]">Change Your Life</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg text-gray-300 mb-10">
            A fully funded program designed to equip Nigerians with practical,
            income-generating skills — at no cost.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="/apply"
            className="bg-[#800020] px-10 py-4 rounded-full text-lg font-semibold 
            hover:scale-105 hover:shadow-[0_0_40px_rgba(128,0,32,0.6)] transition"
          >
            Apply for Free
          </motion.a>
        </motion.div>
      </section>

      {/* IMPACT */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="relative -mt-20 px-6"
      >
        <motion.div
          variants={fadeUp}
          className="max-w-5xl mx-auto grid grid-cols-3 text-center 
          bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl py-10"
        >
          {["5K+ Applicants", "500+ Selected", "70% Earning"].map((item) => (
            <motion.div key={item} variants={fadeUp}>
              <h2 className="text-3xl font-bold text-[#800020]">{item.split(" ")[0]}</h2>
              <p className="text-gray-400 text-sm">{item.split(" ").slice(1).join(" ")}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* WHY */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="py-32 px-6 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-5xl font-bold mb-6">
          Why This Program Exists
        </motion.h2>

        <motion.p variants={fadeUp} className="text-gray-400 max-w-3xl mx-auto mb-12">
          Too many talented Nigerians lack access to the right opportunities.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {["Access", "Direction", "Opportunity"].map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SPLIT */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-32 px-6 bg-[#FDF6F0] text-black"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <motion.div variants={fadeUp}>
            <h2 className="text-5xl font-bold mb-6">
              Built for People Ready to Change Their Story
            </h2>
            <p className="text-lg text-gray-700">
              Structured training that leads to real results.
            </p>
          </motion.div>

          <motion.img
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </motion.section>

      {/* HOW */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="py-32 px-6 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-5xl font-bold mb-16">
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Apply", "Get Selected", "Start Learning"].map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl"
            >
              <div className="text-6xl text-[#800020] mb-4">0{i + 1}</div>
              {step}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-32 text-center"
      >
        <h2 className="text-5xl font-bold mb-6">
          This Could Be Your Turning Point
        </h2>

        <motion.a
          whileHover={{ scale: 1.08 }}
          href="/apply"
          className="bg-[#800020] px-12 py-4 rounded-full text-lg font-semibold 
          hover:shadow-[0_0_40px_rgba(128,0,32,0.6)]"
        >
          Apply for Free
        </motion.a>
      </motion.section>

    </div>
  );
}