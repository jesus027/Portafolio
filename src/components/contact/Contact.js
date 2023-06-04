import React, { useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_43sfdfc','template_2th9zzp', form.current, 'WLOiwtalQcsAjq9pR')
        
        e.target.reset()
    }

    const [user, setUser] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // -------- la validación del mensaje comienza aqui ------------

    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
    };

    // -------- la validación del mensaje termina aqui ------------
    
    const handleSend = (e) => {
        e.preventDefault()
        if(user === "") {
            setError("Username Required!");
        }
        
        else if(phone === "") {
            setError("Phone Number Required!");
        }
        
        else if(email === "") {
            setError("Email is required!");
        }
        
        else if(!emailValidation(email)) {
            setError("Write a Valid Email!");
        }
        
        else if(asunto === "") {
            setError("Please Write the Subject!");
        }
    
        else if(message === "") {
            setError("Message Required!");
        }
            
        else {
            setSuccess(`Thank you ${user}, your message has been sent successfully`);
            setError("");
            setUser("");
            setPhone("");
            setEmail("");
            setAsunto("");
            setMessage("");
        }
    };

    return (
        <section id='contact' className='w-full py-20 border-b-[1px] border-black'>
            <div className='flex justify-center items-center text-center'>
                <Title title="Contact" des="Send me a Message" />
            </div>

            <div className='w-full'>
                <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
                    <ContactLeft />

                    <div className='w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex
                    flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne'>
                        <form
                            ref={form} onSubmit={sendEmail}
                            className='w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5'
                        >
                            {error && (
                                    <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                                    shadow-shadowOne text-center text-red-500 text-base tracking-wide
                                    animate-bounce uppercase'>
                                        {error}
                                    </p>
                                )
                            }

                            {success && (
                                    <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                                    shadow-shadowOne text-center text-lime-500 text-base uppercase tracking-wide
                                    animate-bounce'>
                                        {success}
                                    </p>
                                )
                            }

                            <div className='w-full flex flex-col lgl:flex-row gap-10'>
                                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                        Name
                                    </p>

                                    <input 
                                        onChange={(e) => setUser(e.target.value)}
                                        name='name'
                                        value={user}
                                        className={`${
                                            error === "Username Required!" && "outline-red-500"
                                        } contactInput`}
                                        type='text' 
                                    />
                                </div>

                                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone number</p>

                                    <input
                                        onChange={(e) => setPhone(e.target.value)}
                                        name='phone'
                                        value={phone}
                                        className={`${
                                            error === "Phone Number Required!" && "outline-red-500"
                                        } contactInput`}
                                        type='text' 
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>Email</p>

                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    name='email'
                                    value={email}
                                    className={`${
                                        error === "Email is required!" && "outline-red-500"
                                    } contactInput`}
                                    type='email' 
                                />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>

                                <input
                                    onChange={(e) => setAsunto(e.target.value)}
                                    name="asunto"
                                    value={asunto}
                                    className={`${
                                        error === "Please Write the Subject!" && "outline-red-500"
                                    } contactInput`}
                                    type='text' 
                                />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>Message Content</p>

                                <textarea
                                    onChange={(e) => setMessage(e.target.value)}
                                    name='message'
                                    value={message}
                                    className={`${
                                        error === "Message Required!" && "outline-red-500"
                                    } contactTextarea`}
                                    cols='30'
                                    rows='10' 
                                ></textarea>
                            </div>

                            <div className='w-full'>
                                <button type='submit' value='Send' onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400
                                tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] 
                                hover:border-designColor border-transparent'>
                                    Send Message
                                </button>
                            </div>

                            {error && (
                                    <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                                    shadow-shadowOne text-center text-red-500 text-base tracking-wide
                                    animate-bounce'>
                                        {error}
                                    </p>
                                )
                            }

                            {success && (
                                    <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                                    shadow-shadowOne text-center text-lime-500 text-base uppercase tracking-wide
                                    animate-bounce'>
                                        {success}
                                    </p>
                                )
                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact