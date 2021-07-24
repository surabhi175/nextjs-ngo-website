import styles from '../styles/aimsection.module.css'


function Aimsection() {
    const imgList=[
        'url("https://images.unsplash.com/photo-1505155485412-30b3a45080ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cnVyYWwlMjBjaGlsZHJlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")',
        'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21pbGluZyUyMGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")',
        'url("https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21pbGluZyUyMGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")',
    ]

    return(
        <div className={styles.anim}>
            {/* <Image 
                className={styles.imgcont}
                src="/images/aimBg.jpg"
                alt="Background"
                layout='fill'
                objectFit='cover'
                onjectPosition='center'
                /> */}
            <div className={styles.container}>
                <p >Helping mankind live sustainably.</p>
            </div>
        </div>
    )
}

export default Aimsection;