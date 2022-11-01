function About() {
    return(
        <section className='about'>
            <h3 className='about-title'>About Me...</h3>
            <div className='about-holder'>
                <img className='me' src={require('../../assets/samvarney.jpg')}></img>
                <p className='about-me'> Hello! My name is Samuel Varney, and I am a fullstack web developer. 
                I recently earned a certificate in full stack web 
                development from the University of Wisconsin through 2U with newly developed skills in JavaScript, 
                HTML, CSS, React, SQL, NoSQL, Node, the MERN stack, and responsive web design.
                For the past 10 years I have worked across a few different industries and through a little trial and error, am happy to have found web development as a final career path
                because it aligns with my passions and future goals. I love solving puzzles, being mentally stimulated, and learning new things... that 
                coupled with my goal of achieving financial freedom for my family makes me very excited to be entering into a career of web development!
                I am known as a hard worker with a strong work ethic, and I enjoy picking up new skills and applying to develop and debug web 
                applications. With each project I hope to not only learn something new but design apps 
                that are user friendly and have an impactful user experience. I am very excited to leverage skills as part of a quality-driven 
                team to build better experiences on the web!
                </p>
            </div>
        </section>
    )
}

export default About;