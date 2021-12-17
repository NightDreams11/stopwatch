import React from "react";
import styles from "./DisplayComponent.module.scss"

const DisplayComponent = (props) => {
    return <div>
        <span className={styles.span}>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>
        <span className={styles.span}>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>
        <span className={styles.span}>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>
        <span className={styles.span}>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>
    </div>
}

export default DisplayComponent;