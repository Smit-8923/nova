import React from 'react';
import { Target, Eye, Zap, Users, CheckCircle, ArrowRight, Code, Palette, Cloud, Smartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-dark-800 dark:to-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Nova Creations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're a dynamic startup revolutionizing the IT landscape with innovative solutions 
            and cutting-edge technology.
          </p>
        </div>

        {/* Who We Are */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Who We Are</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Nova Creations is a forward-thinking IT startup founded on the belief that technology 
                should empower businesses to reach their full potential. We combine creativity with 
                technical expertise to deliver solutions that drive real results.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our team of passionate developers, designers, and strategists work collaboratively 
                to transform your digital vision into reality. We're not just service providers – 
                we're your technology partners.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 h-64 flex items-center justify-center border border-blue-100 dark:border-blue-800">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-8 rounded-2xl border border-indigo-200 dark:border-indigo-700">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To become a leading force in digital transformation, empowering businesses 
              worldwide with innovative technology solutions that drive growth and success 
              in the digital age.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-700">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To deliver exceptional IT solutions that exceed expectations, foster innovation, 
              and create lasting partnerships with our clients through transparency, 
              reliability, and cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Our Workflow */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Workflow</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a proven methodology that ensures successful project delivery and client satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: 'Discovery', desc: 'Understanding your needs and project requirements' },
              { icon: Palette, title: 'Design', desc: 'Creating intuitive and beautiful user experiences' },
              { icon: Code, title: 'Development', desc: 'Building robust and scalable solutions' },
              { icon: CheckCircle, title: 'Delivery', desc: 'Testing, deployment, and ongoing support' }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We stand out from the competition with our unique approach and proven track record
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Innovation First', desc: 'We stay ahead of technology trends and implement cutting-edge solutions' },
              { icon: Users, title: 'Expert Team', desc: 'Our skilled professionals bring years of experience and deep technical knowledge' },
              { icon: CheckCircle, title: 'Quality Assured', desc: 'Rigorous testing and quality assurance processes ensure flawless delivery' }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 p-6 rounded-xl border border-gray-100 dark:border-dark-700 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">What We Provide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Web Development',
              'AI Solutions',
              'Cloud Services',
              'Digital Transformation',
              'Mobile Apps',
              'UI/UX Design',
              'Consulting',
              'Support & Maintenance'
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-700 p-4 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-200 dark:hover:border-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;