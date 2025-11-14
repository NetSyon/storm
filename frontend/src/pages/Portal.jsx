import React, { useState } from 'react';
import { securityPortals } from '../data/mock';
import * as LucideIcons from 'lucide-react';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Portal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(securityPortals.map(portal => portal.category))];

  const filteredPortals = securityPortals.filter(portal => {
    const matchesSearch = portal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         portal.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || portal.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName] || LucideIcons.Shield;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <div className="space-y-4">
        <div className="relative">
          <LucideIcons.Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search portals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                  : 'border-white/10 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Portals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPortals.map(portal => (
          <Card
            key={portal.id}
            className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
            onClick={() => window.open(portal.url, '_blank')}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  {getIcon(portal.icon)}
                </div>
                <LucideIcons.ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <CardTitle className="text-lg text-white mt-3">{portal.name}</CardTitle>
              <CardDescription className="text-gray-400 text-sm">
                {portal.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="text-xs border-white/10 text-gray-400">
                {portal.category}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPortals.length === 0 && (
        <div className="text-center py-12">
          <LucideIcons.SearchX className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <p className="text-gray-400">No portals found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Portal;