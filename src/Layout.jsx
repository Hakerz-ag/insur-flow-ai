import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    {
      title: "Platform",
      url: createPageUrl("Home") // Changed from "Platform" to "Home"
    },
    {
      title: "Solutions",
      items: [
        { title: "Email Intelligence", url: createPageUrl("EmailIntelligence"), desc: "Automate data extraction from emails & attachments." },
        { title: "Submission Triage", url: createPageUrl("SubmissionTriage"), desc: "Prioritize and route incoming submissions instantly." },
        { title: "Portfolio Analytics", url: createPageUrl("PortfolioAnalytics"), desc: "Gain insights from your agency's communication data." }
      ]
    },
    {
      title: "Resources",
      items: [
        { title: "Case Studies", url: createPageUrl("CaseStudies"), desc: "Success stories from leading agencies." },
      ]
    },
    {
      title: "About Us",
      url: createPageUrl("About")
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --primary-orange: #ea580c;
          --light-orange: #f97316;
          --navy: #1e293b;
          --light-gray: #f8fafc;
          --border-gray: #e2e8f0;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--primary-orange), var(--light-orange));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-glass {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid rgba(226, 232, 240, 0.3);
        }
        
        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(234, 88, 12, 0.15);
        }

        .logo-symbol {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .footer-logo {
          filter: brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }
      `}</style>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/36270d2a6_insur-flow_transparent.png"
                alt="insur-flow logo"
                className="h-8 w-auto logo-symbol"
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="text-slate-700 hover:text-orange-600 transition-colors">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-3 p-6 w-80">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.url}
                                className="block p-3 rounded-lg hover:bg-slate-50 transition-colors"
                              >
                                <div className="font-semibold text-slate-900">{subItem.title}</div>
                                <div className="text-sm text-slate-600 mt-1">{subItem.desc}</div>
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                       <Link
                        to={item.url}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-orange-600 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover-lift">
                  Request Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="font-semibold text-slate-900 mb-2">{item.title}</div>
                  {item.items ? (
                    <div className="pl-4 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.url}
                          className="block text-slate-600 hover:text-orange-600 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.url}
                      className="block text-slate-600 hover:text-orange-600 transition-colors pl-4"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Link to={createPageUrl("Contact")}>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/36270d2a6_insur-flow_transparent.png"
                  alt="insur-flow"
                  className="h-6 w-auto footer-logo"
                />
              </div>
              <p className="text-slate-300 mb-6">
                The operating system for modern insurance agencies.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span className="text-slate-300">contact@techsprint.us</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-slate-300">New Jersey</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Solutions</h3>
              <div className="space-y-3">
                <Link to={createPageUrl("EmailIntelligence")} className="block text-slate-300 hover:text-orange-400 transition-colors">
                  Email Intelligence
                </Link>
                <Link to={createPageUrl("SubmissionTriage")} className="block text-slate-300 hover:text-orange-400 transition-colors">
                  Submission Triage
                </Link>
                <Link to={createPageUrl("PortfolioAnalytics")} className="block text-slate-300 hover:text-orange-400 transition-colors">
                  Portfolio Analytics
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <div className="space-y-3">
                <Link to={createPageUrl("About")} className="block text-slate-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
                <Link to={createPageUrl("Contact")} className="block text-slate-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <div className="space-y-3">
                <Link to={createPageUrl("CaseStudies")} className="block text-slate-300 hover:text-orange-400 transition-colors">
                  Case Studies
                </Link>
                <a href="#" className="block text-slate-300 hover:text-orange-400 transition-colors cursor-not-allowed">
                  Privacy Policy
                </a>
                <a href="#" className="block text-slate-300 hover:text-orange-400 transition-colors cursor-not-allowed">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© 2025 Insure-Flow.ai. All rights reserved.</p> {/* Updated year to 2025 */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors cursor-not-allowed">LinkedIn</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors cursor-not-allowed">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}