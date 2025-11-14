import React, { useState } from 'react';
import { teamContact } from '../data/mock';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting the security team. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">Contact Us</h2>
        <p className="text-gray-400">Get in touch with the M365 Security Team</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Information Cards */}
        <div className="space-y-4">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <LucideIcons.Mail className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg text-white">Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${teamContact.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {teamContact.email}
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <LucideIcons.MessageSquare className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg text-white">Teams</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{teamContact.teams}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <LucideIcons.Phone className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg text-white">Phone</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href={`tel:${teamContact.phone}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {teamContact.phone}
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <LucideIcons.MapPin className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg text-white">Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{teamContact.location}</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="lg:col-span-2 bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Send us a message</CardTitle>
            <CardDescription className="text-gray-400">
              Have a question or security concern? Fill out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@company.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-300">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Security inquiry, incident report, etc."
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-300">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your security concern or question..."
                  rows={6}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
              >
                <LucideIcons.Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contact */}
      <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30">
        <CardHeader>
          <div className="flex items-center gap-3">
            <LucideIcons.AlertTriangle className="w-6 h-6 text-red-400" />
            <CardTitle className="text-white">Security Emergency?</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            For urgent security incidents or breaches, please contact our 24/7 Security Operations Center immediately.
          </p>
          <Button
            className="bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/50"
            onClick={() => window.location.href = `tel:${teamContact.phone}`}
          >
            <LucideIcons.Phone className="w-4 h-4 mr-2" />
            Call Emergency Line
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;