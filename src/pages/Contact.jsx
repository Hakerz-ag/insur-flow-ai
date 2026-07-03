import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    e.target.reset();
    setTimeout(() => setFormStatus(null), 5000); // Hide message after 5 seconds
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">Get in Touch</h1>
            <p className="text-xl text-slate-600">
              We'd love to hear from you. Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Email Us</h3>
                  <a href="mailto:contact@techsprint.us" className="text-slate-600 hover:text-orange-600 transition-colors">contact@techsprint.us</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Call Us</h3>
                  <a href="tel:5188942336" className="text-slate-600 hover:text-orange-600 transition-colors">(518) 894-2336</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Location</h3>
                  <p className="text-slate-600">New Jersey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 lg:p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Request a Demo</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <Input placeholder="First Name" required />
                <Input placeholder="Last Name" required />
              </div>
              <Input type="email" placeholder="Work Email" required />
              <Input placeholder="Company Name" required />
              <Input placeholder="Job Title" required />
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Agency Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201+">201+ employees</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="What are you hoping to solve with insur-flow?" rows={4} />
              <Button size="lg" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                Submit Request
              </Button>
               {formStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-md">
                  <AlertCircle className="w-5 h-5" />
                  <span>Thank you for your request! We will be in touch shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}