import React, { useState, useEffect, useContext , useRef } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { img, categoryMap } from '../../assets/assets.js';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ITEMS_PER_PAGE = 2;

const ProjectPage = () => {
  const { translations, language } = useContext(LanguageContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState(translations.projects);
  const [activeCategory, setActiveCategory] = useState('All');


  useEffect(() => {
    // Betölteni a kiválasztott kategóriát a localStorage-ból
    const savedCategory = sessionStorage.getItem('selectedCategory');
    if (savedCategory) {
      setActiveCategory(savedCategory);
    }
  }, []);


  const projectsRef = useRef(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    sessionStorage.setItem('selectedCategory', category);
  };






  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  // categória szerinti szűrés
  useEffect(() => {
    if (activeCategory === 'All' || activeCategory === '') {
      setFilteredProjects(translations.projects);
    } else {
      const selectedCategory = categoryMap[activeCategory][language];
      setFilteredProjects(translations.projects.filter(project => project.type === selectedCategory));
    }
  }, [activeCategory, translations, language]);


  const paginatedProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);


  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);



  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });


  return (
    <section className="portfolio section-link project-page" id="projects" >
      {/* <img src={img.wave_reverse} alt="fekete fordított hullám háttér" className="wave-reverse" /> */}
      <div className="portfolio-wrapper"  data-observe ref={projectsRef}>
        <motion.div
          className="main-heading"
          ref={ref1}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: inView1 ? 1 : 0.8, opacity: inView1 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{translations.projectPageContent.headingTitle}</h2>
          <span>{translations.projectPageContent.subHeading}</span>
        </motion.div>
        <div className="project-btn-group">
          <button
            className={`btn project-select-btn ${activeCategory === 'All' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('All')}
          >
            {translations.projectPageContent.buttonsAll}
          </button>
          <button
            className={`btn project-select-btn ${activeCategory === 'Webpage' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('Webpage')}
          >
            {translations.projectPageContent.buttonFront}
          </button>
          <button
            className={`btn project-select-btn ${activeCategory === 'Backend' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('Backend')}
          >
            {translations.projectPageContent.buttonBack}
          </button>
          <button
            className={`btn project-select-btn ${activeCategory === 'Data' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('Data')}
          >
            {translations.projectPageContent.buttonApps}
          </button>
        </div>
        <div className="project-grid">
          {paginatedProjects.map(project => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
        <div className="pagination js-pagination">
          {[...Array(totalPages).keys()].map(page => (
            <button
              key={page + 1}
              className={`pagination-btn btn ${currentPage === page + 1 ? 'activeBtn' : ''}`}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
      {/* <img src={img.wave} alt="fekete hullám háttér" className="about-wave" /> */}
    </section>
  );
}

export default ProjectPage;
