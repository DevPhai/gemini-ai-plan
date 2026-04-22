/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import {
  bundledExtrasYearlyTHB,
  savingsVsCompetitorPct,
  tcoYearlyTHB,
  yearlyCostTHB,
} from "../data/sources";

type Row = {
  component: string;
  citation: number;
  values: { gemini: string; claude: string; chatgpt: string; copilot: string };
};

const fmt = (n: number) => n.toLocaleString("th-TH") + " บาท";
const incl = "ฟรี (รวมในแพ็คเกจ)";

const ROWS: Row[] = [
  {
    component: "ค่าสมัครรายปี",
    citation: 1,
    values: {
      gemini: fmt(yearlyCostTHB.gemini),
      claude: fmt(yearlyCostTHB.claude),
      chatgpt: fmt(yearlyCostTHB.chatgpt),
      copilot: fmt(yearlyCostTHB.copilot),
    },
  },
  {
    component: "YouTube Premium (รายปี)",
    citation: 7,
    values: {
      gemini: incl,
      claude: `+ ${fmt(bundledExtrasYearlyTHB.youtubePremium)}`,
      chatgpt: `+ ${fmt(bundledExtrasYearlyTHB.youtubePremium)}`,
      copilot: `+ ${fmt(bundledExtrasYearlyTHB.youtubePremium)}`,
    },
  },
  {
    component: "Google One Storage 100GB+",
    citation: 8,
    values: {
      gemini: incl + " (5 TB)",
      claude: `+ ${fmt(bundledExtrasYearlyTHB.storageBasic100GB)}`,
      chatgpt: `+ ${fmt(bundledExtrasYearlyTHB.storageBasic100GB)}`,
      copilot: `+ ${fmt(bundledExtrasYearlyTHB.storageBasic100GB)}`,
    },
  },
];

const chartData = [
  { name: "Gemini AI Pro", cost: tcoYearlyTHB.gemini, isHero: true },
  { name: "Claude Pro", cost: tcoYearlyTHB.claude, isHero: false },
  { name: "ChatGPT Plus", cost: tcoYearlyTHB.chatgpt, isHero: false },
  { name: "Copilot Pro", cost: tcoYearlyTHB.copilot, isHero: false },
];

export const TCOSection = () => (
  <section id="tco" className="py-32 px-4 bg-[#080808] scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4"><span className="text-blue-400">Total</span> Cost of Ownership — 1 ปี</h2>
        <p className="text-gray-500 text-lg max-w-3xl">
          เปรียบเทียบค่าใช้จ่ายจริงเมื่อรวม AI subscription + YouTube Premium + Cloud Storage
          <span className="block mt-2 text-blue-400 font-semibold">
            Gemini ได้ทุกอย่างในแพ็คเกจเดียว — คู่แข่งต้องจ่ายแยก
          </span>
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-gray-800 bg-[#0f0f0f] shadow-2xl mb-12">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/5">
              <th className="p-6 font-semibold text-gray-300 text-sm">Component</th>
              <th className="p-6 font-bold text-blue-400 text-sm">Gemini AI Pro</th>
              <th className="p-6 font-bold text-gray-500 text-sm">Claude Pro</th>
              <th className="p-6 font-bold text-gray-500 text-sm">ChatGPT Plus</th>
              <th className="p-6 font-bold text-gray-500 text-sm">Copilot Pro</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {ROWS.map((row) => (
              <tr key={row.component}>
                <td className="p-6 text-sm font-medium text-gray-400">
                  {row.component}
                  <a
                    href={`#source-${row.citation}`}
                    className="ml-1 text-[10px] text-blue-400/70 hover:text-blue-400 align-super"
                  >
                    [{row.citation}]
                  </a>
                </td>
                <td className="p-6 text-sm text-blue-400 font-bold">{row.values.gemini}</td>
                <td className="p-6 text-sm text-gray-300">{row.values.claude}</td>
                <td className="p-6 text-sm text-gray-300">{row.values.chatgpt}</td>
                <td className="p-6 text-sm text-gray-300">{row.values.copilot}</td>
              </tr>
            ))}
            <tr className="bg-yellow-500/5">
              <td className="p-6 text-sm font-bold text-yellow-400">Total / Year</td>
              <td className="p-6 text-base font-black text-yellow-400">{fmt(tcoYearlyTHB.gemini)}</td>
              <td className="p-6 text-base font-bold text-gray-300">{fmt(tcoYearlyTHB.claude)}</td>
              <td className="p-6 text-base font-bold text-gray-300">{fmt(tcoYearlyTHB.chatgpt)}</td>
              <td className="p-6 text-base font-bold text-gray-300">{fmt(tcoYearlyTHB.copilot)}</td>
            </tr>
            <tr>
              <td className="p-6 text-sm font-bold text-green-400">Savings (Gemini ถูกกว่า)</td>
              <td className="p-6 text-sm text-gray-500">—</td>
              <td className="p-6 text-sm text-green-400 font-bold">{savingsVsCompetitorPct.claude}%</td>
              <td className="p-6 text-sm text-green-400 font-bold">{savingsVsCompetitorPct.chatgpt}%</td>
              <td className="p-6 text-sm text-green-400 font-bold">{savingsVsCompetitorPct.copilot}%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#0f0f0f] border border-gray-800 rounded-[3rem] p-8 md:p-12 shadow-2xl">
        <h3 className="text-2xl font-bold mb-2">ภาพรวม <span className="text-blue-400">Total</span> Cost (1 ปี)</h3>
        <p className="text-sm text-gray-500 mb-8">หน่วย: บาท · รวม subscription + YouTube Premium + Storage</p>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="name" stroke="#6b7280" tick={{ fill: "#9ca3af", fontSize: 12 }} />
              <YAxis
                stroke="#6b7280"
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f0f0f",
                  border: "1px solid #1f2937",
                  borderRadius: "12px",
                  color: "#fff",
                }}
                itemStyle={{ color: "#facc15" }}
                formatter={(value: number) => [fmt(value), "Total / Year"]}
              />
              <Legend wrapperStyle={{ color: "#9ca3af" }} />
              <Bar dataKey="cost" name="Total Cost / Year (THB)" radius={[8, 8, 0, 0]}>
                {chartData.map((entry, idx) => (
                  <Cell key={idx} fill={entry.isHero ? "#4ade80" : "#374151"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </section>
);
