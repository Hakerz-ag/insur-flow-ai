import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyCard = ({ title, agency, description, metrics, image }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift overflow-hidden group">
    <div className="grid lg:grid-cols-2">
      <div className="p-8 flex flex-col justify-center">
        <p className="text-orange-600 font-semibold mb-2">{agency}</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
        <div className="space-y-3 mb-6">
          {metrics.map((metric, i) => (
            <div key={i} className="flex items-center">
              <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
              <span className="font-semibold text-slate-700">{metric}</span>
            </div>
          ))}
        </div>
        <Link to="#">
          <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0">
            Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
      <div className="hidden lg:block">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
);

export default function CaseStudies() {
  const studies = [
    {
      agency: 'Top 5 Speciality Insurance in NJ',
      title: 'Increases Submission Capacity by 200%',
      description: 'This carrier struggled with data inconsistencies from manual entry. With insur-flow, they automated data capture to achieve near-perfect accuracy, reducing E&O exposure and freeing up agents to focus on client relationships and evaluate more submissions.',
      metrics: ['Identified $2M in new cross-sell opportunities', 'Improved carrier hit ratios by 30%', 'Gained a real-time view of agency performance'],
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=600&fit=crop',
    },
    {
      agency: 'Top 5 Commercial/Speciality Insurance in NYC',
      title: 'AI assisted Underwriting Operations reduces operations staff by 50%',
      description: 'a national commercial lines agency, leveraged insur-flow to eliminate manual data entry and triple their daily submission processing capacity without adding headcount.',
      metrics: ['50% faster quote turnaround', '95% reduction in manual tasks', '20% increase in placement ratio'],
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=600&fit=crop',
    }
  ];

  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4">Customer Success Stories</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how leading agencies are transforming their operations and driving growth with insur-flow.
          </p>
        </div>
        <div className="space-y-12">
          {studies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
}
