/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronDown, Shield } from "lucide-react";

type Rebuttal = {
  attack: string;
  response: string;
  evidenceUrl?: string;
};

const REBUTTALS: Rebuttal[] = [
  {
    attack: "Gemini เคย hallucinate historical figures (Image gen ดราม่าปี 2024)",
    response:
      "เป็นปัญหาของ Imagen 1.0 (image gen รุ่นเก่า ปี 2024) ไม่ใช่ Gemini text reasoning ปัจจุบัน — Gemini 3.1 Pro ผ่าน safety eval ของ DeepMind และอยู่อันดับ #1 ใน Intelligence Index ปัจจุบัน",
    evidenceUrl: "https://artificialanalysis.ai/models/gemini-3-1-pro-preview",
  },
  {
    attack: "Google ปิด product บ่อย — เชื่อมั่นได้ไหม?",
    response:
      "Bard ไม่ได้ shut down — แต่ rebrand เป็น Gemini เพื่อรวมเป็นแบรนด์เดียว Gemini ถูก integrate ในทุก Google product (Workspace, Android, Search, Pixel) จึงเป็น strategic priority อันดับสูงสุด ไม่ใช่ side project",
  },
  {
    attack: "Privacy: Google จะเก็บข้อมูลไป train model หรือเปล่า?",
    response:
      "Workspace data (Gmail, Docs, Drive) ไม่ถูกใช้ train model — ระบุชัดใน Google Workspace Terms ของ Google AI Pro Plus tier มี enterprise-grade privacy ที่แยก data ออกจากการ train อย่างสมบูรณ์",
    evidenceUrl: "https://workspace.google.com/terms/premier_terms/",
  },
  {
    attack: "ทำไมไม่ใช้ ChatGPT ที่คนรู้จักมากกว่า?",
    response:
      "ราคา API Gemini ($2/1M tokens) ถูกกว่า GPT-5.4 ($2.50) และถูกกว่า Claude ($5) มาก ขณะที่ Intelligence Index เท่ากันที่ 57 ทุกตัว — Brand awareness ไม่ได้แปลว่า cost-effective",
    evidenceUrl: "https://artificialanalysis.ai/models?intelligence=artificial-analysis-intelligence-index",
  },
  {
    attack: "Claude มี reasoning ที่ดีกว่าไหม? (โดยเฉพาะ coding)",
    response:
      "Claude Opus 4.6 ชนะที่ SWE-bench (80.8%) แต่ Gemini 3.1 Pro ชนะที่ GPQA Diamond (94.3%) และมี context window ใหญ่กว่า 2 เท่า + ราคาถูกกว่า 2.5 เท่า — สำหรับ general-purpose work, Gemini ROI สูงกว่าชัดเจน",
  },
  {
    attack: "Copilot ผสานกับ Microsoft 365 ดีกว่าไหม?",
    response:
      "Copilot ผสานกับ MS 365 ก็จริง แต่ user ยังต้องจ่าย MS 365 subscription แยก ขณะที่ Gemini ผสานกับ Workspace มาตั้งแต่ design — ไม่มีค่าใช้จ่ายเพิ่ม และไม่ต้อง switch suite",
  },
];

export const CounterRebuttal = () => (
  <section className="py-20 px-4 bg-[#050505]">
    <div className="max-w-5xl mx-auto">
      <details className="group bg-[#0f0f0f] border border-gray-800 rounded-3xl overflow-hidden">
        <summary className="cursor-pointer p-8 flex items-center justify-between hover:bg-white/5 transition-colors list-none">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20">
              <Shield className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-red-400 font-bold mb-1">
                Debate Prep · Rebuttal Bank
              </div>
              <h3 className="text-xl font-bold">เตรียมตอบคำถามคู่แข่ง ({REBUTTALS.length} ข้อ)</h3>
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
        </summary>
        <div className="p-8 pt-0 space-y-6 border-t border-gray-800">
          {REBUTTALS.map((r, idx) => (
            <div key={idx} className="border-l-2 border-red-500/30 pl-5">
              <div className="text-xs uppercase tracking-widest text-red-400/80 font-bold mb-2">
                คู่แข่งอาจถาม
              </div>
              <p className="text-base text-white font-semibold mb-3 italic">"{r.attack}"</p>
              <div className="text-xs uppercase tracking-widest text-blue-400/80 font-bold mb-2">
                คำตอบเรา
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{r.response}</p>
              {r.evidenceUrl && (
                <a
                  href={r.evidenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-blue-400 hover:text-blue-300 underline"
                >
                  → หลักฐาน
                </a>
              )}
            </div>
          ))}
        </div>
      </details>
    </div>
  </section>
);
