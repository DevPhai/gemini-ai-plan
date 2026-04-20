/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Check, 
  ChevronRight, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Users, 
  Smartphone, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Mail,
  FileText,
  Calendar
} from "lucide-react";
import { useState } from "react";

const COMPETITORS = [
  { name: "Gemini 3.1 Pro", context: "2,500,000+", intelligence: 57, quality: "A+", speed: "เร็วที่สุด" },
  { name: "Claude 4.7 Opus", context: "1,000,000", intelligence: 57, quality: "A", speed: "เร็ว" },
  { name: "GPT-5.4 (xhigh)", context: "500,000", intelligence: 57, quality: "A", speed: "เร็ว" },
  { name: "Copilot (v3)", context: "500,000", intelligence: 51, quality: "B+", speed: "เร็ว" },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 h-16">
    <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-tr from-blue-500 via-purple-500 to-red-400 p-1.5 rounded-lg">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight text-white">Google One <span className="text-blue-400">AI</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#benefits" className="hover:text-white transition-colors">Features</a>
        <a href="#compare" className="hover:text-white transition-colors">Comparison</a>
        <a href="#offer" className="hover:text-white transition-colors">Enterprise</a>
      </div>
      <button className="px-5 py-2 rounded-full border border-gray-700 text-white text-sm font-semibold hover:bg-white/5 transition-all">
        Sign In
      </button>
    </div>
  </nav>
);

