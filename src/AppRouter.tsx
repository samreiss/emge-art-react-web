// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Index from './pages/Index';
import Bio from './pages/Bio';
import DistrictOfficeArtDisplay from './pages/DistrictOfficeArtDisplay';
import DistrictK12ArtShow from './pages/DistrictK12ArtShow';
import EmgeSchoolArtShow from './pages/EmgeSchoolArtShow';
import PictureTheMusic from './pages/PictureTheMusic';
import ParentVolunteers from './pages/ParentVolunteers';
import ArtLinks from './pages/ArtLinks';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Bio" element={<Bio />} />
          <Route path="/DistrictOfficeArtDisplay" element={<DistrictOfficeArtDisplay />} />
          <Route path="/DistrictK12ArtShow" element={<DistrictK12ArtShow />} />
          <Route path="/EmgeSchoolArtShow" element={<EmgeSchoolArtShow />} />
          <Route path="/PictureTheMusic" element={<PictureTheMusic />} />
          <Route path="/ParentVolunteers" element={<ParentVolunteers />} />
          <Route path="/ArtLinks" element={<ArtLinks />} />
          {/* Add more routes here if needed */}
        </Routes>
      </Container>
    </Router>
  );
};

export default AppRouter;
