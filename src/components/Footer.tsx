import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Whytal</span>
            </div>
            <p className="text-gray-400">
              Leading manufacturer of premium gypsum plaster solutions for modern construction needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+91 91691 69132</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@whytalgypsumplaster.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Head Office</h3>
            <div className="flex space-x-2">
              <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <p>46/2861 A, 1st Floor, Madathiparambil Building, Puthiya Road, Vennala, Cochin, Kerala - 682028</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Whytal Gypsum Plaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}