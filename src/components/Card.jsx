import React from 'react'
import {FiArrowRight} from "react-icons/fi"
import styles from "./card.module.css"

const Card = (props) => {
    // console.log(props)
  return (
    <div className={styles.maindiv} style={{backgroundColor:props.color}}>
        <div className={styles.firstdiv}>
            <div>{props.date}</div>
            <img src={props.image} alt="" />
        </div>
        <button className={styles.button}>Case Study</button>
        <h1>{props.brand} Gift</h1>
        <h1>{props.pay}</h1>
        <div className={styles.lastdiv}>
            <h3>{props.platform} - Mobile</h3>
            <FiArrowRight className={styles.iconsize}/>
        </div>
        
    </div>
  )
}

export default Card