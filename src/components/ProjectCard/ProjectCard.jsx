import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';

const ProjectCard = ({ data }) => {
    const { translations } = useContext(LanguageContext);
    const [isTouched, setIsTouched] = useState(false);

    const handleTouch = () => {
        setIsTouched(!isTouched);
    };

    return (
        <div
            className={`project-card ${isTouched ? 'touched' : ''}`}
            onClick={handleTouch}
            onMouseLeave={() => setIsTouched(false)}
        >
            <div className="after-img"></div>
            <img src={`${process.env.PUBLIC_URL}${data.imageSrc}`} alt={data.imageAlt} />
            <div className="project-card-content">
                <h2 className="project-card-title">{data.title}</h2>
                <Link to={`/projects/${data.id}`} className="project-card-button">
                    {translations.projectCard.buttonDetails}
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;
