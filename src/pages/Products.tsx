import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Ultra Premium Plaster',
    description: 'High-end gypsum plaster for superior finish and durability',
    features: [
      'Enhanced strength and durability',
      'Superior smooth finish',
      'Excellent thermal properties',
      'Quick setting time'
    ],
    image: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?ixlib=rb-4.0.3'
  },
  {
    name: 'Ultra Regular Plaster',
    description: 'Standard gypsum plaster for general construction needs',
    features: [
      'Consistent quality',
      'Good workability',
      'Cost-effective solution',
      'Standard setting time'
    ],
    image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3'
  },
  {
    name: 'Ultra Exterior Plaster',
    description: 'Weather-resistant plaster for exterior applications',
    features: [
      'Weather-resistant properties',
      'UV protection',
      'Moisture resistant',
      'Long-lasting durability'
    ],
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3'
  }
];

export default function Products() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Product Range
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Discover our premium gypsum plaster solutions
          </motion.p>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}