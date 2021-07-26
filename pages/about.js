import Head from 'next/head';
import styles from '../styles/about.module.css'
import Link from 'next/link'
import Navbanner from './navbanner';
import Navbar from './navbar';
import Footer from './footer';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Image from 'next/image'

const About = () => {
    return(
        <>
        <Head>
            <title>NGO website | About</title>
            <meta name="keywords" content="ngo website"></meta>
        </Head>
        <Navbanner />
        <Navbar />
        <div className={styles.abt}>
            <div className={styles.intro} style={{display:"flex"}}>
                <div className={styles.abtus}>
                    <p className={styles.introp} style={{textAlign:"center", fontFamily:"serif", color:"darkblue",fontWeight:"bold", fontSize:"2em"}}>ABOUT US</p>
                    <p style={{textAlign:"center", padding:"0% 12% 0% 12%"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.</p>
                </div>
                <div className={styles.purpose}>
                    <p style={{color:"crimson", whiteSpace:"revert"}}>The sole purpose of this organization is to create and maintain a sustainable environment for human beings to live in. We achieve this constant efforts, donations and voluntary contributions. If you wish to volunteer, do write to us <Link href="/contact"><a style={{ color:"blue", textDecoration:"underline"}}>here</a></Link>.</p>
                </div>
            </div>
            
            <div className={styles.founders} >
                    <h2 className={styles.ldr}  style={{textAlign:"center", fontFamily:"serif", color:"darkblue",fontWeight:"900", marginBottom:"25px", marginTop:"70px"}}>MEET THE LEADERS</h2>
                    
                    <div className={styles.members} >
                        <div className={styles.cl1} >

                            <div><Image className={styles.mage} width="170" height="170" alt="" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/></div>
                            <div><p className={styles.leader} style={{ fontWeight:"600", marginTop:"15px", fontFamily:"-moz-initial", fontSize:"1.5em",textShadow:"1px black" }}><i><a style={{color: "blue", textDecoration:"none"}} href="https://www.linkedin.com/">Lindsay McGonagall</a></i></p>
                            <p>
                             aut nostrum explicabo reprehenderit optio. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.
                            </p></div>
                        </div>
                        <div className={styles.cl1}>
                        <div><Image className={styles.mage} width="170" height="170" alt="" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/></div>
                        <div><p className={styles.leader} style={{ fontWeight:"600", marginTop:"15px", fontFamily:"-moz-initial", fontSize:"1.5em",textShadow:"1px black" }}><i><a style={{color: "blue", textDecoration:"none"}} href="https://www.linkedin.com/">Lindsay McGonagall</a></i></p>
                        <p>
                        aut nostrum explicabo reprehenderit optio. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.
                        </p></div>
                        </div>
                        <div className={styles.cl1}>
                            <div><Image className={styles.mage} width="170" height="170" alt="" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/></div>
                            <div><p className={styles.leader} style={{ fontWeight:"600", marginTop:"15px", fontFamily:"-moz-initial", fontSize:"1.5em",textShadow:"1px black" }}><i><a style={{color: "blue", textDecoration:"none"}} href="https://www.linkedin.com/">Lindsay McGonagall</a></i></p>
                            <p>
                             aut nostrum explicabo reprehenderit optio. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.
                            </p></div>
                        </div>
                        <div className={styles.cl1}>
                            <div><Image className={styles.mage} width="170" height="170" alt=""  src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/></div>
                            <div><p className={styles.leader} style={{ fontWeight:"600", marginTop:"15px", fontFamily:"-moz-initial", fontSize:"1.5em",textShadow:"1px black" }}><i><a style={{color: "blue", textDecoration:"none"}} href="https://www.linkedin.com/">Lindsay McGonagall</a></i></p>
                            <p>
                             aut nostrum explicabo reprehenderit optio. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.
                            </p></div>
                        </div>
                    </div>
                </div>
            <div className={styles.row1}>
                    <div className={styles.subcol1}>
                        <h2 style={{color:"darkblue", textShadow:"1ppx 1px 2px solid blue", marginLeft:"2%", marginTop:"5%"}}>Our Missi<CheckCircle style={{paddingTop:"5px",width:"16px", transform:"translate(0px,3px)"}}/>n</h2>
                        <p style={{fontFamily:"revert", marginRight:"15%",marginLeft:"2%"}}> Eligendi ab temporibus asperiores cupiditate. Voluptatum tas.Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas</p>
                    </div>
                    <div className={styles.subcol2}>
                        <Image width="585%" height="560%" alt="" style={{ justifySelf:"center"}} src="https://thumbs.dreamstime.com/b/business-company-colleagues-stand-files-folders-documents-cartoon-vector-business-company-colleagues-stand-212436384.jpg" />
                    </div>
                </div>
                <div className={styles.row2}>
                <div className={styles.subcol3}>
                        <Image width="585%" height="530%" alt="" src="https://i2.wp.com/englishworldeducation.com/wp-content/uploads/2021/04/schedule-planning-concept-landing-page-ui-web-homepage_1124-1447.jpg?fit=626%2C469&ssl=1" />
                    </div>
                <div className={styles.subcol4}>
                        <h2 style={{color:"darkblue", textShadow:"1ppx 1px 2px solid blue",marginRight:"2%"}}>Our Visi<RemoveRedEyeIcon style={{
                         height:"22px", transform:"translate(0px, 5px)"}}/>n</h2>
                        <p style={{fontFamily:"revert", marginRight:"2%", marginLeft:"5%"}}> Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optioamet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas</p>
                    </div>
                </div>
        </div>
        <Footer />
        </>
    );
}
 
export default About;