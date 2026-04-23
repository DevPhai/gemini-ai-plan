/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * All pricing & benchmark data must trace back to entries here.
 * Do NOT introduce magic numbers in components — extend SOURCES instead.
 */

export type Source = {
  /** Numeric or string value to display */
  value: number | string;
  /** Unit shown next to value (e.g., "THB/month", "USD/1M tokens") */
  unit: string;
  /** Public URL the judge can click to verify */
  url: string;
  /** Human-readable name of the source */
  publisher: string;
  /** ISO date when this datapoint was last verified */
  verifiedAt: string;
  /** Optional note (e.g. region, plan tier qualifier) */
  note?: string;
};

export const VERIFIED_AT = "2026-04-22";

const USD_TO_THB = 36;

export const SOURCES = {
  // ===== Subscription pricing =====
  geminiAiProSubscriptionTH: {
    value: 750,
    unit: "THB/month",
    url: "https://one.google.com/about/google-ai-plans/",
    publisher: "Google One Thailand",
    verifiedAt: VERIFIED_AT,
    note: "Includes 5TB storage, $10 Cloud Credits, Jules AI Agent, Google Home Premium",
  },
  claudeProSubscription: {
    value: 20,
    unit: "USD/month",
    url: "https://claude.com/pricing",
    publisher: "Anthropic",
    verifiedAt: VERIFIED_AT,
    note: "Approx. 720 THB/month at 36 THB/USD",
  },
  chatgptPlusSubscription: {
    value: 20,
    unit: "USD/month",
    url: "https://openai.com/chatgpt/pricing/",
    publisher: "OpenAI",
    verifiedAt: VERIFIED_AT,
    note: "Approx. 720 THB/month at 36 THB/USD",
  },
  copilotProSubscription: {
    value: 20,
    unit: "USD/month",
    url: "https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/individuals",
    publisher: "Microsoft",
    verifiedAt: VERIFIED_AT,
    note: "Approx. 720 THB/month at 36 THB/USD",
  },

  // ===== API token pricing (per 1M input / output tokens, USD) =====
  geminiApiInput: {
    value: 2.0,
    unit: "USD/1M input tokens",
    url: "https://ai.google.dev/gemini-api/docs/pricing",
    publisher: "Google AI for Developers",
    verifiedAt: VERIFIED_AT,
    note: "Gemini 3 Pro standard context (≤200K)",
  },
  geminiApiOutput: {
    value: 12.0,
    unit: "USD/1M output tokens",
    url: "https://ai.google.dev/gemini-api/docs/pricing",
    publisher: "Google AI for Developers",
    verifiedAt: VERIFIED_AT,
  },
  claudeApiInput: {
    value: 5.0,
    unit: "USD/1M input tokens",
    url: "https://platform.claude.com/docs/en/about-claude/pricing",
    publisher: "Anthropic",
    verifiedAt: VERIFIED_AT,
    note: "Claude Opus 4.7",
  },
  claudeApiOutput: {
    value: 25.0,
    unit: "USD/1M output tokens",
    url: "https://platform.claude.com/docs/en/about-claude/pricing",
    publisher: "Anthropic",
    verifiedAt: VERIFIED_AT,
  },
  gptApiInput: {
    value: 2.5,
    unit: "USD/1M input tokens",
    url: "https://openai.com/api/pricing/",
    publisher: "OpenAI",
    verifiedAt: VERIFIED_AT,
    note: "GPT-5.4 standard context",
  },
  gptApiOutput: {
    value: 15.0,
    unit: "USD/1M output tokens",
    url: "https://openai.com/api/pricing/",
    publisher: "OpenAI",
    verifiedAt: VERIFIED_AT,
  },
  copilotApiInput: {
    value: "N/A",
    unit: "no public per-token API",
    url: "https://www.microsoft.com/en-us/microsoft-365-copilot/pricing",
    publisher: "Microsoft",
    verifiedAt: VERIFIED_AT,
    note: "Copilot does not expose direct per-token consumer API",
  },

  // ===== Bundled value items =====
  googleCloudCredits: {
    value: 10,
    unit: "USD/month",
    url: "https://one.google.com/about/google-ai-plans/",
    publisher: "Google One Thailand",
    verifiedAt: VERIFIED_AT,
    note: "$10 monthly credit for Google Cloud / AI Studio",
  },
  googleHomePremium: {
    value: 10,
    unit: "USD/month",
    url: "https://one.google.com/about/google-ai-plans/",
    publisher: "Google One Thailand",
    verifiedAt: VERIFIED_AT,
    note: "Includes Google Home Premium Standard plan",
  },
  googleOneStorageBasicTH: {
    value: 70,
    unit: "THB/month",
    url: "https://one.google.com/about/plans?hl=en-TH",
    publisher: "Google One Thailand",
    verifiedAt: VERIFIED_AT,
    note: "Basic 100GB — Google no longer offers standalone 2TB in TH; 5TB only via AI Pro",
  },
  geminiAiProStorageIncluded: {
    value: "5 TB",
    unit: "included",
    url: "https://one.google.com/about/plans?hl=en-TH",
    publisher: "Google One Thailand",
    verifiedAt: VERIFIED_AT,
  },

  // ===== Benchmarks =====
  intelligenceIndex: {
    value: "57 (3-way tie)",
    unit: "Artificial Analysis Intelligence Index v4.0",
    url: "https://artificialanalysis.ai/models?intelligence=artificial-analysis-intelligence-index",
    publisher: "Artificial Analysis",
    verifiedAt: VERIFIED_AT,
    note: "Gemini 3.1 Pro, Claude Opus 4.7, GPT-5.4 (xhigh) all tied at 57 as of April 2026",
  },
  geminiContextWindow: {
    value: "1,000,000",
    unit: "tokens",
    url: "https://one.google.com/about/google-ai-plans/",
    publisher: "Google One Thailand",
    verifiedAt: VERIFIED_AT,
  },
  claudeContextWindow: {
    value: "1,000,000",
    unit: "tokens",
    url: "https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7",
    publisher: "Anthropic",
    verifiedAt: VERIFIED_AT,
  },
  gptContextWindow: {
    value: "500,000",
    unit: "tokens",
    url: "https://platform.openai.com/docs/models/gpt-5.2",
    publisher: "OpenAI",
    verifiedAt: VERIFIED_AT,
  },
  copilotContextWindow: {
    value: "500,000",
    unit: "tokens",
    url: "https://learn.microsoft.com/en-us/copilot/",
    publisher: "Microsoft",
    verifiedAt: VERIFIED_AT,
  },
} as const satisfies Record<string, Source>;

