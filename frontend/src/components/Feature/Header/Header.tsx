import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import styles from './Header.module.scss';

interface Props {
    text: string;
    color: Type;
}

enum Type {
    Danger,
    Ok,
    Warning
}

const Header = (props: Props) => {
    let colorClass = '';
    let icon;
    switch (props.color) {
        case Type.Danger:
            colorClass = styles.red;
            icon = faTimesCircle;
            break;
        case Type.Warning:
            colorClass = styles.yellow;
            icon = faExclamationCircle;
            break;
        case Type.Ok:
        default:
            colorClass = styles.green;
            icon = faCheckCircle;
            break;
    }
    return (
        <div className={[styles.container, colorClass].join(' ')}>
            <FontAwesomeIcon icon={faCircle} className={styles.leftIcon} />
            <span className={styles.title}>{props.text}</span>
            <FontAwesomeIcon icon={icon} className={styles.rightIcon}/>
        </div>
    )
}

export default Header;