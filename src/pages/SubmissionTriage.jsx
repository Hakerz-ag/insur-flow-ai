
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Zap,
  Filter,
  Users,
  CheckCircle,
  ListTodo
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from '@/utils';

export default function SubmissionTriage() {
  const features = [
    {
      icon: Zap,
      title: "Instant Classification",
      description: "AI instantly identifies incoming emails as new submissions, quotes, endorsements, or general queries."
    },
    {
      icon: Filter,
      title: "Smart Prioritization",
      description: "Use custom rules based on line of business, premium size, or client tier to surface high-value submissions."
    },
    {
      icon: Users,
      title: "Automated Assignment",
      description: "Route submissions to the right producer, account manager, or team based on load balancing or expertise."
    },
    {
      icon: ListTodo,
      title: "Task Generation",
      description: "Automatically create follow-up tasks in your AMS, ensuring no opportunity falls through the cracks."
    }
  ];

  const benefits = [
    "Increase submission-to-quote speed by 50%",
    "Ensure high-priority submissions are actioned first",
    "Improve team workload balancing and efficiency",
    "Eliminate the need for a central 'submissions inbox' manager",
    "Provide a consistent and rapid response to your retail partners",
    "Track every submission from intake to resolution automatically"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-orange-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 bg-[size:60px_60px] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Solution: Submission Triage
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Respond to the
                <span className="gradient-text block">Right Submission, Faster</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl">
                Automatically categorize, prioritize, and route every new business submission the moment it hits your inbox.
                Turn your agency into a placement machine.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
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
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop" 
                  alt="Submission Triage Dashboard" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Intelligent Submission Management
            </h2>
            <p className="text-xl text-slate-600">
              The tools you need to build a faster, more efficient submission workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Win More Business with Speed and Precision
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                In a competitive market, speed wins. insur-flow gives your team the edge by ensuring the most valuable submissions get immediate attention.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=700&fit=crop" 
                  alt="Team Workflow" 
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
