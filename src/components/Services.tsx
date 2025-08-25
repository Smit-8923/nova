import React from 'react';
import { 
  Globe, 
  Brain, 
  Cloud, 
  Smartphone, 
  Palette, 
  Settings, 
  MessageSquare, 
  Shield 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure']
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent automation and machine learning solutions to streamline your business processes.',
      features: ['Machine Learning', 'Data Analytics', 'Automation', 'Predictive Models']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Monitoring', 'Backup Solutions']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'App Store Optimization', 'Push Notifications']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: Settings,
      title: 'Digital Transformation',
      description: 'Comprehensive digital strategy and implementation to modernize your business operations.',
      features: ['Strategy Planning', 'Process Optimization', 'Technology Integration', 'Change Management']
    },
    {
      icon: MessageSquare,
      title: 'Consulting',
      description: 'Expert technology consulting to help you make informed decisions and strategic choices.',
      features: ['Technology Assessment', 'Strategic Planning', 'Best Practices', 'Risk Analysis']
    },
    {
      icon: Shield,
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance services to ensure your systems run smoothly and securely.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Security Patches', 'Performance Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive IT solutions tailored to meet your business needs 
            and drive digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-dark-700 hover:border-indigo-200 dark:hover:border-indigo-600 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl mb-4 group-hover:from-indigo-200 group-hover:to-purple-200 dark:group-hover:from-indigo-800/30 dark:group-hover:to-purple-800/30 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to transform your business with our innovative solutions?
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;