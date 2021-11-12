import React, {useState, useEffect} from 'react'
import {content} from '../../utils/MenuJson';

export default function Menu() {
    const [data, setData] = useState(content);
    const [idList, setIdList] = useState();

    useEffect(() => {
        setIdList(Object.keys(data.items));
    },[]);


    return (
        <div class="container">
    </div>
    )
}
