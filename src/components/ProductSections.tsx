import React from "react";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

export function ProductSections() {
  // Updated settings for the carousels
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds (3000ms)
  };

  return (
    <div className="bg-white">
      {/* Solid Wood Floors Section - Uses Autoplay Carousel */}
      <section id="solid-wood-floors" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                Solid Wood Floors
              </h2>
              <p className="text-gray-700 mb-2 text-justify">
                Solid wood flooring is a classic and timeless choice for any home
                or business. It’s made from natural wood, which gives it a warm
                and inviting look and feel that’s hard to match with any other
                type of flooring.
              </p>
              <p className="text-gray-700 mb-6 text-justify">
                Solid wood flooring is o a durable and long-lasting option. Solid
                wood flooring comes in 18mm thickness. There are many
                different types of wood species, colors, and finishes to choose
                from, which means that you can customize your hardwood
                flooring to fit your unique style and preferences. Some popular
                wood species for hardwood flooring include oak, American
                walnut, Asian walnut, Merbau, teak among others.
              </p>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="space-y-2">
                  <li>Oak Natural</li>
                  <li>Oak European Grey</li>
                  <li>Oak Caramel</li>
                  <li>Oak Antique</li>
                  <li>Oak Almond</li>
                  <li>Merbau</li>
                </div>
                <div className="space-y-2">
                  <li>Kaya Kuku</li>
                  <li>Burma Teak</li>
                  <li>Bali Teak</li>
                  <li>Asian Walnut</li>
                  <li>American Walnut</li>
                  <li>African Teak</li>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 w-full px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Slider {...settings}>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/swf1.png"
                    alt="Solid wood floor view 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/swf2.png"
                    alt="Solid wood floor view 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Slider>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineered Wood Floors Section */}
      <section id="engineered-wood-floors" className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-1/2 w-full px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Slider {...settings}>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/ewf1.png"
                    alt="Engineered wood floor view 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/ewf2.png"
                    alt="Engineered wood floor view 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/ewf3.png"
                    alt="Engineered wood floor view 3"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/ewf4.png"
                    alt="Engineered wood floor view 4"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Slider>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                Engineered Wood Floors
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Engineered Wood Floors combine the natural beauty of wood with
                advanced technology for exceptional strength and durability.
                Unlike solid wood, engineered wood consists of multiple layers,
                making it more resistant to moisture and temperature changes.
                Available in a variety of wood species such as Oak, Walnut,
                Maple, and Cherry, these floors offer a stylish and sustainable
                option for modern living spaces, providing both luxury and
                practicality.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>100% natural solid wood</li>
                <li>Long-lasting durability</li>
                <li>Available in multiple wood species</li>
                <li>Creates luxurious appeal</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wooden Parquet Flooring Section */}
      <section id="wooden-parquet-flooring" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                Wooden Parquet Flooring
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Wooden parquet flooring offers intricate patterns and timeless elegance. Made from small blocks or strips of wood arranged geometrically, it adds a sophisticated touch to any interior. Parquet is known for its durability and unique aesthetic appeal.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Intricate geometric patterns</li>
                <li>Highly durable and long-lasting</li>
                <li>Adds unique character to rooms</li>
                <li>Available in various wood types</li>
              </ul>
            </motion.div>

            <motion.div
              className="lg:w-1/2 w-full px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Slider {...settings}>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/parquet1.png" // Placeholder image
                    alt="Wooden parquet floor view 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/parquet2.png" // Placeholder image
                    alt="Wooden parquet floor view 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Slider>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customized Wooden Flooring Section */}
      <section id="customized-wooden-flooring" className="py-16"> {/* Removed bg-gray-50 */}
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Swapped Image and Text */}
            <motion.div
              className="lg:w-1/2 w-full px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <Slider {...settings}>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/cwf1.png"
                    alt="Customized wooden floor view 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/cwf2.png"
                    alt="Customized wooden floor view 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/cwf3.png"
                    alt="Customized wooden floor view 3"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/cwf4.png"
                    alt="Customized wooden floor view 4"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Slider>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                Customized Wooden Flooring
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Solid Wood Flooring is a natural 100% wood product with each
                board coming from just one piece of solid wood which is cut down
                to the desired size. It creates a luxurious appeal to your home
                & is very strong & durable. The Solid Wood flooring has a longer
                life span than any other kind of flooring & is also available in
                various species of wood like Oak, Walnut, Maple, Cherry,
                Mahogany, Bamboo, etc.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>100% natural solid wood</li>
                <li>Long-lasting durability</li>
                <li>Available in multiple wood species</li>
                <li>Creates luxurious appeal</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deck Flooring Section */}
      <section id="deck-flooring" className="py-16 bg-gray-50"> {/* Added bg-gray-50 */}
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Swapped Text and Image */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                Deck Flooring
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Engineered Wood Floors combine the natural beauty of wood with
                advanced technology for exceptional strength and durability.
                Unlike solid wood, engineered wood consists of multiple layers,
                making it more resistant to moisture and temperature changes.
                Available in a variety of wood species such as Oak, Walnut,
                Maple, and Cherry, these floors offer a stylish and sustainable
                option for modern living spaces, providing both luxury and
                practicality.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>100% natural solid wood</li>
                <li>Long-lasting durability</li>
                <li>Available in multiple wood species</li>
                <li>Creates luxurious appeal</li>
              </ul>
            </motion.div>

            <motion.div
              className="lg:w-1/2 w-full px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <Slider {...settings}>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/df1.png"
                    alt="Deck floor view 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/df2.png"
                    alt="Deck floor view 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/df3.png"
                    alt="Deck floor view 3"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/df4.png"
                    alt="Deck floor view 4"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Slider>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Indoor and Outdoor Wall Cladding & Soffit Section */}
      <section id="wall-cladding" className="py-16"> {/* Removed bg-gray-50 */}
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Swapped Image and Text */}
            <motion.div
              className="lg:w-1/2 w-full px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <Slider {...settings}>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/wc1.png" alt="Wall cladding example 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/wc2.png" alt="Wall cladding example 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Slider>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                Indoor and Outdoor Wall Cladding & Soffit
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Transform your walls with our premium wall cladding solutions, perfect for both indoor and outdoor applications. Our wall cladding offers superior weather protection while adding architectural beauty to your space. The soffit panels provide essential ventilation and protection for your roof's underlying structure, available in various designs to complement your exterior aesthetics.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Weather-resistant materials</li>
                <li>Easy installation and maintenance</li>
                <li>Multiple design options</li>
                <li>Excellent thermal insulation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lumbers & Panels Section */}
      <section id="lumbers-panels" className="py-16 bg-gray-50"> {/* Added bg-gray-50 */}
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Swapped Text and Image */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                Lumbers & Panels
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Our comprehensive selection of lumber and panels meets diverse construction and woodworking needs. We offer high-quality timber in various grades and sizes, along with engineered panels that provide exceptional strength and stability. From structural lumber to decorative panels, our products are carefully selected to ensure superior performance and reliability.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Premium grade lumber</li>
                <li>Engineered wood panels</li>
                <li>Custom sizing available</li>
                <li>Sustainably sourced materials</li>
              </ul>
            </motion.div>

            <motion.div
              className="lg:w-1/2 w-full px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <Slider {...settings}>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/lp1.png" alt="Lumber and panels example 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/lp2.png" alt="Lumber and panels example 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Slider>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Laminate Wood Floors Section */}
      <section id="laminate-floors" className="py-16"> {/* Removed bg-gray-50 */}
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Swapped Image and Text */}
            <motion.div
              className="lg:w-1/2 w-full px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <Slider {...settings}>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/lf1.png" alt="Laminate floor example 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/lf2.png" alt="Laminate floor example 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Slider>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                Laminate Wood Floors
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Our laminate wood flooring combines the beauty of natural wood with enhanced durability and affordability. These floors feature a high-resolution photographic layer that perfectly replicates wood grain patterns, protected by a tough wear layer. Perfect for high-traffic areas, our laminate floors are resistant to scratches, stains, and fading.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Scratch and stain resistant</li>
                <li>Easy installation system</li>
                <li>Wide range of wood designs</li>
                <li>Budget-friendly option</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SPC Wood Floors Section */}
      <section id="spc-floors" className="py-16 bg-gray-50"> {/* Added bg-gray-50 */}
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Swapped Text and Image */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                SPC Wood Floors
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Stone Plastic Composite (SPC) flooring represents the latest innovation in resilient flooring technology. These floors combine the durability of stone-based materials with the warmth and aesthetics of wood. Completely waterproof and highly stable, SPC floors are perfect for any room, including bathrooms and basements.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>100% waterproof</li>
                <li>Superior dimensional stability</li>
                <li>Excellent sound insulation</li>
                <li>Suitable for underfloor heating</li>
              </ul>
            </motion.div>

            <motion.div
              className="lg:w-1/2 w-full px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }} // Adjusted delay
              viewport={{ once: true, amount: 0.3 }}
            >
              <Slider {...settings}>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/spc1.png" alt="SPC floor example 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/spc2.png" alt="SPC floor example 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Slider>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
