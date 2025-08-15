import React from "react";
import { useClients } from "../hooks/useApi";
import { Skeleton } from "./ui/skeleton";

const ClientsSection = () => {
  const { data: clients, loading, error } = useClients();

  if (loading) {
    return (
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-12 items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="flex-shrink-0 h-16 w-48 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !clients) {
    return null; // Hide section if error or no data
  }

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