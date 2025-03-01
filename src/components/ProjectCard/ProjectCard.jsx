import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from "react-icons/bs";


const ProjectCard = ({ data }) => {


    return (
        <Link to={`/projects/${data.id}`} className="project-card">
            <div className="after-img"></div>
            <img src={`${process.env.PUBLIC_URL}${data.imageSrc}`} alt={data.imageAlt} />
            <div className="icon"><BsArrowRightCircle /></div>
            <div className="project-card-content"></div>
                <div className="card-text">
                    <p className="title">{data.cardDescription}</p>
                    <p className='type'> {data.type}</p>
                </div>
        </Link>
    );
}

export default ProjectCard;
