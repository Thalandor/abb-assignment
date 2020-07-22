import * as React from 'react';
import styles from './BodyInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

interface Props {
    control: string;
    dev: string;
    devOutTol: string;
    icon: number;
}

const BodyInfo = (props: Props) => {
    let colorClass = '';
    let icon;
    switch (props.icon) {
        case 0:
            colorClass = styles.red;
            icon = faTimesCircle;
            break;
        case 1:
            colorClass = styles.yellow;
            icon = faExclamationCircle;
            break;
        case 2:
        default:
            colorClass = styles.green;
            icon = faCheckCircle;
            break;
    }
    return (
        <div className={styles.container}>
            <span className={styles.controlContainer}>{props.control}</span>
            <span className={styles.devContainer}>{props.dev}</span>
            <span className={styles.devOutTolContainer}>{props.devOutTol}</span>
            <span className={[styles.iconContainer, colorClass].join(' ')}><FontAwesomeIcon icon={icon}></FontAwesomeIcon></span>
        </div>)
}

export default BodyInfo;