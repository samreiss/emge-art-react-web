import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtLinks from '../../src/pages/ArtLinks.tsx';
import { pageTitleWithSeparator } from '../../src/common-variables.ts';

describe('ArtLinks', () => {
    it('renders without crashing', () => {
        render(<ArtLinks />);
        const images = screen.getAllByAltText('Art Links');
        expect(images.length).toBeGreaterThan(0); // Ensures at least one image with alt "Art Links" is found
    });

    it('sets the document title correctly', () => {
        render(<ArtLinks />);
        expect(document.title).toBe(pageTitleWithSeparator + 'Art Links');
    });

    it('renders all the links correctly', () => {
        render(<ArtLinks />);
        const links = [
            { href: 'http://www.crayola.com', text: 'Crayola - www.crayola.com' },
            { href: 'http://www.ericcarle.com', text: 'Eric Carle - www.ericcarle.com' },
            { href: 'http://www.haringkids.com', text: 'Keith Haring for Kids - www.haringkids.com' },
            { href: 'http://www.kidzart.org', text: 'Kidzart - www.kidzart.org' },
            { href: 'http://www.draw3d.com', text: "Mark Kistler's Imagination Station - www.draw3d.com" },
            { href: 'https://www.moma.org/visit/families/', text: 'Museum of Modern Art (families)' },
            { href: 'http://www.nga.gov/kids/zone', text: 'National Gallery of Art (kids zone) - www.nga.gov/kids/zone' },
            { href: 'http://www.si.edu', text: 'Smithsonian - www.si.edu' },
            { href: 'http://www.slam.org', text: 'St. Louis Art Museum - www.slam.org' },
        ];

        links.forEach(link => {
            const anchorElement = screen.getByText(link.text);
            expect(anchorElement).toBeInTheDocument();
            expect(anchorElement).toHaveAttribute('href', link.href);
        });
    });
});