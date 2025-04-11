import React from 'react';
import { Contact } from '../components/Contact';
import {ProjectHero} from '../components/ProjectHero';
import ProjectList from '../components/ProjectList';
import { PureScroll } from '../components/PureScroll';

const Projects = () => {
  const projects = [
    {
      title: 'Hospitality Project in Mumbai',
      subtitle: 'SPC Flooring - 35000 sqft',
      images: [
        '/p1.png',
        '/p2.png',
        '/p3.png',
        '/p4.png',
      ],
      isDark: false,
    },
    {
      title: 'Hospitality Project in Udaipur',
      subtitle: 'Engineered Flooring with Brass Inaly',
      images: [
        '/p5.png',
        '/p6.png',
      ],
      isDark: true,
    },
    {
      title: 'Hospitality Project in Mumbai',
      subtitle: 'Engineered Wooden Tile with Brass Inlay - 1mtr x 1mtr Wooden Tile',
      images: [
        '/p8.png',
        '/p9.png',
      ],
      isDark: false,
    },
    {
      title: 'Hospitality Project in Dehradun',
      subtitle: 'Engineered Wooden Tile',
      images: [
        '/p11.png',
        '/p12.png',
      ],
      isDark: true,
    },
    {
      title: 'Hospitality Project in Dehradun',
      subtitle: 'Engineered Chevron Walnut',
      images: [
        '/p13.png',
      ],
      isDark: false,
    },
    {
      title: 'Hospitality Project at Mumbai',
      subtitle: 'Engineered Flooring',
      images: [
        '/p15.png',
        '/p16.png',
      ],
      isDark: true,
    },
    {
      title: 'Private Residence in Mumbai',
      subtitle: 'Engineered Flooring',
      images: [
        '/p17.png',
        '/p18.png',
        '/p19.png',
        '/p20.png',
        '/p21.png',
        '/p22.png',
      ],
      isDark: false,
    },
    {
      title: 'Commercial Project in Mumbai',
      subtitle: 'Laminate Flooring',
      images: [
        '/p23.png',
        '/p24.png',
        '/p25.png',
        '/p26.png',
      ],
      isDark: true,
    },
    {
      title: 'Private Residence in Mumbai',
      subtitle: 'Bambusa CTECH Soffit',
      images: [
        '/p27.png',
        '/p28.png',
      ],
      isDark: false,
    },
    {
      title: 'Madhwa Jetty Alibaug',
      subtitle: 'Strandwoven Bamboo Deck Flooring',
      images: [
        '/p29.png',
        '/p30.png',
      ],
      isDark: true,
    },
    {
      title: 'Hospitality Project in Mumbai',
      subtitle: 'Strandwoven Bamboo Deck Flooring',
      images: [
        '/p31.png',
        '/p32.png',
      ],
      isDark: false,
    },
    {
      title: 'Madhwa Jetty Alibaug',
      subtitle: 'Strandwoven Bamboo Deck Flooring',
      images: [
        '/p33.png',
        '/p34.png',
      ],
      isDark: true,
    },
  ];

  return (
    <div className="w-full">
      <ProjectHero />
      <ProjectList projects={projects} />
      <PureScroll />
      <Contact />
    </div>
  );
};

export default Projects;
