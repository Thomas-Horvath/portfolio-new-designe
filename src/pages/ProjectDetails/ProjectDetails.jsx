import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import BackButton from '../../components/BackButton/BackButton';
import { FaGithub } from "react-icons/fa6";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

import Modal from '../../components/ImgModal';



const ProjectDetail = () => {
    const { translations } = useContext(LanguageContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const { id } = useParams();
    const project = translations.projects.find(p => p.id === Number(id));
    let content = project.popupDescription;


    const openModal = (img) => {
        setSelectedImage(img);
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };




    if (!project) return <p>A projekt nem található!</p>;

    return (
        <div className="project-detail-container" id="projects" data-observe>
            <div className="detail-wrapper">
                <h1>{project.title}</h1>
                <div className="project-detail">
                    <div className="project-image-container">
                        <img className="project-image" src={`${process.env.PUBLIC_URL}${project.imageSrc}`} alt={project.imageAlt} />
                    </div>
                    <div className="project-info">
                        <div className="p-container">
                            <p><strong>{project.popupDescriptionTitle}</strong>  </p>
                            {content.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                            <p><strong>{project.popupTehnologies}</strong></p>
                            <p>{project.technologies.join(', ')}</p>
                            <p><strong>{project.popupProjectType}</strong></p>
                            <p>{project.type}</p>
                        </div>
                    </div>

                </div>

                <div className="project-links">

                    {project.githubLink && project.githubPagesLink ? (
                        <>
                            <Link to={project.githubLink} target="_blank" rel="noreferrer" className="btn">
                                <FaGithub /> GitHub
                            </Link>
                            <Link to={project.githubPagesLink} target="_blank" rel="noreferrer" className="btn">
                                <MdOutlineLiveTv /> Live Demo
                            </Link>
                        </>
                    ) : (
                        project.downloadDocs_title && (
                            <a download target="_blank" href={`${process.env.PUBLIC_URL}${project.docsHref}`} rel="noreferrer" className="btn">
                                <FaFileDownload /> {project.downloadDocs_title}
                            </a>
                        )
                    )}


                </div>
                <div className="gallery">
                    <h2>A projekt képekben:</h2>
                    <div className="gallery-containre">
                        {project.gallery.map((image, index) => (
                            <div className="img-wrapper" key={index} onClick={() => openModal(image)}>
                                <img src={`${process.env.PUBLIC_URL}${image}`} alt={`${project.imageAlt} ${index + 1}. kép `} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Modal megjelenítése, ha nyitva van */}
                {isModalOpen && <Modal imgSrc={selectedImage} onClose={closeModal} isOpen={isModalOpen} />}
                <BackButton />
            </div>
        </div>
    );
};

export default ProjectDetail;
