/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Background ambient light effects to make it feel "full" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.9] text-white">
            มากกว่า AI<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
              คือเพื่อนคู่คิดในทุกงาน
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed mx-auto font-medium">
            ปลดล็อกพลัง AI ที่ฉลาดที่สุดจาก Google ผสานเข้ากับ Gmail, Docs และ Drive พร้อมพื้นที่เก็บข้อมูล 5TB ในแพ็คเกจเดียว
          </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="https://aistudio.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative bg-white text-black px-12 py-6 rounded-2xl text-xl font-black transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_50px_rgba(255,255,255,0.1)] flex items-center gap-4 overflow-hidden"
              >
                เริ่มต้นใช้งาน Google AI Pro
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600">
                  <ArrowRight className={`w-5 h-5 text-white transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </div>
              </a>
            </div>
            <div className="text-sm text-gray-500 font-bold tracking-widest uppercase opacity-60">
              *฿750 THB/เดือน หรือเลือกสมัครรายปีเพื่อความคุ้มค่ากว่า
            </div>
        </motion.div>

        {/* Stats Section spanning full width for a "complete" look */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20"
        >
          <div className="flex flex-col items-center text-center group">
            <span className="text-6xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">5TB</span>
            <span className="text-xs text-gray-500 uppercase font-black tracking-[0.3em]">Storage Included</span>
          </div>
          <div className="flex flex-col items-center text-center group">
            <span className="text-6xl font-black text-white mb-3 group-hover:text-purple-400 transition-colors">Ultra</span>
            <span className="text-xs text-gray-500 uppercase font-black tracking-[0.3em]">Reasoning Model</span>
          </div>
          <div className="flex flex-col items-center text-center group">
            <span className="text-6xl font-black text-green-500 mb-3 group-hover:text-green-400 transition-colors">Secure</span>
            <span className="text-xs text-gray-500 uppercase font-black tracking-[0.3em]">Cloud Security</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
