// src/data/productData.js (example data structure)

export const products = [
    {
      id: 'solid-wood',
      title: 'Solid Wood Floors',
      descriptionParagraphs: [
        'Solid Wood Flooring is a natural 100% wood product with each board coming from just one piece of solid wood which is cut down to the desired size.',
        'It creates a luxurious appeal to your home & is very strong & durable. The Solid Wood flooring has a longer life span than any other kind of flooring & is also available in various species of wood like Oak, Walnut, Maple, Cherry, Mahogany, Bamboo, etc.',
      ],
      features: [
        '100% natural solid wood',
        'Long-lasting durability',
        'Available in multiple wood species',
        'Creates luxurious appeal',
      ],
      images: [
        { src: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-4.0.3', alt: 'Elegant solid wood flooring in a room' },
        { src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3', alt: 'Close-up of solid wood floor texture' }
      ],
      imagePosition: 'right', // Image on the right
      aspectRatio: 'aspect-square',
    },
    {
      id: 'engineered-wood',
      title: 'Engineered Wood Floors',
      descriptionParagraphs: [
        'Engineered Wood Floors are the classic among floor-covering being both timeless and modern. Its material quality represents a natural and pleasant living experience.',
        'Expansion & contraction is bare minimum compared to solid wood flooring in high humidity climates thus make it a best choice.',
        'We import some of the best wooden flooring from the European markets such as Belarus, Italy, Poland & Belgium.',
      ],
      features: [
        'Premium European quality',
        'Minimal expansion in humidity',
        'Perfect for modern interiors',
        'Wide range of finishes',
      ],
      images: [
        { src: 'https://images.unsplash.com/photo-1594940210012-a73ab1bc0c4b?ixlib=rb-4.0.3', alt: 'Modern living room with engineered wood flooring' }
        // Add more images here if you want a carousel for this section
      ],
      imagePosition: 'left', // Image on the left
      aspectRatio: 'aspect-[4/3]',
    },
    {
      id: 'customized-wood',
      title: 'Customized Wooden Flooring',
      descriptionParagraphs: [
        'Our customized wooden flooring solutions allow you to create unique patterns and designs that perfectly match your interior vision.',
        'From intricate inlays to custom color treatments, we can help you achieve the exact look you desire.',
      ],
      features: [
        'Custom patterns and designs',
        'Unique color treatments',
        'Professional installation',
        'Personalized consultation',
      ],
      images: [
        { src: 'https://images.unsplash.com/photo-1617391258031-9828c06c8f28?ixlib=rb-4.0.3', alt: 'Intricate custom wood floor pattern' },
        { src: 'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3', alt: 'Herringbone custom wood flooring' },
      ],
      imagePosition: 'right', // Image on the right
      aspectRatio: 'aspect-square',
    },
    {
      id: 'deck-flooring',
      title: 'Deck Flooring',
      descriptionParagraphs: [
        'Transform your outdoor space with our premium deck flooring solutions.',
        'Our deck flooring is specially treated to withstand various weather conditions while maintaining its beautiful appearance throughout the years.',
      ],
      features: [
        'Weather-resistant treatment',
        'Low maintenance',
        'Multiple design options',
        'Professional outdoor installation',
      ],
      images: [
        { src: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3', alt: 'Beautiful outdoor deck with wooden flooring' }
        // Add more images here if needed
      ],
      imagePosition: 'left', // Image on the left
      aspectRatio: 'aspect-video',
    },
    // Add more product objects here...
  ];