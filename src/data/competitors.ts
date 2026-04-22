/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SOURCES } from "./sources";

export type Competitor = {
  id: "gemini" | "claude" | "chatgpt" | "copilot";
  name: string;
  isHero: boolean;
  monthlyCostTHB: number | string;
  monthlyCostNote: string;
  apiInputUSD: number | string;
  apiOutputUSD: number | string;
  intelligenceIndex: number;
  contextWindow: string;
  reasoningQuality: "A+" | "A" | "B+" | "B";
  speed: string;
  workspaceApps: number;
  bundledExtras: string[];
};

export const COMPETITORS: Competitor[] = [
  {
    id: "gemini",
    name: "Gemini 3.1 Pro",
    isHero: true,
    monthlyCostTHB: 750,
    monthlyCostNote: "Google AI Pro (TH)",
    apiInputUSD: SOURCES.geminiApiInput.value as number,
    apiOutputUSD: SOURCES.geminiApiOutput.value as number,
    intelligenceIndex: 57,
    contextWindow: "2,000,000+",
    reasoningQuality: "A+",
    speed: "เร็วที่สุด",
    workspaceApps: 6, // Gmail, Docs, Drive, Sheets, Slides, Calendar
    bundledExtras: ["5 TB Storage", "YouTube Premium", "Gemini Code Assist", "AI Studio Credits"],
  },
  {
    id: "claude",
    name: "Claude 4.7 Opus",
    isHero: false,
    monthlyCostTHB: 720,
    monthlyCostNote: "$20 USD ≈ 720 บาท",
    apiInputUSD: SOURCES.claudeApiInput.value as number,
    apiOutputUSD: SOURCES.claudeApiOutput.value as number,
    intelligenceIndex: 57,
    contextWindow: "1,000,000",
    reasoningQuality: "A",
    speed: "เร็ว",
    workspaceApps: 0,
    bundledExtras: [],
  },
  {
    id: "chatgpt",
    name: "GPT-5.4 (xhigh)",
    isHero: false,
    monthlyCostTHB: 720,
    monthlyCostNote: "$20 USD ≈ 720 บาท (Plus tier)",
    apiInputUSD: SOURCES.gptApiInput.value as number,
    apiOutputUSD: SOURCES.gptApiOutput.value as number,
    intelligenceIndex: 57,
    contextWindow: "500,000",
    reasoningQuality: "A",
    speed: "เร็ว",
    workspaceApps: 0,
    bundledExtras: [],
  },
  {
    id: "copilot",
    name: "Copilot Pro",
    isHero: false,
    monthlyCostTHB: 720,
    monthlyCostNote: "$20 USD ≈ 720 บาท",
    apiInputUSD: "N/A",
    apiOutputUSD: "N/A",
    intelligenceIndex: 51,
    contextWindow: "500,000",
    reasoningQuality: "B+",
    speed: "เร็ว",
    workspaceApps: 0,
    bundledExtras: ["MS 365 only (separate)"],
  },
];

export const HERO = COMPETITORS.find((c) => c.isHero)!;
