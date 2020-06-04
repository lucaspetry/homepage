import React from 'react';
import Header from '../../Header';
import Project from './Project';

import './styles.css';
import miningJournalsThumb from '../../assets/projects/mining_journals.png';
import nbaVisualizationThumb from '../../assets/projects/nba_visualization.gif';
import tricklingWsnThumb from '../../assets/projects/trickling_wsn.png';
import smailSimulatorThumb from '../../assets/projects/smail_simulator.jpeg';

export default function Projects() {
    return (
        <>
            <Header />
            <div className="main-container container">
                <div className="projects">
                    <Project
                        title="Mining Journals to the Ground: An Exploratory Analysis of Newspaper Articles"
                        url="https://github.com/lucaspetry/news-similarity"
                        authors={['lucaspetry', 'Cahmilk', 'viniciusmctf']}
                        description="An exploratory analysis of the categorization, spread, and replication of news content in journalistic web portals with similarity, clustering, and NLP."
                        image={miningJournalsThumb}
                        tools={['Python', 'Pandas', 'Numpy', 'Scikit-learn', 'Scrapy', 'gensim']}
                        subjects={['Data Mining']} />
                    <Project
                        title="NBA Data Visualization"
                        url="https://github.com/lucaspetry/nba-data-visualization"
                        authors={['lucaspetry']}
                        description="Showing stats and movement data of the NBA 2014-15 Season through interesting and interactive visualizations."
                        image={nbaVisualizationThumb}
                        tools={['Java', 'Processing']}
                        subjects={['Data Visualization']} />
                    <Project
                        title="Predictors for Trickling in Wireless Sensor Networks"
                        url="https://github.com/lucaspetry/trickling-wsn"
                        authors={['lucaspetry', 'doodomartins', 'maikeps']}
                        description="Implementation of predictors on embedded systems for trickling in Wireless Sensor Networks, in order to reduce device communication and power consumption."
                        image={tricklingWsnThumb}
                        tools={['C++', 'Matlab']}
                        subjects={['Data Mining', 'Embedded Systems']} />
                    <Project
                        title="Be The Hero App"
                        url="https://github.com/lucaspetry/bethehero-app"
                        authors={['lucaspetry']}
                        description="App developed during the 11th OmniStack Week (Semana OmniStack 11.0 | Rocketseat). The goal of this project was to create an app that allows Non-Governmental Organizations (NGOs) (e.g. animal shelters) to ask for financial assistance for specific incidents."
                        tools={['Javascript', 'Node.JS', 'React', 'React Native']}
                        subjects={['Web App', 'Mobile App']} />
                    <Project
                        title="Trajectory Mining Library"
                        url="https://github.com/lucaspetry/trajminer"
                        authors={['lucaspetry']}
                        description="Trajectory mining library for Python. Trajminer aims to fill the gap of solid open-source libraries for trajectory data mining. It contains methods for data loading, preprocessing, similarity measuring, clustering and classification."
                        tools={['Python', 'Pandas', 'Scikit-learn']}
                        subjects={['Library']} />
                    <Project
                        title="Smail Simulator"
                        url="https://github.com/lucaspetry/smail-simulator"
                        authors={['lucaspetry', 'nathanmolinari']}
                        description="A simulator of traffic to and from e-mail servers able to simulate e-mail traffic under different settings of servers and traffic distribution."
                        image={smailSimulatorThumb}
                        tools={['Javascript', 'D3']}
                        subjects={['Web App']} />
                </div>
            </div>
        </>
    );
}