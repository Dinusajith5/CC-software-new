import React from "react";
import { clients } from "../mockData";

const ClientsSection = () => {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrolling Animation */}
        <div className="relative">
          <div className="flex animate-scroll space-x-12 items-center">
            {/* First set of logos */}
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex-shrink-0 flex items-center justify-center h-16 px-8 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <span className="text-gray-700 font-semibold text-lg whitespace-nowrap">
                  {client.logo}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {clients.map((client) => (
              <div
                key={`duplicate-${client.id}`}
                className="flex-shrink-0 flex items-center justify-center h-16 px-8 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <span className="text-gray-700 font-semibold text-lg whitespace-nowrap">
                  {client.logo}
                </span>
              </div>
            ))}
            {/* Third set for even smoother animation */}
            {clients.map((client) => (
              <div
                key={`triple-${client.id}`}
                className="flex-shrink-0 flex items-center justify-center h-16 px-8 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <span className="text-gray-700 font-semibold text-lg whitespace-nowrap">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;