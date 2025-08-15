import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const OurTeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Chief Technology Officer",
      department: "Leadership",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Experienced tech leader with 10+ years in software architecture and team management. Passionate about cutting-edge technologies and innovation.",
      skills: ["System Architecture", "Team Leadership", "Strategic Planning"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "alex.chen@ccsoftwares.com"
      }
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Lead Frontend Developer",
      department: "Development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Frontend specialist with expertise in React, Vue.js, and modern web technologies. Creates beautiful and performant user interfaces.",
      skills: ["React.js", "Vue.js", "TypeScript", "UI/UX Design"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sarah.johnson@ccsoftwares.com"
      }
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Senior Backend Developer",
      department: "Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=face",
      bio: "Backend architect specializing in scalable systems, API design, and database optimization. Expert in Node.js and Python ecosystems.",
      skills: ["Node.js", "Python", "MongoDB", "System Design"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "michael.rodriguez@ccsoftwares.com"
      }
    },
    {
      id: 4,
      name: "Emily Watson",
      role: "UX/UI Designer",
      department: "Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Creative designer focused on user-centered design principles. Transforms complex ideas into intuitive and engaging digital experiences.",
      skills: ["UI Design", "UX Research", "Prototyping", "Design Systems"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "emily.watson@ccsoftwares.com"
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "Mobile App Developer",
      department: "Development",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Mobile development expert specializing in React Native and Flutter. Creates high-performance cross-platform mobile applications.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "david.kim@ccsoftwares.com"
      }
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "Digital Marketing Manager",
      department: "Marketing",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face",
      bio: "Digital marketing strategist with expertise in SEO, content marketing, and social media. Drives growth through data-driven campaigns.",
      skills: ["SEO", "Content Strategy", "Social Media", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "lisa.thompson@ccsoftwares.com"
      }
    }
  ];

  const departments = ["All", "Leadership", "Development", "Design", "Marketing"];
  const [selectedDepartment, setSelectedDepartment] = React.useState("All");

  const filteredMembers = selectedDepartment === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            The talented individuals behind CC Software Solutions. Our diverse team of experts 
            brings together creativity, technical expertise, and passion for innovation.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">200+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">15+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <Card 
                key={member.id} 
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Member Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Social Links Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-white/90 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="p-2 bg-white/90 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-200"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href={member.social.github}
                        className="p-2 bg-white/90 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-200"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 bg-white/90 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-200"
                        aria-label="Email"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-purple-600 font-medium">{member.role}</p>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        {member.department}
                      </Badge>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700">Core Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="text-xs border-purple-200 text-purple-700 hover:bg-purple-50"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            We're always looking for talented individuals who share our passion for innovation 
            and excellence. Join us in creating amazing software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Send Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;