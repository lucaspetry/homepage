import React from 'react';
import { Badge } from 'react-bootstrap';

export default function Project({title, url, authors, description, image, tools, subjects}) {
    return (
        <div className="projects-item">
            <span style={{fontSize: "1.2rem", fontWeight: "bold"}}>
                {title}
            </span>
            <span style={{fontSize: "1.1rem"}}>{authors.map(item => (
                <span>
                    <a key={item}
                       href={`https://github.com/${item}`}
                       target="_blank"
                       rel="noopener noreferrer">{`@${item}`}</a>{' '}
                </span>
            ))}</span>
            <div className="project-content">
                {image ?
                    <img className="project-thumb" src={image} alt="" />
                    : ''
                }
                <span>
                    {description + ' '}
                    {url ? <a href={url}
                              target="_blank"
                              rel="noopener noreferrer">More >></a> : ''}
                </span>
            </div>
            <span style={{fontSize: "1.1rem"}}>
                {subjects.map(item => (
                    <Badge key={item}  className="project-skill" variant="dark">{item}</Badge>
                ))}
                {tools.map(item => (
                    <Badge key={item}  className="project-skill" variant="success">{item}</Badge>
                ))}
            </span>
            
        </div>
    );
}