const ComparisonCard = () => {
  return (
    <div className="overflow-x-auto rounded-3xl border border-gray-800 bg-[#0f0f0f] shadow-2xl">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-white/5">
            <th className="p-6 font-semibold text-gray-300">Frontier Metric</th>
            {COMPETITORS.map((c) => (
              <th key={c.name} className={`p-6 font-bold ${c.name.includes("Google") ? "text-blue-400" : "text-gray-500"}`}>
                {c.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          <tr>
            <td className="p-6 text-sm font-medium text-gray-400">Intelligence Index (0-100)</td>
            {COMPETITORS.map((c) => (
              <td key={c.name} className="p-6">
                <span className={`text-sm font-bold ${c.name.includes("Google") ? "text-blue-400" : "text-gray-300"}`}>{c.intelligence}</span>
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-6 text-sm font-medium text-gray-400">Context Window</td>
            {COMPETITORS.map((c) => (
              <td key={c.name} className="p-6">
                <span className={`text-sm font-bold ${c.name.includes("Google") ? "text-blue-400" : "text-gray-300"}`}>{c.context}</span>
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-6 text-sm font-medium text-gray-400">Reasoning Quality</td>
            {COMPETITORS.map((c) => (
              <td key={c.name} className="p-6 text-sm text-gray-300">
                <span className={c.quality === "A+" ? "text-green-400 font-bold" : "text-gray-300"}>{c.quality}</span>
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-6 text-sm font-medium text-gray-400">Speed (Latency)</td>
            {COMPETITORS.map((c) => (
              <td key={c.name} className="p-6 text-sm text-gray-300">{c.speed}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold mb-8 border border-blue-500/20 w-fit uppercase tracking-widest">
              NEW: GEMINI 3.1 ULTRA NOW AVAILABLE
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              มากกว่า AI<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">คือเพื่อนคู่คิดในทุกงาน</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              ปลดล็อกพลัง AI ที่ฉลาดที่สุดจาก Google ผสานเข้ากับ Gmail, Docs และ Drive พร้อมพื้นที่เก็บข้อมูล 2TB ในแพ็คเกจเดียว
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative bg-white text-black px-10 py-5 rounded-xl text-lg font-bold transition-all flex items-center gap-3 overflow-hidden"
              >
                เริ่มต้นใช้งาน Google AI Pro
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </button>
              <div className="text-sm text-gray-500 italic">
                *750.-/เดือน หรือเลือกสมัครรายปีเพื่อความคุ้มค่ากว่า
              </div>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-gray-800 pt-10">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">2TB</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Storage Included</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">Ultra</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Reasoning Model</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-green-500">Secure</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Cloud Security</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 p-1 bg-gradient-to-br from-gray-800 to-transparent rounded-[3rem]">
              <div className="bg-[#0f0f0f] rounded-[2.9rem] p-10 overflow-hidden border border-white/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Gemini Advanced</div>
                    <div className="text-xs text-gray-500 uppercase">Live Processing...</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-gray-800 rounded-full animate-pulse" />
                  <div className="h-4 w-full bg-gray-800 rounded-full animate-pulse delay-75" />
                  <div className="h-4 w-1/2 bg-gray-800 rounded-full animate-pulse delay-150" />
                </div>
                <div className="mt-12 p-6 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-3xl border border-blue-500/30">
                  <div className="text-blue-300 font-bold mb-1 italic">"สรุปข้อมูล PDF 50 หน้าให้ฉันที"</div>
                  <div className="text-xs text-gray-400">ประมวลผลเสร็จสิ้นใน 1.2 วินาที</div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-32 px-4 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">เปรียบเทียบความคุ้มค่า</h2>
              <p className="text-gray-500 text-lg">
                ทำไม Gemini ถึงเป็นทางเลือกที่ดีที่สุดสำหรับมือโปรที่ต้องการผลลัพธ์ที่เหนือกว่า ในราคาที่คุ้มค่ากว่าเดิม
              </p>
            </div>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-widest border border-gray-800 px-4 py-2 rounded-lg">
              Competitive Matrix 2026
            </div>
          </div>
          <ComparisonCard />
          <div className="mt-12 text-center text-sm text-gray-500 italic">
            * ข้อมูลวิเคราะห์อิสระและ Intelligence Index โดย <a href="https://artificialanalysis.ai/models?intelligence=artificial-analysis-intelligence-index" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 transition-colors">Artificial Analysis (Frontier Model Leaderboard)</a>
          </div>
        </div>
      </section>

      {/* Intelligence vs. Price Chart Section */}
      <section className="py-32 px-4 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Intelligence vs. Price</h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              วิเคราะห์ความคุ้มค่าผ่านกราฟ Intelligence Index เทียบกับราคาต่อ 1M Tokens 
              <span className="text-blue-400 font-semibold block mt-2">Gemini ครองตำแหน่งใน "Most Attractive Quadrant" อย่างโดดเด่น</span>
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-[3rem] p-4 md:p-8 relative overflow-hidden shadow-2xl">
            <div className="w-full overflow-hidden rounded-2xl">
              <img 
                src="/intelligence-vs-price.png" 
                alt="Intelligence vs. Price Graph" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="mt-8 p-6 bg-blue-500/5 rounded-3xl border border-blue-500/20">
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-blue-400 font-bold block mb-2 uppercase tracking-tighter">Insights: ความคุ้มค่าที่ไม่เคยมีมาก่อน</span>
                กราฟแสดงให้เห็นว่า <span className="text-white font-bold">Gemini 3.1 Pro</span> และ <span className="text-white font-bold">Flash</span> อยู่ในโซนสีเขียว (Most Attractive Quadrant) ซึ่งหมายถึงการได้ Intelligence ระดับสูงในราคาที่ต่ำกว่าคู่แข่งอย่าง Claude Opus เกือบ 2 เท่า
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Killer Feature Section */}
      <section id="benefits" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-12 lg:col-span-8 bg-gradient-to-br from-gray-900 to-[#0f0f0f] border border-gray-800 rounded-[3rem] p-12 relative overflow-hidden group">
              <div className="relative z-10 max-w-lg">
                <h3 className="text-4xl font-bold mb-6">อ่าน PDF 2,000 หน้าในพริบตา</h3>
                <p className="text-gray-400 text-xl mb-8 leading-relaxed">
                  "หมัดเด็ด: ด้วย Context Window 2.5 ล้าน Tokens คุณสามารถใส่หนังสือยกชุด หรือ Codebase ทั้งโปรเจกต์ เพื่อให้ Gemini ช่วยวิเคราะห์ได้ทันที"
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
      <section id="offer" className="py-32 px-4 bg-gradient-to-t from-blue-900/10 to-[#050505]">
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
                  "พื้นที่เก็บข้อมูล 2 TB ในบัญชีเดิม",
                  "Deep Search & Veo 2 (Video Gen)",
                  "Gemini Code Assist & Jules",
                  "NotebookLM Pro (Unlimited Source)",
                  "YouTube Premium & Music",
                  "Gemini API Keys & AI Studio Credits",
                  "สิทธิสมาชิกระดับพรีเมียม Google One"
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

      {/* Footer */}
      <footer className="py-24 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg" />
              <span className="font-bold text-lg tracking-tight">Google One AI</span>
            </div>
            <div className="flex gap-8 opacity-40 grayscale">
              <span className="text-[10px] uppercase font-bold tracking-widest">DeepMind</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Google Cloud</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Android Integration</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
             <div className="flex justify-center md:justify-end gap-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
                <a href="#" className="hover:text-blue-400 transition-colors">Safety</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
              </div>
              <p className="mt-4 text-gray-600 text-[10px] uppercase tracking-widest">© 2026 Google Gemini Division. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
