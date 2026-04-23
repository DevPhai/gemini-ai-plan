/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ComparisonTable } from "./components/ComparisonTable";
import { PlanComparison } from "./components/PlanComparison";
import { TCOSection } from "./components/TCOSection";
import { ClosingArgument } from "./components/ClosingArgument";
import { SourceCitations } from "./components/SourceCitations";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <Navbar />

      <Hero />

          {/* Plan Comparison Section */}
          <PlanComparison />

      

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
            
            <div className="text-center relative z-10">
              <h2 className="text-5xl font-black mb-4">Google AI Pro</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                รับสิทธิ์เข้าถึงในระดับที่สูงขึ้นสำหรับฟีเจอร์ใหม่ที่ทรงพลังเพื่อเพิ่มประสิทธิภาพการทำงานและความคิดสร้างสรรค์
              </p>
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className="text-7xl font-bold text-white leading-none tracking-tighter">฿750</span>
                <div className="text-left border-l border-gray-800 pl-4">
                  <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">THB/เดือน</div>
                  <div className="text-blue-400 text-lg font-bold italic">Google AI Pro Plan</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-left mb-16 max-w-3xl mx-auto">
                {[
                  "แอป Gemini: 3.1 Pro, Deep Research, Nano Banana Pro และ Veo 3.1 Lite",
                  "เครดิต AI รายเดือน 1,000 เครดิต (สำหรับการสร้างวิดีโอใน Flow และ Whisk)",
                  "Flow: สิทธิ์เข้าถึงเครื่องมือสร้างภาพยนตร์ด้วย AI และ Veo 3.1 แบบจำกัด",
                  "Gemini Code Assist และ Gemini CLI (เพิ่มเพดานขีดจำกัดคำขอรายวัน)",
                  "Google Antigravity: แพลตฟอร์มการพัฒนาด้าน Agentic AI",
                  "NotebookLM: ผู้ช่วยด้านการวิจัย เพิ่มขีดจำกัดขึ้นถึง 5 เท่า",
                  "Gemini ใน Gmail, Docs, Vids และแอปอื่นๆ ของ Google",
                  "พื้นที่เก็บข้อมูล 5 TB สำหรับ Photos, ไดรฟ์ และ Gmail",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <span className="text-gray-300 font-medium text-sm">{item}</span>
                  </div>
                ))}
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
