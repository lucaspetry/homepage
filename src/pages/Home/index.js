import React from 'react';
import Header from '../../Header';
import { FaGithub, FaLinkedin, FaOrcid, FaResearchgate } from 'react-icons/fa';
import { MdSchool, MdEmail } from 'react-icons/md';

import profileImg from '../../assets/profile.jpg';

export default function Home() {
    return (
        <>
            <Header />
            <div className="main-container container">
                <div className="text-center">
                    <img className="profile-img" src={profileImg} alt="" />
                </div>
	            <p className="text-justify">
                    I earned my B.S. (2018) and M.S. (2020) degrees in Computer Science from <a href="http://ufsc.br">Federal University of Santa Catarina</a> (UFSC) in Florianópolis, Brazil. I was a visiting graduate research student at the <a href="https://bigdata.cs.dal.ca/">Institute for Big Data Analytics</a>, <a href="http://dal.ca/">Dalhousie University</a> in Halifax, Canada (Jan. 2019 to Jan. 2020), funded by the Emerging Leaders in the Americas Program (ELAP). I also studied abroad at <a href="http://ucdavis.edu">University of California</a> in Davis, USA, from 2015 to 2016.</p>
                <p className="text-justify">My career and research interests span from classical machine learning techniques to deep learning, especially in Natural Language Processing (NLP) and Geographical Information Science (GIS). I love collaboration and learning!</p>
                <br/><br/>
                <div className="text-right">
                    <a className="social-link"
                       href="mailto:lucas.petry@posgrad.ufsc.br">
                        <MdEmail size={50} />
                    </a>
                    <a className="social-link"
                       href="http://linkedin.com/in/lucasmaypetry"
                       target="_blank"
                       rel="noopener noreferrer">
                        <FaLinkedin size={50} />
                    </a>
                    <a className="social-link"
                       href="http://github.com/lucaspetry"
                       target="_blank"
                       rel="noopener noreferrer">
                        <FaGithub size={50} />
                    </a>
                    <a className="social-link"
                       href="https://scholar.google.com/citations?user=nKGT_csAAAAJ"
                       target="_blank"
                       rel="noopener noreferrer">
                        <MdSchool size={50} />
                    </a>
                    <a className="social-link" 
                       href="https://www.researchgate.net/profile/Lucas_May_Petry"
                       target="_blank"
                       rel="noopener noreferrer">
                        <FaResearchgate size={50} />
                    </a>
                    <a className="social-link"
                       href="https://orcid.org/0000-0003-1462-4538"
                       target="_blank"
                       rel="noopener noreferrer">
                        <FaOrcid size={50} />
                    </a>
                </div>
            </div>
        </>
    );
}