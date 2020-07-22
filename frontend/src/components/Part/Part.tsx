import * as React from 'react';
import Feature, { Props as FeatureProps } from '../Feature/Feature';
import styles from './Part.module.scss';

export interface Props {
    title: string;
    featureData: FeatureProps[];
}

const Part = (props: Props) => {
    return (
        <div className={styles.container}>
            <span className={styles.titleContainer}>{props.title}</span>
            <div className={styles.featureContainer}>
                {props.featureData.map(
                    data => <Feature color={data.color} data={data.data} name={data.name}></Feature>
                )}
            </div>
        </div>)
}

export default Part;