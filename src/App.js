import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Projects from './pages/ProjectPage/ProjectPage';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import { LanguageProvider } from './contexts/LanguageContext';
import Footer from './components/Footer/Footer';
import PageUpBtn from './components/PageUpBtn/PageUpBtn';
import InfoPage from './pages/InfoPage/InfoPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

  return (
    <div className="App">
      <LanguageProvider>
        <Router>
        <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/info/:category" element={<InfoPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
          <Footer />
          <PageUpBtn />
        </Router>
      </LanguageProvider>
   
    </div>
  );
}

export default App;
