import React, { useEffect, useState } from 'react';

function TimeFun(props) {

    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date())
    }

    useEffect(()=>{
        setInterval(() => tick(), 1000);
    },[])

    return (
        <div>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default TimeFun;