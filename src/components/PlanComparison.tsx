/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, X, ChevronDown, ChevronUp, Database, Sparkles, PlusCircle } from "lucide-react";
import { useState, type ReactNode } from "react";

type PlanFeature = {
  name: string;
  plus: string | boolean;
  pro: string | boolean;
  ultra: string | boolean;
  subtext?: string;
};

type Category = {
  id: string;
  name: string;
  icon: ReactNode;
  features: PlanFeature[];
};

const CATEGORIES: Category[] = [
  {
    id: "storage",
    name: "Storage",
    icon: <Database className="w-5 h-5 text-blue-500" />,
    features: [
      {
        name: "Storage for Gmail, Google Drive, Google Photos",
        plus: "200 GB",
        pro: "5 TB",
        ultra: "30 TB",
      },
      { name: "Family sharing with up to 5 people", plus: true, pro: true, ultra: true },
      { name: "Device backup", plus: true, pro: true, ultra: true },
      { name: "Storage manager", plus: true, pro: true, ultra: true },
    ],
  },
  {
    id: "google-ai",
    name: "Google AI",
    icon: <Sparkles className="w-5 h-5 text-purple-500" />,
    features: [
      { name: "Gemini", plus: "", pro: "", ultra: "" }, // Header-like
      { name: "Access to our most capable models", plus: "More", pro: "Higher", ultra: "Highest" },
      { name: "Custom AI experts", plus: true, pro: true, ultra: true },
      { name: "Gemini Live", plus: true, pro: true, ultra: true },
      { name: "Image generation (Nano Banana Pro)", plus: false, pro: "Higher", ultra: "Highest" },
      { name: "Deep Research", plus: false, pro: "Higher", ultra: "Highest" },
      { name: "File upload", plus: "More", pro: "Higher", ultra: "Highest" },
      { name: "Video generation model access", plus: "Veo 3.1 Lite", pro: "Veo 3.1 Lite", ultra: "Veo 3.1" },
      { name: "Create music with Lyria 3", plus: "More", pro: "Higher", ultra: "Highest" },
      { name: "Priority access to new features", plus: true, pro: true, ultra: true },
      { name: "Expanded token context window", plus: "128K", pro: "1 million", ultra: "1 million" },
      
      { name: "Gemini in Gmail, Docs, and more", plus: "", pro: "", ultra: "" }, // Header-like
      { name: "Help me connect in Meet", plus: true, pro: true, ultra: true },
      { name: "Help me generate video in Vids", plus: false, pro: true, ultra: true },

      { name: "NotebookLM", plus: "", pro: "", ultra: "" }, // Header-like
      { name: "Gemini access", plus: "More", pro: "Higher", ultra: "Highest" },
      { name: "Usage limits", plus: "More", pro: "Higher", ultra: "Highest" },
      { name: "Notebook size", plus: "Large", pro: "Larger", ultra: "Largest" },

      { name: "Flow", plus: "", pro: "", ultra: "" }, // Header-like
      { name: "Video generation model access", plus: "Veo 3.1", pro: "Veo 3.1", ultra: "Veo 3.1" },
      { name: "Pooled AI credits", plus: "200 credits/mo", pro: "1,000 credits/mo", ultra: "25,000 credits/mo" },

      { name: "Jules", plus: "", pro: "", ultra: "" }, // Header-like
      { name: "Task limits", plus: "Limited", pro: "Expanded", ultra: "Highest" },
      { name: "Concurrent task limits", plus: "Limited", pro: "Expanded", ultra: "Highest" },
      { name: "Access to latest models", plus: "Limited", pro: "Expanded", ultra: "Highest" },

      { name: "Google Developer Program premium", plus: "", pro: "", ultra: "" }, // Header-like
      { name: "Gemini Code Assist & CLI", plus: "Limited", pro: "Higher", ultra: "Highest" },
      { name: "Google Cloud credits", plus: false, pro: "$10 monthly credits", ultra: "$100 monthly credits" },

      { name: "Google Antigravity", plus: "", pro: "", ultra: "" }, // Header-like
      { name: "Agent requests", plus: "Limited", pro: "Higher", ultra: "Highest" },
    ],
  },
  {
    id: "more-benefits",
    name: "More benefits",
    icon: <PlusCircle className="w-5 h-5 text-green-500" />,
    features: [
      { name: "Premium video calling in Google Meet", plus: false, pro: true, ultra: true },
      { name: "Enhanced scheduling in Google Calendar", plus: false, pro: true, ultra: true },
      { name: "YouTube Premium", plus: false, pro: "Add-on available", ultra: "Available" },
    ],
  },
];

const FeatureValue = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-blue-500 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-gray-700 mx-auto" />
    );
  }
  if (value === "") return null;
  return <span className="text-sm font-medium text-gray-300">{value}</span>;
};

export const PlanComparison = () => {
  const [expandedCats, setExpandedCats] = useState<string[]>(["storage", "google-ai", "more-benefits"]);

  const toggleCategory = (id: string) => {
    setExpandedCats((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <section id="plans" className="py-24 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20 text-white">
          แพ็กเกจ Google One 
        </h2>

        <div className="overflow-x-auto rounded-[2rem] border border-gray-800 bg-[#0a0a0a] shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="p-8 w-1/4"></th>
                <th className="p-8 text-center w-1/4">
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Google AI Plus</div>
                  <div className="text-white text-xl font-bold">฿189/mo</div>
                </th>
                <th className="p-8 text-center w-1/4 bg-blue-500/5 relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Google AI Pro</div>
                  <div className="text-white text-xl font-bold">฿750/mo</div>
                </th>
                <th className="p-8 text-center w-1/4">
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Google AI Ultra</div>
                  <div className="text-white text-xl font-bold">฿9,400/mo</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="contents">
                  <tr 
                    className="bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
                    onClick={() => toggleCategory(cat.id)}
                  >
                    <td colSpan={4} className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {cat.icon}
                          <span className="text-lg font-bold text-white uppercase tracking-wider">{cat.name}</span>
                        </div>
                        {expandedCats.includes(cat.id) ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                      </div>
                    </td>
                  </tr>
                  {expandedCats.includes(cat.id) && cat.features.map((feature, idx) => {
                    const isSubHeader = feature.plus === "" && feature.pro === "" && feature.ultra === "";
                    return (
                      <tr key={idx} className={`border-b border-gray-800/50 hover:bg-white/[0.02] transition-colors ${isSubHeader ? 'bg-black/20' : ''}`}>
                        <td className={`p-6 text-sm ${isSubHeader ? 'font-bold text-gray-200 pt-8' : 'text-gray-400 pl-10'}`}>
                          {feature.name}
                        </td>
                        <td className="p-6 text-center">
                          <FeatureValue value={feature.plus} />
                        </td>
                        <td className="p-6 text-center bg-blue-500/5">
                          <FeatureValue value={feature.pro} />
                        </td>
                        <td className="p-6 text-center">
                          <FeatureValue value={feature.ultra} />
                        </td>
                      </tr>
                    );
                  })}
                </div>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
