import * as React from 'react';
import styles from './Body.module.scss';
import BodyHeader from './BodyHeader';
import { FeatureData } from '../../../models/FeatureData';
import BodyInfo from './BodyInfo';
interface Props {
    data: FeatureData[];
}
const Body = (props: Props) => {
    return (
        <div className={styles.container}>
            <BodyHeader></BodyHeader>
            {props.data.map((data, index) =>
                <BodyInfo control={data.control} dev={data.dev} devOutTol={data.devOutTol} icon={data.icon} key={index}></BodyInfo>
            )}
        </div>)
}

export default Body;