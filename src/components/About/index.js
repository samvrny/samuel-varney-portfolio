import { useState } from 'react';
import Project from '../Project';

function About() {

    return (
        <section className='about'>
            <h3 className='about-title'>About Me...</h3>
            <div className='about-holder'>
                <div className='about-div'>
                    <img className='me sneak-hide' src={require('../../assets/samvarney.jpg')}></img>
                    <div className='resume-holder'>
                        <div className='resume-lists'>
                            <h3>Proficiencies:</h3>
                            <h4>Front End proficiencies:</h4>
                            <ul>
                                <li>Javascript ES6+</li>
                                <li>CSS3</li>
                                <li>HTML5</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Vue</li>
                                <li>Responsive design</li>
                                <li>Tailwind</li>
                                <li>Pinia</li>
                            </ul>
                            <h4>Back End proficiencies:</h4>
                            <ul>
                                <li>NodeJS</li>
                                <li>npm</li>
                                <li>Express</li>
                                <li>REST APIs</li>
                                <li>SQL</li>
                                <li>NoSQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='about-div push-down'>
                    <img className='me second-sneak-hide' src={require('../../assets/samvarney.jpg')}></img>
                    <p className='about-me'> Hello! I'm Sam, a fullstack web developer, customer service professional, and skilled laborer. For the past 10 years I have spent my time mostly in the agricultural, landscaping, and service industries, including personally planning and successfully operating a profitable agricultural business venture. Looking for a permanent career change and to learn something new, in 2022 I attended the University of Wisconsin's’ Web Development bootcamp and earned a certificate in full stack web development in November of that year. During the course of the bootcamp I developed new skills in many technologies including JavaScript ES6+, HTML, CSS, React, SQL, NoSQL, Node, the MERN stack, responsive web design, and also honed in my business computer skills. I became proficient in Google Workspace, Zoom, Slack, typing, Microsoft Office, and have gotten some exposure to data entry. I am currently using my business, web development, and customer service skills running my own business as a landscaper and freelance web developer while I search for a permanent role in web design and development. I am also taking classes through the Zero To Mastery digital coding academy where I am teaching myself Vue, mastering Microsoft Office, and expanding my web development abilities. I am excited to learn as many new technologies and skills as I can! I love solving puzzles, being creative, and learning new things. Everything I work on I take as an opportunity to learn something new. I am looking forward to starting my career in web design and development in the coming year! Nice to meet you.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;