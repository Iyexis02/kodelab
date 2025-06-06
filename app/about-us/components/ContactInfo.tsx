import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/app/components/ui/Card';

const ContactInfo = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project or have questions about our services? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <MapPin className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Location</h3>
              <p className="text-gray-600">
                Zagreb, Croatia
                <br />
                Central Europe
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Mail className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@kodelab.com" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                  info@kodelab.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Phone className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+385123456789" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                  +385 12 345 6789
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
