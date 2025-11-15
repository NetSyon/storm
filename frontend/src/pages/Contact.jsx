import React from 'react';
import { teamContact } from '../data/mock';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Contact = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">Contact & Support</h2>
        <p className="text-gray-400">Get in touch with the M365 Security Team</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Jira Portal */}
        <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <LucideIcons.TicketCheck className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-xl text-white">Jira Service Portal</CardTitle>
                <p className="text-sm text-gray-400 mt-1">Submit tickets and track issues</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => window.open(teamContact.jiraPortal, '_blank')}
              className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
            >
              <LucideIcons.ExternalLink className="w-4 h-4 mr-2" />
              Open Jira Portal
            </Button>
          </CardContent>
        </Card>

        {/* Group Information */}
        <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                <LucideIcons.Users className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-xl text-white">Team Information</CardTitle>
                <p className="text-sm text-gray-400 mt-1">About our security operations</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400 mb-1">Group Name</p>
                <p className="text-white font-medium">{teamContact.groupName}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Supported Products */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <LucideIcons.Package className="w-5 h-5" />
            </div>
            <CardTitle className="text-white">Supported Products</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {teamContact.supportedProducts.map((product, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-white/20 text-gray-300 bg-white/5 px-3 py-1"
              >
                <LucideIcons.CheckCircle className="w-3 h-3 mr-1 text-cyan-400" />
                {product}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
          onClick={() => window.open(teamContact.jiraPortal, '_blank')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <LucideIcons.FileText className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Create Ticket</CardTitle>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Submit a new support request
            </p>
          </CardHeader>
        </Card>

        <Card
          className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
          onClick={() => window.open(teamContact.jiraPortal, '_blank')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <LucideIcons.Clock className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Track Issues</CardTitle>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Monitor your ticket status
            </p>
          </CardHeader>
        </Card>

        <Card
          className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
          onClick={() => window.open('https://learn.microsoft.com/en-us/microsoft-365/security/', '_blank')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <LucideIcons.BookOpen className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg text-white">Documentation</CardTitle>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Browse security resources
            </p>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Contact;