/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
              คือเพื่อนคู่คิดในทุกงาน
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            ปลดล็อกพลัง AI ที่ฉลาดที่สุดจาก Google ผสานเข้ากับ Gmail, Docs และ Drive พร้อมพื้นที่เก็บข้อมูล 5TB ในแพ็คเกจเดียว
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
              <span className="text-3xl font-bold">5TB</span>
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
  );
};
