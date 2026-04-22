/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import { Check, X } from "lucide-react";
import { COMPETITORS } from "../data/competitors";

type Row = {
  label: string;
  citation: number;
  render: (c: typeof COMPETITORS[number]) => ReactNode;
};

const heroClass = (isHero: boolean, extra = "") =>
  isHero ? `text-blue-400 font-bold ${extra}` : `text-gray-300 ${extra}`;

const ROWS: Row[] = [
  {
    label: "Monthly Cost (THB)",
    citation: 1,
    render: (c) => (
      <span className={heroClass(c.isHero, "text-sm")}>
        {typeof c.monthlyCostTHB === "number" ? `${c.monthlyCostTHB} บาท` : c.monthlyCostTHB}
        <span className="block text-[10px] font-normal text-gray-500 mt-1">{c.monthlyCostNote}</span>
      </span>
    ),
  },
  {
    label: "API Cost / 1M Input Tokens",
    citation: 2,
    render: (c) => (
      <span className={heroClass(c.isHero, "text-sm")}>
        {typeof c.apiInputUSD === "number" ? `$${c.apiInputUSD.toFixed(2)}` : c.apiInputUSD}
      </span>
    ),
  },
  {
    label: "API Cost / 1M Output Tokens",
    citation: 2,
    render: (c) => (
      <span className={heroClass(c.isHero, "text-sm")}>
        {typeof c.apiOutputUSD === "number" ? `$${c.apiOutputUSD.toFixed(2)}` : c.apiOutputUSD}
      </span>
    ),
  },
  {
    label: "Intelligence Index (0-100)",
    citation: 3,
    render: (c) => (
      <span className={heroClass(c.isHero, "text-sm")}>{c.intelligenceIndex}</span>
    ),
  },
  {
    label: "Context Window",
    citation: 4,
    render: (c) => (
      <span className={heroClass(c.isHero, "text-sm")}>{c.contextWindow}</span>
    ),
  },
  {
    label: "Reasoning Quality",
    citation: 3,
    render: (c) => (
      <span className={c.reasoningQuality === "A+" ? "text-green-400 font-bold text-sm" : "text-gray-300 text-sm"}>
        {c.reasoningQuality}
      </span>
    ),
  },
  {
    label: "Speed (Latency)",
    citation: 3,
    render: (c) => <span className="text-gray-300 text-sm">{c.speed}</span>,
  },
  {
    label: "Native Workspace Apps",
    citation: 5,
    render: (c) => (
      <span className={heroClass(c.isHero, "text-sm")}>
        {c.workspaceApps > 0 ? (
          <>
            <span className="font-bold">{c.workspaceApps}</span>
            <span className="block text-[10px] font-normal text-gray-500 mt-1">
              Gmail · Docs · Drive · Sheets · Slides · Calendar
            </span>
          </>
        ) : (
          <span className="text-gray-500">—</span>
        )}
      </span>
    ),
  },
  {
    label: "Bundled Value",
    citation: 6,
    render: (c) =>
      c.bundledExtras.length > 0 && c.isHero ? (
        <span className="flex flex-col gap-1">
          <Check className="text-green-400 w-5 h-5" />
          <span className="text-[10px] text-gray-400">
            {c.bundledExtras.slice(0, 2).join(" + ")}
          </span>
        </span>
      ) : (
        <X className="text-gray-700 w-5 h-5" />
      ),
  },
];

export const ComparisonTable = () => (
  <div id="data" className="scroll-mt-20">
    <div className="overflow-x-auto rounded-3xl border border-gray-800 bg-[#0f0f0f] shadow-2xl">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-white/5">
            <th className="p-6 font-semibold text-gray-300 text-sm">Frontier Metric</th>
            {COMPETITORS.map((c) => (
              <th
                key={c.id}
                className={`p-6 font-bold text-sm ${c.isHero ? "text-blue-400" : "text-gray-500"}`}
              >
                {c.name}
                {c.isHero && (
                  <span className="block text-[10px] font-normal text-blue-400/70 mt-1 uppercase tracking-widest">
                    Our Recommendation
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {ROWS.map((row) => (
            <tr key={row.label}>
              <td className="p-6 text-sm font-medium text-gray-400">
                {row.label}
                <a
                  href={`#source-${row.citation}`}
                  className="ml-1 text-[10px] text-blue-400/70 hover:text-blue-400 align-super"
                >
                  [{row.citation}]
                </a>
              </td>
              {COMPETITORS.map((c) => (
                <td key={c.id} className="p-6">
                  {row.render(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
