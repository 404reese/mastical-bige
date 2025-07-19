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
              
              <button 
                onClick={() => window.location.href = '/products/solid-wood-floors'}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-6"
              >
                See More
              </button>
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
                    src="/p1.png"
                    alt="Solid wood floor view 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/p2.png"
                    alt="Solid wood floor view 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/p3.png"
                    alt="Solid wood floor view 3"
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
                    src="/engg/engg1.jpg"
                    alt="Engineered wood floor view 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/engg/engg2.jpg"
                    alt="Engineered wood floor view 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/engg/engg3.jpg"
                    alt="Engineered wood floor view 3"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/engg/engg4.jpg"
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
              
              <button 
                onClick={() => window.location.href = '/products/engineered-wood-floors'}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-6"
              >
                See More
              </button>
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
              
              <button 
                onClick={() => window.location.href = '/parquet-flooring'}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-6"
              >
                See More
              </button>
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
                    src="/parquet/parp-1.png"
                    alt="Wooden parquet floor view 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/parquet/parp-2.png"
                    alt="Wooden parquet floor view 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/products/parquet1.png"
                    alt="Parquet pattern example"
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
      <section id="indoor-outdoor-wall-cladding" className="py-16"> {/* Removed bg-gray-50 */}
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
                  <img src="/Wall Clading/dassoCTECH Cladding/20190926100942908.jpg" alt="Wall cladding example 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/Wall Clading/dassoCTECH Cladding/1567607955174803.png" alt="Wall cladding example 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/Wall Clading/dassoCTECH Cladding/1567607951173044.png" alt="Wall cladding example 3" className="w-full h-full object-cover" loading="lazy" />
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
              
              <button 
                onClick={() => window.location.href = '/wall-cladding-soffit'}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-6"
              >
                See More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lumbers & Panels Section */}
      <section id="lumber-panels" className="py-16 bg-gray-50"> {/* Added bg-gray-50 */}
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
              
              <button 
                onClick={() => window.location.href = '/lumber-panels'}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-6"
              >
                See More
              </button>
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
                  <img src="/Lumber Panels/dassoCTECH Lumber & Panel/1582766898125843.jpeg" alt="Lumber and panels example 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/Lumber Panels/dassoCTECH Lumber & Panel/1582766899199977.jpeg" alt="Lumber and panels example 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/Lumber Panels/dassoCTECH Lumber & Panel/1582766899537701.png" alt="Lumber and panels example 3" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Slider>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Laminate Wood Floors Section */}
      <section id="laminated-wood-floors" className="py-16"> {/* Removed bg-gray-50 */}
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
                  <img src="/Laminate/MVR_0860 (Elite Atlanta Walnut 1801-2 ).JPG" alt="Laminate floor example 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/Laminate/Elite Herringbone Collection/Copy of MVR_0699 (Color  328 )-Mount Everest.JPG" alt="Laminate floor example 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/Laminate/Enchant Premium Collection/Copy of MVR_1337 ( Caramel Oak ).JPG" alt="Laminate floor example 3" className="w-full h-full object-cover" loading="lazy" />
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
              
              <button 
                onClick={() => window.location.href = '/laminate-flooring'}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-6"
              >
                See More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SPC Wood Floors Section */}
      <section id="spc-wood-floors" className="py-16 bg-gray-50"> {/* Added bg-gray-50 */}
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
              
              <button 
                onClick={() => window.location.href = '/spc-flooring'}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-6"
              >
                See More
              </button>
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
                  <img src="/SPC/SPC Herringbone/3395-H1111.jpg" alt="SPC floor example 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/SPC/SPC Plank/3383_P2299.jpg" alt="SPC floor example 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img src="/SPC/SPC Tile/3178_T4411.jpg" alt="SPC floor example 3" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Slider>
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
                Our premium deck flooring combines durability and style for outdoor living spaces. 
                Made from high-quality composite materials and bamboo, these decking solutions 
                offer exceptional weather resistance, UV protection, and low maintenance. 
                Perfect for patios, balconies, poolside areas, and outdoor entertainment spaces, 
                providing long-lasting beauty and performance.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Weather-resistant and UV protected</li>
                <li>Low maintenance requirements</li>
                <li>Slip-resistant surface</li>
                <li>Eco-friendly materials</li>
              </ul>
              
              <button 
                onClick={() => window.location.href = '/deck-flooring'}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-6"
              >
                See More
              </button>
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
                    src="/deck.jpg"
                    alt="Deck floor view 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/deck/SYLVANIX-DECKING/elite-collection/summit-grey.jpg"
                    alt="Deck floor view 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/deck/EGO Enrich Plank Decking/Pool-Side.jpg"
                    alt="Deck floor view 3"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="/deck/dassoXTR DECKING/dassoXTR DECKING (1).jpg"
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
    </div>
  );
}
