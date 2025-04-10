import React from 'react';
import {Contact} from '../components/Contact';
const Projects = () => {
  const projects = [{
    title: 'Hospitality Project in Mumbai',
    subtitle: 'SPC Flooring - 35000 sqft',
    images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace', 'https://images.unsplash.com/photo-1618219944342-824e40a13285'],
    isDark: false
  }, {
    title: 'Hospitality Project in Mumbai',
    subtitle: 'Engineered Flooring with Brass Inaly - 35000 sqft',
    images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9'],
    isDark: true
  }];
  return <div className="w-full">
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-[#e5e2e0] mb-8">
              Fabulous wood floor
              <br />
              and fabulous homes
            </h1>
            <div className="flex gap-4 justify-center">
              <button className="bg-[#C8A87D] text-[#e5e2e0] px-8 py-3 hover:bg-[#B69A70] transition-colors">
                Get your free sample
              </button>
              <button className="bg-[#e5e2e0] text-black px-8 py-3 hover:bg-gray-100 transition-colors">
                Talk to an expert
              </button>
            </div>
          </div>
        </div>
      </section>
      {projects.map((project, index) => <section key={index} className={`py-24 ${project.isDark ? 'bg-gray-900 text-[#e5e2e0]' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-4">
              {project.title}
            </h2>
            <p className="text-center mb-16 text-gray-500">
              {project.subtitle}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, imgIndex) => <img key={imgIndex} src={image} alt={`Project view ${imgIndex + 1}`} className="w-full h-[300px] object-cover rounded-lg" />)}
            </div>
          </div>
        </section>)}
        <Contact />
    </div>;
};
export default Projects;
