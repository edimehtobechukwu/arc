import React, { useState } from 'react';
import { ArcHome } from './components/arc/ArcHome';
import { ArcProjects } from './components/arc/ArcProjects';
import { ArcProjectDetail } from './components/arc/ArcProjectDetail';
import { ArcAbout } from './components/arc/ArcAbout';
import { ArcContact } from './components/arc/ArcContact';
import { ArcResearch } from './components/arc/ArcResearch';


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);

  const handleNavigate = (page: string, id?: number) => {
    if (id) {
      setSelectedProjectId(id);
    }
    // Scroll to top on navigation
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <ArcHome onNavigate={handleNavigate} />;
      case 'projects':
        return <ArcProjects onNavigate={handleNavigate} />;
      case 'project-detail':
        return <ArcProjectDetail onNavigate={handleNavigate} projectId={selectedProjectId} />;
      case 'about':
        return <ArcAbout onNavigate={handleNavigate} />;
      case 'contact':
        return <ArcContact onNavigate={handleNavigate} />;
      case 'research':
        return <ArcResearch onNavigate={handleNavigate} />;

      default:
        return <ArcHome onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;
