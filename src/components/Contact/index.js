import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        event.preventDefault();

        if(event.target.name === 'email') {
            const validEmail = validateEmail(event.target.value);

            if(!validEmail) {
                setErrorMessage('Your email is invalid.')
            } else {
                setErrorMessage('');
            }
        } else {
            if(!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required`)
            } else {
                setErrorMessage('');
            }
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState)
    }

    return (
        <section className='contact-holder'>
            <h1>Contact Me</h1>
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='form-div'>
                    <label htmlFor='Name'>Name:</label>
                    <input type='text' name='Name' placeholder='Enter Name' onBlur={handleChange} />
                </div>
                <div className='form-div'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' placeholder='Example: john@email.com' onBlur={handleChange}/>
                </div>
                <div className='form-div'>
                    <label htmlFor='Message'>Message:</label>
                    <textarea name='Message' placeholder='Enter your message here' rows='10' onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button className='contact-btn' type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact;