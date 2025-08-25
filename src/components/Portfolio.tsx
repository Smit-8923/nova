import React from 'react';
import { ExternalLink, Github, ArrowRight, CheckCircle, Clock } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'iTravel',
      description: 'A comprehensive travel booking platform with real-time availability, smart recommendations, and seamless user experience. Features include flight booking, hotel reservations, travel packages, and personalized itineraries.',
      category: 'Travel Platform',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Completed',
      year: '2024',
      features: ['Flight Booking', 'Hotel Reservations', 'Travel Packages', 'Smart Recommendations', 'Mobile App', 'Payment Integration']
    },
    {
      title: 'Bystro',
      description: 'An innovative restaurant management platform designed to streamline operations, enhance customer experience, and boost revenue. Includes order management, inventory tracking, and customer analytics.',
      category: 'Restaurant Platform',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Coming Soon',
      year: '2024',
      features: ['Order Management', 'Inventory Tracking', 'Customer Analytics', 'Staff Management', 'Menu Builder', 'POS Integration']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-dark-900 dark:to-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our latest projects and innovative solutions that showcase 
            our expertise in modern web development and digital transformation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-dark-700 hover:border-indigo-200 dark:hover:border-indigo-600 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border shadow-lg flex items-center space-x-1 ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-700' 
                      : 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-700'
                  }`}>
                    {project.status === 'Completed' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    <span>{project.status}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 rounded-lg transition-colors duration-200">
                      <ExternalLink className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </button>
                    <button className="p-2 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 rounded-lg transition-colors duration-200">
                      <Github className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-50 via-purple-50 to-cyan-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-cyan-900/20 p-8 rounded-2xl border border-indigo-100 dark:border-indigo-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to be our next success story?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's collaborate and create something extraordinary together.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl">
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;