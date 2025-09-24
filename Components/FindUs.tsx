"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function FindUsSection() {
  const locations = [
    {
      title: "Head Office",
      address: "Chabahil 7, Kathmandu, Nepal",
      phone: "+01-5921796",
      email: "fairmonteducation4@gmail.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.979565362191!2d85.3483194!3d27.7179172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x623d11f5941c021f%3A0x25a17c72013bd1e3!2sFairmont%20Education%20Consultancy!5e0!3m2!1sen!2snp!4v1758692292555!5m2!1sen!2snp",
      directionsUrl: "https://maps.app.goo.gl/b2VdrBw1ehS278tC7",
      hours: {
        weekdays: "Sunday - Friday: 6:00 AM - 6:00 PM",
        saturday: "Saturday: 10:00 AM - 4:00 PM",
        sunday: "Closed",
      },
    },
  ];

  return (
    <section className="bg-[#1E165F] py-16 px-4" aria-labelledby="find-us-heading">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            id="find-us-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Find Us
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Visit our offices for personalized consultation and guidance on your
            study abroad journey.
          </p>
        </motion.div>

        <div className="space-y-16">
          {locations.map((location, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-xl overflow-hidden shadow-lg"
                aria-label={`${location.title} location on Google Maps`}
              >
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title={`Google Maps location of ${location.title}`}
                />
              </motion.div>

              {/* Location Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {location.title}
                  </h3>
                  <div className="space-y-6">
                    {/* Address */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-[#AE1418] rounded-full p-3 flex-shrink-0">
                        <MapPin
                          className="w-5 h-5 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          Address
                        </h4>
                        <address className="text-white/80 not-italic">
                          Fairmont Education Consultancy
                          <br />
                          {location.address}
                        </address>
                      </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-[#AE1418] rounded-full p-3 flex-shrink-0">
                        <Phone
                          className="w-5 h-5 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          Phone
                        </h4>
                        <a
                          href={`tel:${location.phone.replace(/\D/g, "")}`}
                          className="text-white/80 hover:text-white font-medium transition-colors"
                          aria-label={`Call ${location.title} at ${location.phone}`}
                        >
                          {location.phone}
                        </a>
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-[#AE1418] rounded-full p-3 flex-shrink-0">
                        <Mail
                          className="w-5 h-5 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          Email
                        </h4>
                        <a
                          href={`mailto:${location.email}`}
                          className="text-white/80 hover:text-white font-medium transition-colors"
                          aria-label={`Email ${location.title} at ${location.email}`}
                        >
                          {location.email}
                        </a>
                      </div>
                    </motion.div>

                    {/* Office Hours */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-[#AE1418] rounded-full p-3 flex-shrink-0">
                        <Clock
                          className="w-5 h-5 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          Office Hours
                        </h4>
                        <div className="text-white/80">
                          <p>{location.hours.weekdays}</p>
                          <p>{location.hours.saturday}</p>
                          <p>{location.hours.sunday}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Directions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-[#ae1419df] rounded-xl p-6"
                >
                  <h4 className="text-lg font-bold text-white mb-3">
                    Getting Here
                  </h4>
                  <p className="text-white/80 mb-4">
                    Our {location.title.toLowerCase()} is conveniently located
                    and easily accessible by public transportation and private
                    vehicles.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#1E165F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ae1419bc] transition-colors"
                    aria-label={`Get directions to ${location.title} on Google Maps`}
                  >
                    <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                    Get Directions
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
