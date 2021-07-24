import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Phone } from "@material-ui/icons";
import {
    faFacebook,
    faTwitter,
    faInstagram, 
    faLinkedin,

  } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link'
import styles from '../styles/navbanner.module.css'

  function Navbanner(){
    return(
        <div className={styles.Container} style={{height:"35px"}}>
            <div className={styles.mail}>  
                <a style={{color: "whitesmoke", textDecoration:"underline"}} href="#">abcfoundation@gmail.com</a></div>
            <div style={{display:"flex"}}><Phone style={{color:'white', marginTop:"15px",marginRight:"8px", marginLeft:"4px"}} /><p style={{color:"white"}}>000-000-00</p></div>
            <div className={styles.banner}>
            <div className={styles.lnk}>
              <a href="https://www.facebook.com/"><FontAwesomeIcon style={{marginRight:"10px"}} className={styles.lnk0} icon={faFacebook} size="lg" /></a>
              <a href="https://www.twitter.com/"><FontAwesomeIcon style={{marginRight:"10px"}} className={styles.lnk1} icon={faTwitter} size="lg" /></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon style={{marginRight:"10px"}} className={styles.lnk2} icon={faInstagram} size="lg" /></a>
              <a href="https://www.linkedin.com/"><FontAwesomeIcon style={{marginRight:"10px"}} className={styles.lnk3} icon={faLinkedin} size="lg" /></a>
            </div>
            </div>
        </div>
    )
  }

  export default Navbanner;