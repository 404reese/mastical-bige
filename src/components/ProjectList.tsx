import React from 'react';

interface Project {
  title: string;
  subtitle: string;
  images: string[];
  isDark: boolean;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <>
      {projects.map((project, index) => (
        <section
          key={index}
          className={`py-24 ${project.isDark ? 'bg-gray-900 text-[#e5e2e0]' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-4">
              {project.title}
            </h2>
            <p className="text-center mb-16 text-gray-500">
              {project.subtitle}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Project view ${imgIndex + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProjectList;
