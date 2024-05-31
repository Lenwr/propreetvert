"use client";
import React, {useState} from 'react'
import Image from "next/image";
import emailjs from "@emailjs/browser";
import {contact, vision} from "@/app/assets";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function NousContacter(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    (function(){
        emailjs.init({
            publicKey: "dnBjox8ayfiBML1MH",
        });
    })();
    const sendMessage = (event) => {
        event.preventDefault();
        if (!name || !email || !feedback) {
            return;
        }
        setLoading(true);
        const templateParams = {
            from_name: `${name}" : "${email}`,
            to_name: "Jefferson ABALO",
            message: feedback,
        };
        emailjs
            .send("service_9vdj3fo", "template_87bi9zu", templateParams)
            .then(
                () => {
                    console.log("sucess")
                   handleOpen()
                    setLoading(false);
                    setName("");
                    setEmail("");
                    setFeedback("");
                },
                (err) => {
                    console.log("FAILED...", err);
                    setLoading(false);
                }
            );
    };



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
<div id="section3" className="py-8">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-accent">Nous contacter</h1>
    <div id="contact" className='flex flex-col md:flex-row justify-center mt-5'>
        <form onSubmit={(event) => sendMessage(event)}>
            <div className='flex flex-row justify-center '>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-evenly px-10 '>
                <Image src={contact} alt="" className="md:w-[40em] md:px-8"/>
                <div className='w-full'>
                    <div className=" flex flex-col">
                        <label className='text-black '> Nom</label>
                        <input placeholder='votre nom'
                               type="text"
                               name="name"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                               required
                               className='border-[1.5px] px-2 border-primary
              hover:border-blue-800 rounded-md'/>
                    </div>
                    <div className='flex flex-col '>
                        <label className='text-black '>Email</label>
                        <input placeholder=''
                               type="email"
                               name="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               required
                               className='border-[1.5px] px-2 border-primary
              hover:border-blue-800 rounded-md'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-black '>Message</label>
                        <textarea type="text" rows={7} placeholder='Votre message'
                                  name="feedback"
                                  value={feedback}
                                  onChange={(e) => setFeedback(e.target.value)}
                                  required
                                  className='border-[1.5px] px-2 hover:border-blue-800 border-primary rounded-md'/>
                        <button type="submit" disabled={loading}
                                className='transition-all ease-in-out hover:scale-110 bg-primary flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white  rounded-md'>
                            {loading ? "Envoi en cours..." : "Envoyer"}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                            </svg>

                        </button>
                    </div>


                </div>


            </div>
        </form>
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style} >
            <Typography id="modal-modal-title" variant="h6" component="h2">
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 , }} >
                Votre message a été envoyé
            </Typography>
        </Box>
    </Modal>

</div>


    );
}
export default NousContacter;