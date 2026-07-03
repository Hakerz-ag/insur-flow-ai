import React from 'react';
import { Target, Eye } from 'lucide-react';

const TeamMember = ({ name, title, image, bio }) => (
  <div className="text-center">
    <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />
    <h3 className="text-xl font-bold text-slate-900">{name}</h3>
    <p className="text-orange-600 font-semibold">{title}</p>
    <p className="text-slate-600 mt-2 text-sm max-w-xs mx-auto">{bio}</p>
  </div>
);

export default function About() {
  const team = [
    {
      name: 'Satish Puskoor',
      title: 'CEO',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/326a9f4c9_WhatsAppImage2025-08-30at182153.jpeg',
      bio: 'Former Consulting Executive specialized in insurance and banking with a passion for solving the industry\'s biggest operational headaches.'
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">We're Building the Future of Insurance</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            insur-flow was founded by a team of insurance veterans and technology experts who believe that agents and brokers deserve better tools.
            Our mission is to empower agencies with intelligent automation, so they can thrive in a competitive world.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6"><Target className="w-8 h-8 text-white" /></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600">To create the essential operating system for modern insurance agencies, eliminating manual work and unlocking data-driven insights to help them grow and succeed.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6"><Eye className="w-8 h-8 text-white" /></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600">A future where every insurance professional is empowered by intelligent technology to focus on what matters most: building relationships and providing expert advice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Meet Our CEO</h2>
            <p className="text-xl text-slate-600 mt-4">Leadership with a passion for innovation and a deep respect for the insurance industry.</p>
          </div>
          <div className="flex justify-center">
            {team.map(member => <TeamMember key={member.name} {...member} />)}
          </div>
        </div>
      </section>
    </div>
  );
}