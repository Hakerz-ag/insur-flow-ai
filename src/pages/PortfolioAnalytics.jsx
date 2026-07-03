import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  BarChart3,
  PieChart,
  CheckCircle,
  Clock,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from '@/utils';

export default function PortfolioAnalytics() {
  const features = [
    {
      icon: BarChart3,
      title: "Submission Analytics",
      description: "Track submission volume, hit ratios, and quote turnaround times by carrier, producer, or line of business."
    },
    {
      icon: Clock,
      title: "Carrier Performance",
      description: "Analyze carrier responsiveness, quote ratios, and binding rates to optimize your market strategy."
    },
    {
      icon: Briefcase,
      title: "Producer & Team Dashboards",
      description: "Provide every team member with real-time visibility into their personal pipeline and performance metrics."
    },
    {
      icon: PieChart,
      title: "Book of Business Analysis",
      description: "Visualize your entire book of business by industry, premium, carrier, and policy type."
    }
  ];

  const benefits = [
    "Make data-driven decisions to improve carrier relationships",
    "Identify top-performing producers and teams",
    "Spot trends in submission flow and market appetite",
    "Increase hit ratios by focusing on high-probability submissions",
    "Gain a real-time, holistic view of your agency's health",
    "Prepare for carrier meetings with powerful data visualizations"
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
                <BarChart3 className="w-4 h-4 mr-2" />
                Solution: Portfolio Analytics
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Unlock the Insights
                <span className="gradient-text block">Hidden in Your Data</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl">
                insur-flow transforms your daily operational data into a powerful strategic asset. 
                Understand your agency's performance like never before.
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                  alt="Analytics Dashboard" 
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
              Data-Driven Insights for Every Role
            </h2>
            <p className="text-xl text-slate-600">
              Powerful analytics dashboards tailored for agency leadership, team managers, and individual producers.
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
                From Reactive Reporting to Proactive Strategy
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Stop spending hours compiling reports. insur-flow gives you instant, real-time access to the metrics that matter most for your agency's growth.
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=700&fit=crop" 
                  alt="Strategic Meeting" 
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