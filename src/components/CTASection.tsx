import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8 text-hanken">Ready to Transform Your Space?</h2>
        <Link
          to="/contact"
          className="text-white font-inria text-lg"
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