export type SourceKey = keyof typeof SOURCES;

/** Helper to convert USD-priced values to THB at the documented rate */
export const toTHB = (usd: number) => Math.round(usd * USD_TO_THB);

/** Yearly subscription cost in THB for any of the 4 competitors */
export const yearlyCostTHB = {
  gemini: 750 * 12,
  claude: toTHB(20) * 12,
  chatgpt: toTHB(20) * 12,
  copilot: toTHB(20) * 12,
};

/** Bundled extras included in Gemini AI Pro that competitors charge separately */
export const bundledExtrasYearlyTHB = {
  cloudCredits: 10 * 36 * 12, // $10/mo converted to THB
  googleHomePremium: 10 * 36 * 12, // $10/mo value converted to THB
  storageBasic100GB: 70 * 12,
};

/**
 * Total 1-year cost if you also wanted the same features:
 * Gemini = subscription only (everything bundled).
 * Others = subscription + Cloud Credits + Home Premium + storage.
 */
export const tcoYearlyTHB = {
  gemini: yearlyCostTHB.gemini,
  claude:
    yearlyCostTHB.claude +
    bundledExtrasYearlyTHB.cloudCredits +
    bundledExtrasYearlyTHB.googleHomePremium +
    bundledExtrasYearlyTHB.storageBasic100GB,
  chatgpt:
    yearlyCostTHB.chatgpt +
    bundledExtrasYearlyTHB.cloudCredits +
    bundledExtrasYearlyTHB.googleHomePremium +
    bundledExtrasYearlyTHB.storageBasic100GB,
  copilot:
    yearlyCostTHB.copilot +
    bundledExtrasYearlyTHB.cloudCredits +
    bundledExtrasYearlyTHB.googleHomePremium +
    bundledExtrasYearlyTHB.storageBasic100GB,
};

/** % cheaper Gemini is vs each competitor (rounded). Auto-computed — never hardcode. */
export const savingsVsCompetitorPct = {
  claude: Math.round((1 - tcoYearlyTHB.gemini / tcoYearlyTHB.claude) * 100),
  chatgpt: Math.round((1 - tcoYearlyTHB.gemini / tcoYearlyTHB.chatgpt) * 100),
  copilot: Math.round((1 - tcoYearlyTHB.gemini / tcoYearlyTHB.copilot) * 100),
};
