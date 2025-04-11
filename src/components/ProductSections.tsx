import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          {/* Moved title outside the flex container */}

          {/* Added items-center for vertical alignment */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Content Area */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                Solid Wood Floors
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
            </div>

            {/* Image/Slider Area */}
            <div className="lg:w-1/2 w-full px-4 lg:px-0">
              {" "}
              {/* Added padding control for mobile */}
              <Slider {...settings}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    // Removed aspect-square, Added fixed height h-[400px]
                    // Consider responsive height: e.g., h-[300px] md:h-[400px]
                    className="h-[400px] rounded-lg overflow-hidden bg-gray-200" // Added bg-gray-200 for loading state
                  >
                    <img
                      src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-4.0.3"
                      alt={`Solid wood floor example ${i}`}
                      // Image fills the container (w-full h-full)
                      // object-cover scales image to cover container, cropping if needed
                      className="w-full h-full object-cover"
                      loading="lazy" // Added lazy loading
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Engineered Wood Floors Section - Currently NOT a carousel */}
      <section id="engineered-wood-floors" className="py-16">
        <div className="container mx-auto">
          {/* Moved title outside the flex container */}

          {/* Added items-center for vertical alignment */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image/Slider Area */}
            <div className="lg:w-1/2 w-full px-4 lg:px-0">
              {" "}
              {/* Added padding control for mobile */}
              <Slider {...settings}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    // Removed aspect-square, Added fixed height h-[400px]
                    // Consider responsive height: e.g., h-[300px] md:h-[400px]
                    className="h-[400px] rounded-lg overflow-hidden bg-gray-200" // Added bg-gray-200 for loading state
                  >
                    <img
                      src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-4.0.3"
                      alt={`Solid wood floor example ${i}`}
                      // Image fills the container (w-full h-full)
                      // object-cover scales image to cover container, cropping if needed
                      className="w-full h-full object-cover"
                      loading="lazy" // Added lazy loading
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Text Content Area */}
            <div className="lg:w-1/2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Customized Wooden Flooring Section - Uses Autoplay Carousel */}
      <section id="customized-wooden-flooring" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          {/* Moved title outside the flex container */}

          {/* Added items-center for vertical alignment */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Content Area */}
            <div className="lg:w-1/2">
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
            </div>

            {/* Image/Slider Area */}
            <div className="lg:w-1/2 w-full px-4 lg:px-0">
              {" "}
              {/* Added padding control for mobile */}
              <Slider {...settings}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    // Removed aspect-square, Added fixed height h-[400px]
                    // Consider responsive height: e.g., h-[300px] md:h-[400px]
                    className="h-[400px] rounded-lg overflow-hidden bg-gray-200" // Added bg-gray-200 for loading state
                  >
                    <img
                      src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-4.0.3"
                      alt={`Solid wood floor example ${i}`}
                      // Image fills the container (w-full h-full)
                      // object-cover scales image to cover container, cropping if needed
                      className="w-full h-full object-cover"
                      loading="lazy" // Added lazy loading
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Deck Flooring Section */}
      <section id="deck-flooring" className="py-16">
        <div className="container mx-auto">
          {/* Moved title outside the flex container */}

          {/* Added items-center for vertical alignment */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image/Slider Area */}
            <div className="lg:w-1/2 w-full px-4 lg:px-0">
              {" "}
              {/* Added padding control for mobile */}
              <Slider {...settings}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    // Removed aspect-square, Added fixed height h-[400px]
                    // Consider responsive height: e.g., h-[300px] md:h-[400px]
                    className="h-[400px] rounded-lg overflow-hidden bg-gray-200" // Added bg-gray-200 for loading state
                  >
                    <img
                      src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-4.0.3"
                      alt={`Solid wood floor example ${i}`}
                      // Image fills the container (w-full h-full)
                      // object-cover scales image to cover container, cropping if needed
                      className="w-full h-full object-cover"
                      loading="lazy" // Added lazy loading
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Text Content Area */}
            <div className="lg:w-1/2">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
