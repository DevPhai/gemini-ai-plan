/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles } from "lucide-react";

export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 h-16">
    <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-tr from-blue-500 via-purple-500 to-red-400 p-1.5 rounded-lg">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight text-white">
          Google One <span className="text-blue-400">AI</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#data" className="hover:text-white transition-colors">Data</a>
        <a href="#tco" className="hover:text-white transition-colors">Cost</a>
        <a href="#benefits" className="hover:text-white transition-colors">Features</a>
        <a href="#closing" className="hover:text-white transition-colors">Why Gemini</a>
        <a href="#sources" className="hover:text-white transition-colors">Sources</a>
      </div>
      <button className="px-5 py-2 rounded-full border border-gray-700 text-white text-sm font-semibold hover:bg-white/5 transition-all">
        Sign In
      </button>
    </div>
  </nav>
);
