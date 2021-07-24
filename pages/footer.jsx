import Link from 'next/link'
import styles from '../styles/footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram, 
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return ( 
        <div style={{display:"flex", flexDirection:"column", columnGap:"10px",backgroundColor:"#480379", height:"225px" }}>
            <div style={{display:"flex", justifyContent:"space-evenly", paddingBottom:"15px"}}>
                <div  style={{color:"whitesmoke", display:"flex",flexDirection:"column"}}>
                    <h3 className={styles.hdr}>GET IN TOUCH</h3>
                    <div className={styles.links} style={{textAlign:"center"}}>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <a href="https://www.facebook.com/"><FontAwesomeIcon style={{margin:"3px", padding:"6px", height:"45px", width:"45px"}} className={styles.lnk} icon={faFacebook} size="2x" /></a>
                            <a href="https://www.twitter.com/"><FontAwesomeIcon style={{margin:"3px", padding:"6px", height:"45px", width:"45px"}} className={styles.lnk} icon={faTwitter} size="2x" /></a>
                        </div>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <a href="https://www.instagram.com/"><FontAwesomeIcon style={{margin:"3px", padding:"6px", height:"45px", width:"45px"}} className={styles.lnk} icon={faInstagram} size="2x" /></a>
                            <a href="https://www.linkedin.com/"><FontAwesomeIcon style={{margin:"3px", padding:"6px", height:"45px", width:"45px"}} className={styles.lnk} icon={faLinkedin} size="2x" /></a>
                        </div>
                    </div>
                </div>
                <div  style={{color:"whitesmoke", display:"flex",flexDirection:"column"}}>
                    <h3 className={styles.hdr}>QUICK LINKS</h3>
                    <div className="links" style={{textAlign:"center", display:"flex",flexDirection:"column"}}>
                        <Link href="/"><a className={styles.btns}>Home</a></Link>
                        <Link href="/work"><a className={styles.btns}>Work</a></Link>
                        <Link href="/about"><a className={styles.btns}>About Us</a></Link>
                        <Link href="/contact"><a className={styles.btns}>Contact</a></Link>
                    </div>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"center", marginBottom:"6px"}}>
                <div style={{color:"white", marginRight:"10px", marginTop:"1px"}}>&copy;</div>
                <div  style={{color:"white", fontSize:"1.1em", opacity:"0.8",color:"white"}}>2021 Surabhi Chandane</div>
            </div>
        </div>
     );
}
 
export default Footer;