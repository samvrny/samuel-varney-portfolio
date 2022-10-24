function About() {
    return(
        <section className='about'>
            <h3 className='about-title'>About Me...</h3>
            <div className='about-holder'>
                <img className='me' src={require('../../assets/samvarney.jpg')}></img>
                <p className='about-me'>Hello, I'm Sam! I'm a software developer leveraging my skills in team environments 
                to quickly and creatively solve problems in web development. I recently earned a certificate in full stack web 
                development from the University of Wisconsin, with newly developed skills in JavaScript, 
                HTML, CSS, React, SQL, NoSQL, Node, the MERN stack, and responsive web design. Known as a quick learner with a 
                strong work ethic, I enjoy picking up new skills and applying to develop and debug web 
                applications. With each project I hope to not only learn something new but design apps 
                that are user friendly and have an impactful user experience. I am very excited to leverage skills as part of a quality-driven 
                team to build better experiences on the web!
                </p>
            </div>
        </section>
    )
}

export default About;