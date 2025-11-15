import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';

const Wiki = () => {
  // This will be replaced with actual wiki URL later
  const [wikiUrl] = useState('https://www.microsoft.com');

  useEffect(() => {
    // Hide "Made with Emergent" button when Wiki page is active
    const emergentButton = document.querySelector('[class*="chakra-button"]') || 
                           document.querySelector('button[class*="emergent"]') ||
                           document.querySelector('a[href*="emergent"]');
    
    if (emergentButton && emergentButton.textContent?.includes('Made with')) {
      emergentButton.style.display = 'none';
    }

    // Cleanup: show button again when leaving Wiki page
    return () => {
      if (emergentButton) {
        emergentButton.style.display = '';
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col bg-slate-950" style={{ top: '64px', bottom: 0, left: 0, right: 0, zIndex: 40 }}>
      {/* Info bar */}
      <div className="bg-slate-900/90 border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <LucideIcons.BookOpen className="w-4 h-4 text-cyan-400" />
          <span>Wiki Documentation</span>
          <span className="mx-2">•</span>
          <span className="text-cyan-400">{wikiUrl}</span>
        </div>
      </div>

      {/* Full screen iframe */}
      <div className="flex-1 relative">
        <iframe
          src={wikiUrl}
          title="Wiki Documentation"
          className="w-full h-full border-0"
          style={{ background: 'white' }}
        />
      </div>
    </div>
  );
};

export default Wiki;