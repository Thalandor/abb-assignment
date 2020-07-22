import * as React from 'react';
import Part, { Props as PartProps} from './Part';
import socket from '../../services/socketConnection';
import { useState, useEffect } from 'react';

const defaultData: PartProps = {
    title: "Part A",
    featureData: [
        {
            color: 1,
            name: "Feature A",
            data: [
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                },
            ]
        },
        {
            color: 0,
            name: "Feature B",
            data: [
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                }
            ]
        },
        {
            color: 2,
            name: "Feature C",
            data: [
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                }
            ]
        },
        {
            color: 2,
            name: "Feature D",
            data: [
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                }
            ]
        },
        {
            color: 2,
            name: "Feature E",
            data: [
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                }
            ]
        },
        {
            color: 0,
            name: "Feature F",
            data: [
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                }
            ]
        },
        {
            color: 1,
            name: "Feature G",
            data: [
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                }
            ]
        },
        {
            color: 1,
            name: "Feature H",
            data: [
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                }
            ]
        },
        {
            color: 0,
            name: "Feature I",
            data: [
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                }
            ]
        },
        {
            color: 1,
            name: "Feature J",
            data: [
                {
                    control: "X",
                    dev: "1",
                    devOutTol: "2",
                    icon: 2
                },
                {
                    control: "Y",
                    dev: "3",
                    devOutTol: "1",
                    icon: 2
                },
                {
                    control: "Z",
                    dev: "6",
                    devOutTol: "1",
                    icon: 2
                }
            ]
        },
    ]
}


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
            {partData ? <Part featureData={partData.featureData} title={partData.title}></Part> : null}
            {/* <Part featureData={defaultData.featureData} title={defaultData.title}></Part> */}
        </>
    )
}

export default PartContainer;