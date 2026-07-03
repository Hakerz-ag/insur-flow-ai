import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cpu,
  BarChart3,
  Shield,
  Zap,
  Mail,
  Settings,
  CheckCircle,
  Inbox,
  Search
} from "lucide-react";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';


export default function Platform() {
  const modules = [
    {
      name: "MailSync",
      description: "Real-time, secure synchronization with your existing email provider.",
      icon: Mail,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "ClassifyAI",
      description: "Intelligently understands intent: new submission, quote, question, etc.",
      icon: Settings,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "ExtractAI",
      description: "Pulls key data from email bodies and all attachment types.",
      icon: Search,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "FlowEngine",
      description: "Customizable workflows to route, prioritize and assign tasks.",
      icon: Zap,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "AnalyticsSuite",
      description: "Portfolio-wide analytics on submissions, carriers, and performance.",
      icon: BarChart3,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "SecureVault",
      description: "SOC 2 Type II compliant data storage and management.",
      icon: Shield,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const features = [
    "SOC 2 Type II and GDPR compliant",
    "99.99% uptime SLA guarantee",
    "Real-time processing, sub-minute latency",
    "Connects with Outlook, Gmail, and any IMAP server",
    "Integrates with leading Agency Management Systems",
    "Dedicated customer success manager"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-orange-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 bg-[size:60px_60px] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-8">
              <Cpu className="w-4 h-4 mr-2" />
              The insur-flow Platform
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
              The Operating System for
              <span className="gradient-text block">Modern Insurance Agencies</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
              Our enterprise-grade platform connects to your existing systems to automate workflows,
              unlock insights, and empower your team to focus on what they do best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover-lift px-8 py-6 text-lg"
                >
                  Request a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Processing Pipeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              From Inbox to Insights
            </h2>
            <p className="text-xl text-slate-600">
              Our intelligent pipeline turns chaotic email traffic into structured, actionable workflows.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0 lg:space-x-8">
              {[
                { title: "Ingest", desc: "Connects to your agency's mailboxes in real-time.", icon: Inbox },
                { title: "Classify", desc: "AI determines the intent and priority of every message.", icon: Settings },
                { title: "Extract", desc: "Pulls key data from emails and attachments.", icon: Search },
                { title: "Automate", desc: "Ingests policy into administrator portal automatically.", icon: Zap },
                { title: "Analyze", desc: "Analyzes risk of each submission.", icon: BarChart3 }
              ].map((step, index) => (
                <div key={index} className="flex-1 max-w-sm text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-105 transition-transform duration-300">
                      <step.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Core Platform Modules
            </h2>
            <p className="text-xl text-slate-600">
              A powerful, integrated suite of tools to run your agency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift overflow-hidden group">
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{module.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{module.description}</p>
                </div>
                <div className={`h-1 bg-gradient-to-r ${module.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Built for the Modern Agency
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                We provide the security, reliability, and support that enterprise-level agencies demand.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-50 rounded-2xl shadow-2xl p-8 hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                  alt="Platform Dashboard"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}