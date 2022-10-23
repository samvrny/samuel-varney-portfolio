import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Contact() {
    return (
        <section className='contact-holder'>
            <h1>Contact Me</h1>
            <div className='email-div'>
                <p className='weight'>Contact me by email:</p>
                <a class='email weight' href='mailto:samvrny@gmail.com'>samvrny@gmail</a>
            </div>
            <div>
                <p className='weight'>
                    Visit me on GitHub
                </p>
                <a href='https://github.com/samvrny' target='_blank'>
                    <FaGithub className='github-icon' />
                </a>
            </div>
            <div>
                <p className='weight'>
                    Or contact me via Linkedin!
                </p>
                <a href='https://www.linkedin.com/in/samuel-varney' target='_blank'>
                    <FaLinkedin className='linkedin-icon' />
                </a>
            </div>
        </section>
    )
}

export default Contact;