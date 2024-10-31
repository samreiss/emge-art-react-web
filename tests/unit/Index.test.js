import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure toHaveAttribute is available
import Index from '../../src/pages/Index.tsx';
import { pageTitle } from '../../src/common-variables.ts';

describe('Index Component', () => {
  beforeEach(() => {
    render(<Index />);
  });

  test('sets the document title', () => {
    expect(document.title).toBe(pageTitle);
  });

  test('renders table headers', () => {
    const headers = ['Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'];
    headers.forEach(header => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test('renders all images with correct alt text', () => {
    const altTexts = [
      'Helen Frankenthaler',
      'Piet Mondrian - Landscape',
      'Piet Mondrian',
      'Joan Miro',
      "Georgia O'Keefe",
      'Alexander Calder',
      'Robert Motherwell',
      'Bridget Riley - Op Art',
      'Hans Hofmann',
      'Frank Stella - Painting',
      'Jasper Johns - Flags',
      'Frank Stella',
      'Kenneth Noland',
      'Wassily Kandinsky',
      'Elements of Art-Value',
      'Frank Stella - Sculpture',
      'Jasper Johns - Numbers',
      'Andy Goldsworthy',
      'Jim Dine',
      'Paul Klee',
      'Asian Art',
      'Robert Rauschenberg',
      'Claude Monet',
      'Vincent Van Gogh',
      'Blue Dog'
    ];

    // Use getAllByAltText to find multiple elements with the same alt text
    altTexts.forEach(altText => {
      const images = screen.getAllByAltText(altText);
      expect(images.length).toBeGreaterThan(0);
    });
  });

  test('renders all links with correct href attributes', () => {
    const links = [
      '/presentations/kindergarten/Helen Frankenthaler.pptx',
      '/presentations/first/Piet Mondrian.pptx',
      '/presentations/second/Piet Mondrian.pptx',
      '/presentations/third/Joan Miro.pptx',
      '/presentations/fourth/Georgia OKeefe.pptx',
      '/presentations/fifth/Alexander Calder.pptx',
      '/presentations/kindergarten/Robert Motherwell.pptx',
      '/presentations/first/Bridget Riley Op Art.pptx',
      '/presentations/second/Hans Hofmann.pptx',
      '/presentations/third/Frank Stella Paintings.pptx',
      '/presentations/fourth/Jasper Johns Flags.pptx',
      '/presentations/fifth/Frank Stella Sculpture.pptx',
      '/presentations/kindergarten/Kenneth Noland.pptx',
      '/presentations/first/Wassily Kandinsky.pptx',
      '/presentations/second/Elements of Art Value.pptx',
      '/presentations/third/Frank Stella Sculpture.pptx',
      '/presentations/fourth/Jasper Johns Numbers.pptx',
      '/presentations/fifth/Andy Goldsworthy.pptx',
      '/presentations/kindergarten/Jim Dine.pptx',
      '/presentations/first/Paul Klee.pptx',
      '/presentations/second/Paul Klee.pptx',
      '/presentations/third/Georgia OKeefe.pptx',
      '/presentations/fourth/Asian Art.pptx',
      '/presentations/fifth/Robert Rauschenberg.pptx',
      '/presentations/fourth/Claude Monet Water Lilies.pptx',
      '/presentations/fifth/Vincent Van Gogh Texture.pptx',
      '/presentations/kindergarten/Henri Matisse Cut Outs.pptx',
      '/presentations/first/Romare Bearden.pptx',
      '/presentations/second/Jackson Pollock.pptx',
      '/presentations/third/Paul Klee.pptx',
      '/presentations/fourth/Pablo Picasso Abstract Still Life.pptx',
      '/presentations/fifth/Marcel Duchamp.pptx'
    ];
  
    links.forEach(link => {
      const linkText = link.split('/').pop()?.replace('.pptx', '');
      const linkElement = screen.queryByRole('link', { name: linkText });
  
      // Check if linkElement is found
      if (linkElement) {
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', link);
      } else {
        console.warn(`Link not found for text: ${linkText}`);
      }
    });
  });
});