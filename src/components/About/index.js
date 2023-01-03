function About() {
    return (
        <section className='about'>
            <h3 className='about-title'>About Me...</h3>
            <div className='about-holder'>
                <div className='about-div'>
                    <img className='me sneak-hide' src={require('../../assets/samvarney.jpg')}></img>
                    <div className='resume-holder'>
                        <div className='resume-lists'>
                            <h3>My proficiencies:</h3>
                            <h4>Front End proficiencies:</h4>
                            <ul>
                                <li>Javascript ES6+</li>
                                <li>CSS3</li>
                                <li>HTML5</li>
                                <li>React</li>
                                <li>Responsive design</li>
                                <li>Handlebars</li>
                            </ul>
                            <h4>Back End proficiencies:</h4>
                            <ul>
                                <li>NodeJS, npm</li>
                                <li>Express</li>
                                <li>REST APIs</li>
                                <li>MongoDB, Mongoose</li>
                                <li>MySQL, Sequelize</li>
                                <li>Concurrently</li>
                                <li>Apollo/GraphQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='about-div'>
                    <img className='me second-sneak-hide' src={require('../../assets/samvarney.jpg')}></img>
                    <p className='about-me'> Hello! My name is Samuel Varney, and I am a fullstack web developer with an emphasis on front-end development.
                        For the past 10 years I have worked across a few different industries and through a little trial and error, am happy to have chosen web
                        development as a permanent career path because it aligns with my passions and future goals. In November of 2022 I graduated from the
                        University of Wisconsins’ Web Development bootcamp that focuses on Javascript and the MERN stack, and earned a certificate in full stack
                        web development from the UW. During the course of the bootcamp I developed new skills in many technologies including JavaScript ES6+,
                        HTML, CSS, React, SQL, NoSQL, Node, the MERN stack, and responsive web design. I love solving puzzles, being creative, and learning new
                        things. I am known as a hard worker with a strong work ethic, and I enjoy picking up new coding skills and applying to develop and debug
                        web applications. Each project I work on I take as an opportunity not only to learn something new, but design apps that are interesting,
                        user friendly and have an impactful user experience. I am very excited to leverage my skills as part of a quality-driven team to build better
                        experiences on the web!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;