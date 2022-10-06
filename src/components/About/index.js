function About() {
    return(
        <section className='about'>
            <div className='about-holder'>
                <img className='me' src={require('../../assets/samvarney.jpg')}></img>
                <p className='about-me'>Hello world! My name is Samuel Varney. I am a full stack web developer
                    located in St. Paul Minnesota. I love solving problems and learning new things.
                    Does anyone really know how to brand themselves or what to write in these things?
                    Toast is good, and so are bagels. There are a couple of great bagel places I remember
                    from when I lived in Boulder CO, and one of them specifially had a delicious cream
                    cheese lox spead. Can't wait to go back and eat some again. ANY ways -- what else to talk about?
                    Weather is weather outside. Looks like there some trees, and other plants. Colors are 
                    just radiation, isn't that neat? Alright later guys, gotta go figure out hot to conditionally render
                    this whole 'Navigation' system.
                </p>
            </div>
        </section>
    )
}

export default About;