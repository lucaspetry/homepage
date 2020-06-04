import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Header from '../../Header';

import './styles.css';
import publications from '../../assets/publications.tsv';

export default function Research() {
    const [papers, setPapers] = useState([]);

    useEffect(() => {
        fetch(publications).then(response => {
            response.body.getReader().read().then(result => {
                const decoder = new TextDecoder('utf-8');
                let csv = decoder.decode(result.value);
                Papa.parse(csv, {
                    delimiter: '\t',
                    header: true,
                    complete: (result) => {
                        setPapers(result.data
                            .filter(item => item.id !== '')
                            .sort((a, b) => a.year > b.year ? -1 : 1));
                    }
                })
            })
        })

        setPapers([]);
    }, []);

    return (
        <>
            <Header />
            <div className="main-container container">
                <ul className="papers">
                    {papers.map(paper => (
                            <li key={paper.id}
                                className="papers-item">
                                <span>{paper.authors}.</span><br/>
                                <span style={{fontWeight: "bold"}}>{paper.title}.</span><br/>
                                <span style={{fontStyle: "italic"}}>{paper.vehicle} ({paper.year}).</span><br/>
                                {paper.link_publication !== '' ?
                                    <span>[ <a href={paper.link_publication}
                                               target="_blank"
                                               rel="noopener noreferrer">publication</a> ]</span>
                                    : ''
                                }
                                {paper.link_preprint !== '' ?
                                    <span>[ <a href={
                                        String(paper.link_preprint).includes('http') ?
                                        paper.link_preprint
                                        : process.env.PUBLIC_URL + paper.link_preprint}
                                               target="_blank"
                                               rel="noopener noreferrer">preprint</a> ]</span>
                                    : ''
                                }
                                {paper.link_presentation !== '' ?
                                    <span>[ <a href={
                                        String(paper.link_presentation).includes('http') ?
                                        paper.link_presentation
                                        : process.env.PUBLIC_URL + paper.link_presentation}
                                               target="_blank"
                                               rel="noopener noreferrer">presentation</a> ]</span>
                                    : ''
                                }
                                {paper.link_source_code !== '' ?
                                    <span>[ <a href={paper.link_source_code}
                                               target="_blank"
                                               rel="noopener noreferrer">source code</a> ]</span>
                                    : ''
                                }
                            </li>
                        )
                    )}
                </ul>
            </div>
        </>
    );
}