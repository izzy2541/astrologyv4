import React from 'react'
import styles from './Popup.module.scss'



function Popup(props) {

    return(props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupinner}>
                <button className={styles.closebtn} onClick={()=> props.setTrigger(false)}> x </button>  
                <div className={styles.popupText} >
                    WELCOME TO <br></br>ASTROLOGY
                    <br></br>.COM
                <div className={styles.smallpopupText}>Enter your email below if you&apos;d like your daily horoscope sent to your inbox</div>
                    </div>
                <div className={ styles.thisIsForm}  style={{backgroundColor: "transparent"}}>
                    <input type="text" id="first" name="first" style={{backgroundColor: "white"}}/>
                    <button onClick={()=> props.setTrigger(false)} type="submit" placeholder="type Email here..." style={{backgroundColor: "white", color: "black"}}>Submit</button>
                </div>
             
                { props.children }
  
            </div>
        </div>
    ) : "";
 
}

export default Popup;