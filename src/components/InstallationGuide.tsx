import React from 'react';

export const InstallationGuide = () => (
  <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Easy Installation Guide</h2>
    <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
      Installing your new product is straightforward. Follow these simple steps for a perfect setup. For detailed instructions specific to your product model, please refer to the manual included in the packaging or download it below.
    </p>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Step 1 */}
      <div className="p-8 bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl">
        <img src="/p1.png" alt="Preparation Tools" className="w-full h-48 object-cover rounded-md mb-6"/>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Step 1: Preparation</h3>
        <p className="text-gray-600 leading-relaxed">
          Before you begin, gather all necessary tools and materials listed in your product manual. Ensure the installation surface is clean, dry, level, and free of debris. A clean workspace makes the process smoother and safer. Double-check measurements if required.
        </p>
      </div>
      {/* Step 2 */}
      <div className="p-8 bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl">
        <img src="/p2.png" alt="Product Installation" className="w-full h-48 object-cover rounded-md mb-6"/>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Step 2: Installation</h3>
        <p className="text-gray-600 leading-relaxed">
          Carefully follow the step-by-step instructions provided. If adhesive is required, apply it evenly as directed. Position the product accurately and press firmly to ensure proper bonding. For mechanical fixings, use the correct hardware and tighten securely without over-torquing.
        </p>
      </div>
      {/* Step 3 */}
      <div className="p-8 bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl">
        <img src="/p3.png" alt="Finishing Touches" className="w-full h-48 object-cover rounded-md mb-6"/>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Step 3: Finishing Touches</h3>
        <p className="text-gray-600 leading-relaxed">
          Once the main installation is complete, clean up any excess adhesive or debris immediately using recommended cleaning agents. Perform any final checks as outlined in the manual. Allow the installation to cure or set for the specified time before subjecting it to regular use.
        </p>
      </div>
    </div>
    <div className="text-center mt-12">
      <a
        href="#" // Replace with actual link to PDF guide
        className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Download Full Installation Guide (PDF)
      </a>
    </div>
  </section>
);
