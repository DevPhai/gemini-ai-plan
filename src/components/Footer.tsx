/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const Footer = () => (
  <footer className="py-24 px-4 border-t border-gray-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-left">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg" />
          <span className="font-bold text-lg tracking-tight">PaPa Mama 2 Song</span>
        </div>
        <div className="flex gap-8 opacity-40 grayscale">
          <span className="text-[10px] uppercase font-bold tracking-widest">DeepMind</span>
          <span className="text-[10px] uppercase font-bold tracking-widest">Google Cloud</span>
          <span className="text-[10px] uppercase font-bold tracking-widest">Android Integration</span>
        </div>
      </div>

      <div className="text-center md:text-right">
        <div className="flex justify-center md:justify-end gap-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
          <a href="#" className="hover:text-blue-400 transition-colors">Safety</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
        </div>
        <p className="mt-4 text-gray-600 text-[10px] uppercase tracking-widest">
          © 2026 เทนนี่ และนายขจรเกียจ จำกัด
        </p>
      </div>
    </div>
  </footer>
);
