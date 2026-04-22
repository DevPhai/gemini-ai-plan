/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Brain, Layers, Gift } from "lucide-react";
import {
  bundledExtrasYearlyTHB,
  savingsVsCompetitorPct,
  yearlyCostTHB,
} from "../data/sources";

const fmt = (n: number) => n.toLocaleString("th-TH") + " บาท";

const CARDS = [
  {
    icon: Brain,
    title: "Superior Intelligence at Fractional Cost",
    citation: 3,
    bullets: [
      "อันดับ #1 ใน Frontier Model Leaderboard (Intelligence Index 57)",
      "API ถูกที่สุดในกลุ่ม: $2 / 1M tokens (Claude $5, GPT $2.50)",
      "Context Window 2M+ tokens — มากกว่าคู่แข่ง 2-4 เท่า",
    ],
  },
  {
    icon: Layers,
    title: "Native Ecosystem Advantage",
    citation: 5,
    bullets: [
      "ผสานเข้ากับ Workspace ที่ทีมใช้อยู่แล้ว: Gmail, Docs, Drive, Sheets, Slides, Calendar",
      "ไม่ต้อง copy-paste ข้ามแอปอีกต่อไป",
      "AI พร้อมใช้ในที่ที่งานเกิดขึ้น — ไม่ใช่ tab ที่ 47",
    ],
  },
  {
    icon: Gift,
    title: "Unmatched Bundle Value",
    citation: 6,
    bullets: [
      "5 TB Cloud Storage (คู่แข่งให้ 100GB)",
      `YouTube Premium รวมในแพ็คเกจ (มูลค่า ${fmt(bundledExtrasYearlyTHB.youtubePremium)}/ปี)`,
      "Gemini Code Assist + Jules + AI Studio Credits",
      `รวมเพียง ${fmt(yearlyCostTHB.gemini)}/ปี — ถูกกว่าคู่แข่ง ${savingsVsCompetitorPct.claude}%`,
    ],
  },
];

export const ClosingArgument = () => (
  <section
    id="closing"
    className="py-32 px-4 bg-gradient-to-b from-[#050505] via-[#0a0a1f] to-[#050505] scroll-mt-20"
  >
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold mb-8 border border-blue-500/20 uppercase tracking-widest">
          Closing Argument
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Gemini ไม่ใช่แค่ AI ที่ฉลาดที่สุด
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
            แต่เป็นคำตอบเดียวที่ให้ทั้ง Intelligence, Integration และ ROI
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0f0f0f] border border-gray-800 rounded-[2.5rem] p-10 flex flex-col hover:border-blue-500/30 transition-colors"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <Icon className="text-blue-400 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 leading-tight">
                {card.title}
                <a
                  href={`#source-${card.citation}`}
                  className="ml-1 text-[10px] text-blue-400/70 hover:text-blue-400 align-super"
                >
                  [{card.citation}]
                </a>
              </h3>
              <ul className="mt-4 space-y-3 flex-1">
                {card.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-gray-400 leading-relaxed flex gap-2">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center border-t border-b border-gray-800 py-16"
      >
        <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic mb-6">
          "ถ้าคุณต้องเลือก AI หนึ่งตัวที่ให้คุณค่าสูงสุดในการทำงานจริง
          <br />
          คำตอบคือ <span className="text-blue-400">Gemini</span> —
          เพราะเราไม่ได้แค่แข่งด้วย Intelligence
          <br />
          เราชนะด้วยการเป็นส่วนหนึ่งของ workflow ที่คุณมีอยู่แล้ว"
        </p>
        <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
          — Google AI Plan Pro Team
        </div>
      </motion.blockquote>
    </div>
  </section>
);
