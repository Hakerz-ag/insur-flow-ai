
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Mail,
  FileText,
  Search,
  CheckCircle,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom"; // Added for routing functionality

// Helper function to generate page URLs.
// This function is a placeholder. In a real application, it would typically
// be imported from a routing configuration file or a utility module.
const createPageUrl = (pageName) => {
  switch (pageName) {
    case "Contact":
      return "/contact"; // Example: maps "Contact" to the /contact route
    case "Demo":
      return "/demo";    // Example: maps "Demo" to the /demo route
    default:
      return `/${pageName.toLowerCase()}`; // Fallback: converts name to lowercase path
  }
};

export default function EmailIntelligence() {
  const features = [
    {
      icon: Mail,
      title: "Real-Time Sync",
      description: "Connects directly to your agency's mailboxes (Outlook, Gmail) for continuous, real-time processing."
    },
    {
      icon: FileText,
      title: "Universal Attachment Processing",
      description: "Extracts data from any attachment type: PDFs, Excel, Word docs, images, and more."
    },
    {
      icon: Search,
      title: "Deep Content Analysis",
      description: "Understands the context and content of email bodies to pull unstructured data points."
    },
    {
      icon: Zap,
      title: "Automated Data Entry",
      description: "Populates your Agency Management System automatically, eliminating manual data entry."
    }
  ];

  const benefits = [
    "Eliminate 95% of manual data entry tasks",
    "Ensure 100% of incoming communication is logged and processed",
    "Standardize data capture across your entire team",
    "Free up producers and account managers to focus on clients",
    "Reduce errors and omissions (E&O) exposure",
    "Create a single source of truth for all submission data"
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
                <Mail className="w-4 h-4 mr-2" />
                Solution: Email Intelligence
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Put Your Agency's
                <span className="gradient-text block">Inbox on Autopilot</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl">
                Our AI reads, understands, and processes every email and attachment, 
                turning your chaotic inbox into a structured, automated data pipeline.
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
                  src="https://images.unsplash.com/photo-1554224155-1696413565d3?w=600&h=400&fit=crop" 
                  alt="Email Intelligence Dashboard" 
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
              Core Email Intelligence Capabilities
            </h2>
            <p className="text-xl text-slate-600">
              A complete toolkit to automate email and document handling.
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
                Never Miss an Opportunity. Never Enter Data Again.
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                insur-flow acts as your digital assistant, ensuring every piece of communication is captured,
                analyzed, and actioned, so your team can focus on relationships and revenue.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=700&fit=crop" 
                  alt="Team Collaboration" 
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
