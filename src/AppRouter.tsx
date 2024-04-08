// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Status from './pages/Status';
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
      <Routes>
        {/* Routes wrapped with Container */}
        <Route path="/" element={<Container><Index /></Container>} />
        <Route path="/Bio" element={<Container><Bio /></Container>} />
        <Route path="/DistrictOfficeArtDisplay" element={<Container><DistrictOfficeArtDisplay /></Container>} />
        <Route path="/DistrictK12ArtShow" element={<Container><DistrictK12ArtShow /></Container>} />
        <Route path="/EmgeSchoolArtShow" element={<Container><EmgeSchoolArtShow /></Container>} />
        <Route path="/PictureTheMusic" element={<Container><PictureTheMusic /></Container>} />
        <Route path="/ParentVolunteers" element={<Container><ParentVolunteers /></Container>} />
        <Route path="/ArtLinks" element={<Container><ArtLinks /></Container>} />

        {/* Route without Container */}
        <Route path="/Status" element={<Status />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
