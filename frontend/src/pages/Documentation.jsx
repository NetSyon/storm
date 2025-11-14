import React, { useState } from 'react';
import { documentationResources } from '../data/mock';
import * as LucideIcons from 'lucide-react';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocs = documentationResources.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName] || LucideIcons.BookOpen;
    return <Icon className="w-5 h-5" />;
  };

  const categories = [...new Set(documentationResources.map(doc => doc.category))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">Documentation Center</h2>
        <p className="text-gray-400">Access comprehensive guides and resources for Microsoft 365 security</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <LucideIcons.Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search documentation..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
        />
      </div>

      {/* Tabs by Category */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-white/5 border-white/10 w-full justify-start overflow-x-auto">
          <TabsTrigger value="all" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300">
            All Resources
          </TabsTrigger>
          {categories.map(category => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDocs.map(doc => (
              <Card
                key={doc.id}
                className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
                onClick={() => window.open(doc.url, '_blank')}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      {getIcon(doc.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg text-white">{doc.title}</CardTitle>
                        <LucideIcons.ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                      </div>
                      <CardDescription className="text-gray-400 text-sm mt-2">
                        {doc.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-xs border-white/10 text-gray-400">
                    {doc.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documentationResources
                .filter(doc => doc.category === category)
                .filter(doc =>
                  doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  doc.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map(doc => (
                  <Card
                    key={doc.id}
                    className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
                    onClick={() => window.open(doc.url, '_blank')}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                          {getIcon(doc.icon)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-lg text-white">{doc.title}</CardTitle>
                            <LucideIcons.ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                          </div>
                          <CardDescription className="text-gray-400 text-sm mt-2">
                            {doc.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {filteredDocs.length === 0 && (
        <div className="text-center py-12">
          <LucideIcons.FileQuestion className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <p className="text-gray-400">No documentation found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Documentation;