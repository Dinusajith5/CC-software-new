import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                CC Software Solutions
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                CC Software Solutions is your trusted partner for innovative IT product development. 
                We are dedicated to delivering tailored IT solutions that leverage the latest technologies 
                and best practices in the industry. Our goal is to enable our clients to achieve their 
                business objectives with reliable, cost-effective, and future-proof IT solutions.
              </p>
            </div>
            
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              size="lg"
            >
              <span>Read More About Us</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Right Content - Abstract Design */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              {/* Abstract flowing lines design */}
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full opacity-70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                {/* Flowing curves */}
                <path
                  d="M 50 150 Q 150 50 250 150 T 350 100"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 100 200 Q 200 100 300 200 T 400 150"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M 0 100 Q 100 200 200 100 T 300 200"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                
                {/* Floating circles */}
                <circle cx="100" cy="80" r="4" fill="#8b5cf6" opacity="0.6" />
                <circle cx="300" cy="60" r="3" fill="#3b82f6" opacity="0.7" />
                <circle cx="200" cy="220" r="5" fill="#10b981" opacity="0.5" />
                <circle cx="350" cy="180" r="3" fill="#f59e0b" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;