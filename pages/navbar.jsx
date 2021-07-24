import Link from 'next/link'
import React from 'react';
import styles from '../styles/navbar.module.css'
import { Button } from '@material-ui/core';
import {useState, useEffect} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';


const Navbar = () => {
    const [mobileView, setMobileView] = useState(false);

    const handleClick = () =>{
        setMobileView(!mobileView);
    }

    return ( 
        <div style={{display:"flex", flexDirection:"column"}}>
            <div className={styles.Wrapper}>
                <div className={styles.header}>
                    <div>ABC</div>
                    foundation
                </div>
                <div className={styles.navbar}>
                    <Link href="/"><Button>HOME</Button></Link>
                    <Link href="/work"><Button>WORK</Button></Link>
                    <Link href="/about"><Button>ABOUT</Button></Link>
                    <Link href="/contact"><Button>CONTACT</Button></Link>
                </div>
                <div className={styles.menuicon} style={{color:"black"}}>
                    <IconButton aria-label="menu" onClick={handleClick}>
                        {mobileView ? <ClearIcon style={{color:"red"}} /> : <MenuIcon style={{color:"darkviolet"}} />}
                    </IconButton>
                </div>
            </div>
            {mobileView ?
            <div className={styles.dropdown} style={{width:"full", height:"90px", display:"flex", flexDirection:"column",rowGap:"5px",paddingTop:"6px", color:"purple", justifyContent:"center", alignItems:"center"}}>
                <Link href="/"><a className={styles.opt} style={{fontFamily:"sans", fontSize:"15px"}}>HOME</a></Link>
                <Link href="/work"><a className={styles.opt} style={{fontFamily:"sans", fontSize:"15px"}}>WORK</a></Link>
                <Link href="/about"><a className={styles.opt} style={{fontFamily:"sans", fontSize:"15px"}}>ABOUT</a></Link>
                <Link href="/contact"><a className={styles.opt} style={{fontFamily:"sans", fontSize:"15px", marginBottom:"4px"}}>CONTACT</a></Link>
            </div> : null}
    </div>
     );
}
 
export default Navbar;