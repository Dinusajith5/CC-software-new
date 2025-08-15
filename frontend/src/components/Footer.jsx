import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail } from "lucide-react";
import { useCompanyInfo } from "../hooks/useApi";
import { Skeleton } from "./ui/skeleton";

const Footer = () => {
  const { data: companyInfo, loading, error } = useCompanyInfo();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Logo and Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">CC SOFTWARE</span>
                <span className="text-sm font-medium text-blue-400 leading-tight">SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md">
              {loading ? (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ) : companyInfo ? (
                companyInfo.description
              ) : (
                "CC Software Solutions is a leading software engineering company specializing in innovative solutions."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/who-are-we"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Who Are We
              </Link>
              <Link
                to="/our-team"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Our Team
              </Link>
              <Link
                to="/projects"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                to="/service"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Service
              </Link>
              <Link
                to="/get-in-touch"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">{companyInfo.email}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href={companyInfo.socialMedia.facebook}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={companyInfo.socialMedia.instagram}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={companyInfo.socialMedia.youtube}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href={companyInfo.socialMedia.twitter}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © 2024{" "}
              <span className="text-purple-400 font-semibold">CC Software Solutions</span>{" "}
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;