import * as React from 'react';
import styles from './BodyHeader.module.scss';

const BodyHeader = () => {
    return (
    <div className={styles.container}>
        <span className={styles.controlContainer}>Control</span>
        <span className={styles.devContainer}>Dev</span>
        <span className={styles.devOutTolContainer}>Dev out tol</span>
    </div>)
}

export default BodyHeader;