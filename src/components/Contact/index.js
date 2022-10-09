function Contact() {
    return (
        <section className='contact-holder'>
            <h1>Contact Me</h1>
            <form>
                <div className='input-div'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' placeholder='Enter Name' />
                </div>
                <div className='input-div'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' placeholder='Example: john@email.com' />
                </div>
                <div className='message'>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' placeholder='Enter your message here' />
                </div>
            </form>
            <button type='submit'>Submit</button>
        </section>
    )
}

export default Contact;