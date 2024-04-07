import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Link to="/" className="header">
          <img src="logo.png" alt="Emge Art, Instructed By: Mrs. Nicole Reiss" />
        </Link>
      </div>
      <nav style={{ textAlign: 'right', display: 'flex', alignItems: 'flex-start' }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, lineHeight: '0.95' }}>
          <li><Link to="/" className="header">Home</Link></li>
          <li><Link to="/Bio" className="header">Meet Mrs. Nicole Reiss</Link></li>
          <li><Link to="/DistrictOfficeArtDisplay" className="header">District Office Art Display</Link></li>
          <li><Link to="/DistrictK12ArtShow" className="header">District K-12 Art Show</Link></li>
          <li><Link to="/EmgeSchoolArtShow" className="header">Emge School Art Show</Link></li>
          <li><Link to="/PictureTheMusic" className="header">Picture the Music</Link></li>
          <li><Link to="/ParentVolunteers" className="header">Parent Volunteers</Link></li>
          <li><Link to="/ArtLinks" className="header">Art Links</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
