import * as React from 'react';
import Part, { Props as PartProps} from './Part';
import socket from '../../services/socketConnection';
import { useState, useEffect } from 'react';

const PartContainer = () => {
    const [partData, setPartData] = useState<PartProps>();
    useEffect(() => {
        socket.on('message', function(data: PartProps){
            setPartData(data);
        });
        return () => {
            socket.off('message');
        }
    }, []);
    return (
        <>
            {partData ? <Part featureData={partData.featureData} title={partData.title}></Part> : 'Waiting for a new part...'}
        </>
    )
}

export default PartContainer;