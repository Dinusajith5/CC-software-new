import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Hexagon Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-600 to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="hexagons"
                x="0"
                y="0"
                width="20"
                height="17.32"
                patternUnits="userSpaceOnUse"
              >
                <polygon
                  points="10,1 18.66,5.5 18.66,14.5 10,19 1.34,14.5 1.34,5.5"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Let's Start
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Empowering businesses through custom software solutions. Your success, our code.{" "}
            <span className="text-purple-300 font-semibold">#CCSoftwareSolutions</span>
          </p>
          <div className="pt-4">
            <Button 
              className="bg-transparent border-2 border-purple-400 text-white hover:bg-purple-600 hover:border-purple-600 px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
              size="lg"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;