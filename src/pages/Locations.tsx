import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const locations = [
  {
    city: 'Mangalore',
    type: 'Dealer Office',
    address: '5-11/3 (2), Office No 2, Ground Floor, Ullala Jaina Basadi Building, Basthipadpu, Ullal 575020',
    phone: '+91 91691 69132',
    email: 'mangalore@whytalgypsumplaster.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
  },
  {
    city: 'Cochin',
    type: 'Head Office',
    address: '46/2861 A, 1st Floor, Madathiparambil Building, Puthiya Road, Vennala, Cochin, Kerala - 682028',
    phone: '+91 91691 69132',
    email: 'info@whytalgypsumplaster.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
  }
];

const distributors = [
  'Karnataka', 'Kerala', 'Tamil Nadu', 'Andhra Pradesh', 
  'Telangana', 'Maharashtra', 'Gujarat', 'Delhi NCR'
];

export default function Locations() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Locations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Find Whytal Gypsum Plaster near you
          </motion.p>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{location.city}</h2>
                  <p className="text-blue-600">{location.type}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">{location.address}</p>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{location.phone}</span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{location.email}</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{location.hours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Distribution Network */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Distribution Network</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {distributors.map((state, index) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg text-center"
              >
                <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-700">{state}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}