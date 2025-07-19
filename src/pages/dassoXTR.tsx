import React from "react";
import { motion } from "framer-motion";

export function DassoXTR() {
  // Gallery images for dassoXTR
  const galleryImages = [
    "/deck/dassoXTR DECKING/dassoXTR DECKING (1).jpg",
    "/deck/dassoXTR DECKING/dassoXTR DECKING (2).jpg",
    "/deck/dassoXTR DECKING/dassoXTR DECKING (3).jpg",
    "/deck/dassoXTR DECKING/dassoXTR DECKING (4).jpg",
    "/deck/dassoXTR DECKING/dassoXTR DECKING (5).jpg",
    "/deck/dassoXTR DECKING/dassoXTR DECKING (6).jpg",
    "/deck/dassoXTR DECKING/dassoXTR DECKING (7).png",
    "/deck/dassoXTR DECKING/dassoXTR DECKING (8).png",
    "/deck/dassoXTR DECKING/dassoXTR DECKING (9).png",
    "/deck/dassoXTR DECKING/dassoXTR DECKING (10).png",
  ];

  // Features data
  const features = [
    "Superior Durability",
    "Weather Resistant",
    "Low Maintenance",
    "Eco-Friendly",
    "Easy Installation",
    "25-Year Warranty",
  ];

  // Specifications data
  const specifications = [
    { name: "Material", value: "Fused Bamboo" },
    { name: "Dimensions", value: "5.6' x 3.6' x 0.7' (typical)" },
    { name: "Weight", value: "3.6 lbs/ft²" },
    { name: "Color Options", value: "Multiple colors available" },
    { name: "Installation", value: "Professional installation recommended" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Image Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            dassoXTR Decking Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-80 rounded-lg overflow-hidden bg-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`dassoXTR Decking ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <button
            onClick={() => (window.location.href = "/contact-us")}
            className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default DassoXTR;
