import React from 'react';
import styles from '../styles/work.module.css'
import Typography from '@material-ui/core/Typography';
import Head from 'next/head'
import Navbar from './navbar';
import Navbanner from './navbanner';
import Footer from './footer';

export default function Cards(){
    return(
        <div>
            <Head>
                <title>NGO website | Work</title>
                <meta name="keywords" content="ngo website"></meta>
            </Head>
            <Navbanner/>
            <Navbar/>
            <div className={styles.encloser}>
            <div>
                <div style={{display:"flex", flexDirection:"column"}}>
                <div><h1 style={{textAlign:"center", color:"navy"}}>OUR WORK</h1></div>
                <div className={styles.Card}>
                <div style={{display:"flex", flexDirection:"column",background:"white", boxShadow: "2px 2px 5px grey", backgroundColor:"azure"}} className={styles.card1}>
                        <div style={{height:"176px"}} className={styles.cardImg1}></div>
                        <div>
                            <Typography style={{textAlign:"center", color:"darkGreen", fontWeight:"700", margin: "12px 0px", fontSize:"medium", fontFamily:"cursive"}} gutterBottom variant="h5" component="h2">
                                    TREE PLANTATION AT XYZ
                                </Typography>
                                <div ><hr style={{margin:"2px 120px", borderTop:"1px dashed green"}} /></div>
                                <Typography style={{fontSize:"1em", textAlign:"center" ,padding:"2px 15px",fontSize:"15px", }} >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab  quasi cupiditate.  consectetur adipisicing elit.
                                <div><a style={{fontSize:"small", color:"blue", textDecoration:"underline"}}>Click to read full article</a></div>
                                </Typography>

                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"column",background:"white", boxShadow: "2px 2px 5px grey", backgroundColor:"azure"}} className={styles.card1}>
                            <div style={{height:"176px"}} className={styles.cardImg2}></div>
                        <div>
                            <Typography style={{textAlign:"center", color:"brown", fontWeight:"700", margin: "12px 0px", fontSize:"medium", fontFamily:"cursive"}} gutterBottom variant="h5" component="h2">
                                    BEACH CLEANING CAMPAIGN AT GDC
                                </Typography>
                                <div ><hr style={{margin:"2px 120px", borderTop:"1px dashed brown"}} /></div>
                                <Typography style={{fontSize:"1em", textAlign:"center" ,padding:"2px 15px",fontSize:"15px" }} >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab  quasi cupiditate.  consectetur adipisicing elit.
                                <div><a style={{fontSize:"small", color:"blue", textDecoration:"underline"}}>Click to read full article</a></div>
                                </Typography>

                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"column",background:"white", boxShadow: "2px 2px 5px grey", backgroundColor:"azure"}} className={styles.card1}>
                            <div style={{height:"176px"}} className={styles.cardImg3}></div>
                        <div>
                            <Typography style={{textAlign:"center", color:"darkOrange", fontWeight:"700", margin: "12px 0px", fontSize:"medium", fontFamily:"cursive"}} gutterBottom variant="h5" component="h2">
                                    WALL PAINTING AT LMN
                                </Typography>
                                <div ><hr style={{margin:"2px 120px", borderTop:"1px dashed orange"}} /></div>
                                <Typography style={{fontSize:"1em", textAlign:"center" ,padding:"2px 15px",fontSize:"15px" }} >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab  quasi cupiditate.  consectetur adipisicing elit.
                                <div><a href="#" style={{fontSize:"small", color:"blue", textDecoration:"underline"}}>Click to read full article</a></div>
                                </Typography>

                        </div>
                    </div>
                </div>
                </div>
            </div> 
            <div className={styles.Card}>
                <div style={{display:"flex", flexDirection:"column",background:"white", boxShadow: "2px 2px 5px grey", backgroundColor:"azure"}} className={styles.card1}>
                        <div style={{height:"176px"}} className={styles.cardImg1}></div>
                    <div>
                        <Typography style={{textAlign:"center", color:"darkGreen", fontWeight:"700", margin: "12px 0px", fontSize:"medium", fontFamily:"cursive"}} gutterBottom variant="h5" component="h2">
                                TREE PLANTATION AT XYZ
                            </Typography>
                            <div ><hr style={{margin:"2px 120px", borderTop:"1px dashed green"}} /></div>
                            <Typography style={{fontSize:"1em", textAlign:"center" ,padding:"2px 15px",fontSize:"15px" }} >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab  quasi cupiditate.  consectetur adipisicing elit.
                            <div><a style={{fontSize:"small", color:"blue", textDecoration:"underline"}}>Click to read full article</a></div>
                            </Typography>

                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"column",background:"white", boxShadow: "2px 2px 5px grey", backgroundColor:"azure"}} className={styles.card1}>
                        <div style={{height:"176px"}} className={styles.cardImg2}></div>
                    <div>
                        <Typography style={{textAlign:"center", color:"brown", fontWeight:"700", margin: "12px 0px", fontSize:"medium", fontFamily:"cursive"}} gutterBottom variant="h5" component="h2">
                                BEACH CLEANING CAMPAIGN AT GDC
                            </Typography>
                            <div ><hr style={{margin:"2px 120px", borderTop:"1px dashed brown"}} /></div>
                            <Typography style={{fontSize:"1em", textAlign:"center" ,padding:"2px 15px",fontSize:"15px" }} >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab  quasi cupiditate.  consectetur adipisicing elit.
                            <div><a style={{fontSize:"small", color:"blue", textDecoration:"underline"}}>Click to read full article</a></div>
                            </Typography>

                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"column",background:"white", boxShadow: "2px 2px 5px grey", backgroundColor:"azure"}} className={styles.card1}>
                        <div style={{height:"176px"}} className={styles.cardImg3}></div>
                    <div>
                        <Typography style={{textAlign:"center", color:"darkOrange", fontWeight:"700", margin: "12px 0px", fontSize:"medium", fontFamily:"cursive"}} gutterBottom variant="h5" component="h2">
                                WALL PAINTING AT LMN
                            </Typography>
                            <div ><hr style={{margin:"2px 120px", borderTop:"1px dashed orange"}} /></div>
                            <Typography style={{fontSize:"1em", textAlign:"center" ,padding:"2px 15px",fontSize:"15px" }} >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab  quasi cupiditate.  consectetur adipisicing elit.
                            <div><a href="#" style={{fontSize:"small", color:"blue", textDecoration:"underline"}}>Click to read full article</a></div>
                            </Typography>

                    </div>
                </div>
        
            </div> 
        </div>
        <Footer />  
        </div>   
   )
}