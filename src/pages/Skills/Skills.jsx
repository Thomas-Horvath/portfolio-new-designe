import React, { useContext } from 'react';
import { icons } from '../../assets/assets'; // Importáld az ikonokat
import { LanguageContext } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { translations } = useContext(LanguageContext);
  return (
    <section className="skills section-link" id="skills" data-observe>
      <motion.div
        className="main-heading"
        ref={ref1}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: inView1 ? 1 : 0.8, opacity: inView1 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{translations.skills.headingTitle}</h2>
        <span>{translations.skills.headingSpan}</span>
      </motion.div>
      <div className="skill-container">

        <div className="card-1 skills-card">
          <h2>{translations.skills.frontEndTitle}</h2>
          <div className="skills-icon-container">
            {translations.skills.frontEndSkills.map((skill) => (
              <div key={skill.name} className="skill-icon-container">
                <img src={icons[skill.icon]} alt={`${skill.name} logo`} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-2 skills-card">
          <h2>{translations.skills.backEndTitle}</h2>
          <div className="skills-icon-container">
            {translations.skills.backEndSkills.map((skill) => (
              <div key={skill.name} className="skill-icon-container">
                <img src={icons[skill.icon]} alt={`${skill.name} logo`} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-3 skills-card">
          <h2>{translations.skills.databaseTitle}</h2>
          <div className="skills-icon-container">
            {translations.skills.databaseSkills.map((skill) => (
              <div key={skill.name} className="skill-icon-container">
                <img src={icons[skill.icon]} alt={`${skill.name} logo`} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-4 skills-card">
          <h2>{translations.skills.otherTitle}</h2>
          <div className="skills-icon-container">
            {translations.skills.otherSkills.map((skill) => (
              <div key={skill.name} className="skill-icon-container">
                <img src={icons[skill.icon]} alt={`${skill.name} logo`} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
