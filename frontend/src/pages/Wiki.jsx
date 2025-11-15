import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Wiki = () => {
  // This will be replaced with actual wiki URL later
  const [wikiUrl] = useState('https://www.microsoft.com');

  return (
    <div className="fixed inset-0 flex flex-col" style={{ top: '64px', bottom: 0 }}>
      {/* Info bar */}
      <div className="bg-white/5 border-b border-white/10 px-4 py-2">
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