function Resume() {
    const resumepdf = require('../../assets/resume/Samuel Varney (1).pdf')

    return (
        <div className='resume-holder'>
            <section>
                <h2 className='resume-head'>Resume</h2>
                <div>
                    <p className='weight'>View and download my <span><a className='res-link'href={resumepdf} target='_blank'>Resume</a></span></p>
                </div>
                <div className='resume-lists'>
                    <h3>My proficiencies:</h3>
                    <h4>Front End proficiencies:</h4>
                    <ul>
                        <li>Javascript ES6+</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Responsive design</li>
                        <li>Handlebars</li>
                    </ul>
                    <h4>Back End proficiencies:</h4>
                    <ul>
                        <li>NodeJS, npm</li>
                        <li>Express</li>
                        <li>SQL</li>
                        <li>NoSQL</li>
                        <li>MongoDB, Mongoose</li>
                        <li>MySQL, Sequelize</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Resume;