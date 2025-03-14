import React from 'react';
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";


const InfoBox = ({id,  title, content, isOpen, onClick }) => {


    return (
        <div className="info-group" id={id}>
            <div className="info-title" onClick={onClick}>
                <h3>{title}</h3>

                {isOpen ? <FaArrowCircleUp className='title-icon' /> : <FaArrowCircleDown className='title-icon' />}
            </div>
            <div className={`info-content ${isOpen ? 'displayBlock' : ''}`}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
};

export default InfoBox;