import React from 'react';
import { githubRepo } from '../data/mock';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const GitHub = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">GitHub Repository</h2>
        <p className="text-gray-400">Team code, scripts, and automation resources</p>
      </div>

      {/* Main Repository Card */}
      <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-white/10">
                <LucideIcons.Github className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-white">{githubRepo.owner}/{githubRepo.name}</CardTitle>
                <CardDescription className="text-gray-400 mt-1">
                  {githubRepo.description}
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-white/20 text-gray-300">
              <LucideIcons.Code className="w-3 h-3 mr-1" />
              PowerShell
            </Badge>
            <Badge variant="outline" className="border-white/20 text-gray-300">
              <LucideIcons.FileCode className="w-3 h-3 mr-1" />
              Python
            </Badge>
            <Badge variant="outline" className="border-white/20 text-gray-300">
              <LucideIcons.Shield className="w-3 h-3 mr-1" />
              Security Scripts
            </Badge>
          </div>

          <Button
            onClick={() => window.open(githubRepo.url, '_blank')}
            className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
          >
            <LucideIcons.ExternalLink className="w-4 h-4 mr-2" />
            View Repository
          </Button>
        </CardContent>
      </Card>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
          onClick={() => window.open(`${githubRepo.url}/issues`, '_blank')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <LucideIcons.AlertCircle className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Issues</CardTitle>
            </div>
            <CardDescription className="text-gray-400 text-sm mt-2">
              Track bugs and feature requests
            </CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
          onClick={() => window.open(`${githubRepo.url}/pulls`, '_blank')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <LucideIcons.GitPullRequest className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Pull Requests</CardTitle>
            </div>
            <CardDescription className="text-gray-400 text-sm mt-2">
              Review code changes and contributions
            </CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
          onClick={() => window.open(`${githubRepo.url}/wiki`, '_blank')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <LucideIcons.BookOpen className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Wiki</CardTitle>
            </div>
            <CardDescription className="text-gray-400 text-sm mt-2">
              Team documentation and guides
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Repository Stats */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Repository Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <LucideIcons.GitBranch className="w-5 h-5 text-cyan-400" />
                <span>Main branch for production scripts</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <LucideIcons.Lock className="w-5 h-5 text-cyan-400" />
                <span>Private repository access</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <LucideIcons.Users className="w-5 h-5 text-cyan-400" />
                <span>Team collaboration enabled</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <LucideIcons.Shield className="w-5 h-5 text-cyan-400" />
                <span>Security scanning enabled</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <LucideIcons.CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>CI/CD workflows active</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <LucideIcons.FileCode className="w-5 h-5 text-cyan-400" />
                <span>Code review required</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GitHub;