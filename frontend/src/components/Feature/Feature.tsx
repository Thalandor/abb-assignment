import * as React from 'react';
import Header from './Header/Header';
import styles from './Feature.module.scss';
import Body from './Body/Body';
import { FeatureData } from '../../models/FeatureData';
import Footer from './Footer/Footer';
export interface Props{
    name: string;
    color: number;
    data: FeatureData[];
}
const Feature = (props: Props) => {
    return (
    <div className={styles.featureContainer}>
        <Header text={props.name} color={props.color}></Header>
        <Body data={props.data}></Body>
        <Footer></Footer>
    </div>)
}

export default Feature;