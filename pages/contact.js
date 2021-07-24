import React, {Component} from 'react';
import styles from '../styles/contact.module.css'
import Head from 'next/head'
import Navbanner from './navbanner';
import Navbar from './navbar';
import Footer from './footer';
import Image from 'next/image'

class Contact extends Component{
    userData;
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            state:"",
            message:""
        }
        this.handleInputs = this.handleInputs.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputs(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    onSubmit(event) {
        event.preventDefault();

        this.setState({
            name:'',
            email:'',
            phone:'',
            message:''
        })
        alert("Form data submitted.")
        
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if(localStorage.getItem('user')){
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone,
                message: this.userData.message
            })
        }else{
            this.setState({
                name:'',
                email:'',
                phone:'',
                message:''
            })
        }
    }

    UNSAFE_componentWillUpdate = (nextProps, nextState) => {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
    
        render(){
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
                            <Image height="560%" width="560%" alt="phone image" src="https://image.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35048.jpg" />
                        </div>
                        <div className={styles.col2}>
                            <h2>WRITE TO US</h2>
                            <form onSubmit={this.onSubmit} >
                                <input className={styles.ip} style={{paddingLeft:"10px", fontFamily:"sans-serif"}}
                                type="text" id="name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputs}
                                placeholder="Full name"/>
                                <br /><br />
                                
                                <input className={styles.ip} style={{paddingLeft:"10px", fontFamily:"sans-serif", height:"27px"}}
                                type="text" id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputs}
                                placeholder="Email address"                            
                                />
                                <br /><br />
    
                                <input className={styles.ip} style={{paddingLeft:"10px",outline:"none", fontFamily:"sans-serif",height:"27px"}}
                                type="text" id="phone"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleInputs}
                                placeholder="Phone"       
                                />
                                <br /><br />
    
                                <textarea style={{paddingLeft:"10px",outline:"maroon", marginTop:"5px", fontFamily:"sans-serif"}}
                                name="message"
                                value={this.state.message}
                                onChange={this.handleInputs}
                                rows="8" placeholder="Leave a message">
                                </textarea>
                                <button className={styles.btn} type="submit">Submit</button> 
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
                </>
            )
        }
}


export default Contact;