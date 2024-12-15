import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Building, Leaf } from 'lucide-react';

const milestones = [
  { year: '2010', description: 'Founded in Kerala' },
  { year: '2015', description: 'Expanded to South India' },
  { year: '2018', description: 'ISO 9001:2015 Certification' },
  { year: '2023', description: 'Pan India Operations' },
];

const values = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Committed to delivering premium grade gypsum plaster products',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Dedicated to exceeding customer expectations',
  },
  {
    icon: Building,
    title: 'Innovation',
    description: 'Continuous improvement in products and processes',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Eco-friendly practices in manufacturing and operations',
  },
];

export default function About() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            To revolutionize the construction industry with innovative, sustainable, and high-quality gypsum plaster solutions while maintaining environmental responsibility.
          </motion.p>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <div className="font-bold text-blue-600 text-xl mb-2">{milestone.year}</div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}