import React, {Component, useState} from 'react';
import styles from '../styles/contact.module.css'
import Head from 'next/head'
import Navbanner from './navbanner';
import Navbar from './navbar';
import Footer from './footer';
import Image from 'next/image'

function Contact(){
    const [input, setInput] = useState({
        name:'',
        email:'',
        phone:'',
        message:''
    })

    function handleInputs(event){
        const {name,value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]:value
            }
        })
    }
    const {name, email, phone, message} = input;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const response = await fetch("https://v1.nocodeapi.com/surabhi175/google_sheets/gYrWKFlrPHcDPlbY?tabId=Sheet1" ,{
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify([[name, email, phone, message, new Date().toLocaleString()]]),
            }
        );
        await response.json();
        setInput({...input, name:"", email:"", phone:"", message:""});
        alert('Response Submitted Successfully!')
        } catch(err) {
        console.log(err);
    }
  }
    // function handleClick(event){
    //     event.preventDefault();
    //     console.log(input);
    // }

            return(
                <>
                    <Head>
                    <title>NGO website | Contact</title>
                    <meta name="keywords" content="ngo website"></meta>
                </Head>
                <Navbanner/>
                <Navbar />
                <div className={styles.contct}>
                    <p style={{textAlign:"center", color: "white", fontWeight:"bold", fontSize:"2.2em"}}>CONTACT</p>
                    <div className={styles.sub}>
                        <div className={styles.col1}>
                            <Image height="595%" width="560%" alt="phone image" src="https://image.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35048.jpg" />
                        </div>
                        <div className={styles.col2}>
                            <h2>WRITE TO US</h2>
                            <form onSubmit={handleSubmit} >
                                <input className={styles.ip} style={{paddingLeft:"10px", fontFamily:"sans-serif", height:"27px"}}
                                type="text" id="name"
                                name="name"
                                value={input.name}
                                onChange={handleInputs}
                                placeholder="Full name"/>
                                <br /><br />
                                
                                <input className={styles.ip} style={{paddingLeft:"10px", fontFamily:"sans-serif", height:"27px"}}
                                type="text" id="email"
                                name="email"
                                value={input.email}
                                onChange={handleInputs}
                                placeholder="Email address"                            
                                />
                                <br /><br />
    
                                <input className={styles.ip} style={{paddingLeft:"10px",outline:"none", fontFamily:"sans-serif",height:"27px"}}
                                type="text" id="phone"
                                name="phone"
                                value={input.phone}
                                onChange={handleInputs}
                                placeholder="Phone"       
                                />
                                <br /><br />
    
                                <textarea style={{paddingLeft:"10px",outline:"maroon", marginTop:"5px", fontFamily:"sans-serif"}}
                                name="message"
                                value={input.message}
                                onChange={handleInputs}
                                rows="8" placeholder="Leave a message">
                                </textarea>
                                <div className={styles.btnclass}><button className={styles.btn} type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
                </>
            )
        
}


export default Contact;