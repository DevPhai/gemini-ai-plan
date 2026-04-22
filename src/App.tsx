/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ComparisonTable } from "./components/ComparisonTable";
import { TCOSection } from "./components/TCOSection";
import { CounterRebuttal } from "./components/CounterRebuttal";
import { ClosingArgument } from "./components/ClosingArgument";
import { SourceCitations } from "./components/SourceCitations";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <Navbar />

      <Hero />

      {/* Comparison Section */}
      <section id="compare" className="py-32 px-4 bg-[#080808] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">เปรียบเทียบความคุ้มค่า</h2>
              <p className="text-gray-500 text-lg">
                ทำไม Gemini ถึงเป็นทางเลือกที่ดีที่สุดสำหรับมือโปรที่ต้องการผลลัพธ์ที่เหนือกว่า ในราคาที่คุ้มค่ากว่าเดิม
              </p>
            </div>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-widest border border-gray-800 px-4 py-2 rounded-lg">
              Competitive Matrix · April 2026
            </div>
          </div>
          <ComparisonTable />
          <div className="mt-8 text-center text-sm text-gray-500 italic">
            * ทุกตัวเลข <a href="#sources" className="underline hover:text-blue-400 transition-colors">ตรวจสอบได้ที่ Sources</a>
            {" · "}
            Intelligence Index จาก{" "}
            <a
              href="https://artificialanalysis.ai/models?intelligence=artificial-analysis-intelligence-index"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400 transition-colors"
            >
              Artificial Analysis (Frontier Model Leaderboard)
            </a>
          </div>
        </div>
      </section>

      <TCOSection />

      <CounterRebuttal />

      {/* Intelligence vs. Price Chart Section */}
      <section className="py-32 px-4 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Intelligence vs. Price</h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              วิเคราะห์ความคุ้มค่าผ่านกราฟ Intelligence Index เทียบกับราคาต่อ 1M Tokens
              <span className="text-blue-400 font-semibold block mt-2">
                Gemini ครองตำแหน่งใน "Most Attractive Quadrant" อย่างโดดเด่น
              </span>
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-[3rem] p-4 md:p-8 relative overflow-hidden shadow-2xl">
            <div className="w-full overflow-hidden rounded-2xl">
              <img src="/intelligence-vs-price.png" alt="Intelligence vs. Price Graph" className="w-full h-auto" />
            </div>

            <div className="mt-8 p-6 bg-blue-500/5 rounded-3xl border border-blue-500/20">
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-blue-400 font-bold block mb-2 uppercase tracking-tighter">
                  Insights: ความคุ้มค่าที่ไม่เคยมีมาก่อน
                </span>
                กราฟแสดงให้เห็นว่า <span className="text-white font-bold">Gemini 3.1 Pro</span> และ{" "}
                <span className="text-white font-bold">Flash</span> อยู่ในโซนสีเขียว (Most Attractive Quadrant)
                ซึ่งหมายถึงการได้ Intelligence ระดับสูงในราคาที่ต่ำกว่าคู่แข่งอย่าง Claude Opus เกือบ 2 เท่า
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Killer Feature Section */}
      <section id="benefits" className="py-32 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-12 lg:col-span-8 bg-gradient-to-br from-gray-900 to-[#0f0f0f] border border-gray-800 rounded-[3rem] p-12 relative overflow-hidden group">
              <div className="relative z-10 max-w-lg">
                <h3 className="text-4xl font-bold mb-6">อ่าน PDF 2,000 หน้าในพริบตา</h3>
                <p className="text-gray-400 text-xl mb-8 leading-relaxed">
                  "หมัดเด็ด: ด้วย Context Window 2 ล้าน Tokens คุณสามารถใส่หนังสือยกชุด หรือ Codebase ทั้งโปรเจกต์ เพื่อให้ Gemini ช่วยวิเคราะห์ได้ทันที"
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3">
                    <Check className="text-green-500 w-5 h-5" />
                    <span className="text-sm font-semibold">2,000,000+ Tokens</span>
                  </div>
                  <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3">
                    <Check className="text-green-500 w-5 h-5" />
                    <span className="text-sm font-semibold">Native Apps</span>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute right-0 bottom-0 opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-[500px] h-[500px]" />
              </motion.div>
            </div>

            <div className="md:col-span-12 lg:col-span-4 grid gap-8">
              <div className="bg-[#0f0f0f] border border-gray-800 rounded-[3rem] p-10 flex flex-col justify-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8">
                  <Check className="text-black w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Workspace Native</h4>
                <p className="text-gray-400">ร่างอีเมล ดึงข้อมูลจาก Docs หรือวิเคราะห์ชีทงานได้ทันทีเพียงปลายนิ้ว</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Offer Section */}
      <section id="offer" className="py-32 px-4 bg-gradient-to-t from-blue-900/10 to-[#050505] scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0f0f0f] rounded-[4rem] p-12 md:p-20 border border-gray-800 relative overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.1)]">
            <div className="absolute top-0 right-0">
              <div className="bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-10 py-2 rotate-45 translate-x-12 translate-y-10 shadow-lg">
                Exclusive Offer
              </div>
            </div>

            <div className="text-center relative z-10">
              <h2 className="text-5xl font-black mb-6">Google One AI Premium</h2>
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className="text-7xl font-bold text-white leading-none tracking-tighter">750.-</span>
                <div className="text-left border-l border-gray-800 pl-4">
                  <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">ต่อเดือน</div>
                  <div className="text-blue-400 text-lg font-bold italic">แผน AI Pro ระดับพรีเมียม</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-left mb-16 max-w-3xl mx-auto">
                {[
                  "Gemini 3 Pro & Gemini 3 Ultra",
                  "1,000 AI Credits ต่อเดือน",
                  "พื้นที่เก็บข้อมูล 5 TB ในบัญชีเดิม",
                  "Deep Search & Veo 2 (Video Gen)",
                  "Gemini Code Assist & Jules",
                  "NotebookLM Pro (Unlimited Source)",
                  "YouTube Premium & Music",
                  "Gemini API Keys & AI Studio Credits",
                  "สิทธิสมาชิกระดับพรีเมียม Google One",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <span className="text-gray-300 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-8">
                <button className="w-full md:w-auto bg-white text-black px-16 py-6 rounded-2xl text-xl font-black transition-all hover:scale-[1.03] shadow-2xl flex items-center justify-center gap-4 group">
                  สมัครใช้งานทันที
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </button>

                <div className="bg-white/5 border border-gray-800 px-8 py-5 rounded-3xl text-center">
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-2">สิทธิพิเศษสำหรับคุณ</p>
                  <p className="text-lg text-white font-black">ลดทันที 50% ต่อเนื่อง 6 เดือน</p>
                </div>
              </div>
              <p className="mt-12 text-gray-600 text-xs tracking-wide">
                ยกเลิกได้ทุกเมื่อ | เป็นไปตามข้อกำหนดและเงื่อนไขของ Google One
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingArgument />

      <SourceCitations />

      <Footer />
    </div>
  );
}
