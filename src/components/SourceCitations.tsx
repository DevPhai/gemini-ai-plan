/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink } from "lucide-react";
import { SOURCES, VERIFIED_AT, type Source } from "../data/sources";

type Citation = {
  num: number;
  topic: string;
  sourceKeys: (keyof typeof SOURCES)[];
};

const CITATIONS: Citation[] = [
  {
    num: 1,
    topic: "Subscription Pricing",
    sourceKeys: [
      "geminiAiProSubscriptionTH",
      "claudeProSubscription",
      "chatgptPlusSubscription",
      "copilotProSubscription",
    ],
  },
  {
    num: 2,
    topic: "API Token Pricing",
    sourceKeys: [
      "geminiApiInput",
      "geminiApiOutput",
      "claudeApiInput",
      "claudeApiOutput",
      "gptApiInput",
      "gptApiOutput",
    ],
  },
  {
    num: 3,
    topic: "Intelligence & Reasoning Benchmarks",
    sourceKeys: ["intelligenceIndex"],
  },
  {
    num: 4,
    topic: "Context Window Specs",
    sourceKeys: [
      "geminiContextWindow",
      "claudeContextWindow",
      "gptContextWindow",
      "copilotContextWindow",
    ],
  },
  {
    num: 5,
    topic: "Native Workspace Apps",
    sourceKeys: ["geminiAiProSubscriptionTH"],
  },
  {
    num: 6,
    topic: "Bundled Value (Storage + YouTube Premium)",
    sourceKeys: [
      "geminiAiProStorageIncluded",
      "youtubePremiumTH",
      "googleOneStorageBasicTH",
    ],
  },
  {
    num: 7,
    topic: "YouTube Premium Thailand",
    sourceKeys: ["youtubePremiumTH"],
  },
  {
    num: 8,
    topic: "Google One Storage Plans (TH)",
    sourceKeys: ["googleOneStorageBasicTH", "geminiAiProStorageIncluded"],
  },
];

const uniqueByUrl = (keys: (keyof typeof SOURCES)[]): Source[] => {
  const seen = new Set<string>();
  const result: Source[] = [];
  for (const k of keys) {
    const s: Source = SOURCES[k];
    if (seen.has(s.url)) continue;
    seen.add(s.url);
    result.push(s);
  }
  return result;
};

export const SourceCitations = () => (
  <section id="sources" className="py-24 px-4 bg-[#080808] border-t border-gray-900 scroll-mt-20">
    <div className="max-w-5xl mx-auto">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-gray-500/10 text-gray-400 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-gray-700 uppercase tracking-widest">
          Sources & Citations
        </div>
        <h2 className="text-3xl font-bold mb-2">ทุกตัวเลขในเว็บนี้ตรวจสอบได้</h2>
        <p className="text-sm text-gray-500">
          ข้อมูล verified ณ วันที่ <span className="text-gray-300 font-mono">{VERIFIED_AT}</span> ·
          คลิกลิงก์เพื่อดูแหล่งข้อมูลต้นทาง
        </p>
      </div>

      <ol className="space-y-6">
        {CITATIONS.map((cit) => (
          <li
            key={cit.num}
            id={`source-${cit.num}`}
            className="border-l-2 border-gray-800 pl-6 py-2 scroll-mt-20 hover:border-blue-500/50 transition-colors"
          >
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-blue-400 font-bold font-mono text-sm">[{cit.num}]</span>
              <h3 className="text-base font-bold text-white">{cit.topic}</h3>
            </div>
            <ul className="space-y-2">
              {uniqueByUrl(cit.sourceKeys).map((s) => (
                <li key={s.url} className="text-xs text-gray-400 flex items-start gap-2">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 break-all"
                  >
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    <span className="font-mono">{s.publisher}</span>
                  </a>
                  {s.note && <span className="text-gray-500">— {s.note}</span>}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
