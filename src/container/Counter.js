import React, { useState } from 'react';

function Counter(props) {

    const [count,setCount] = useState(0     );

    const Incriment= () => {
        if(count<10){
            setCount(count + 1)
        }
    }

    const Dicriment= () => {
        if(count>0){
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button onClick={()=>Incriment()}>+</button>
            <p>{count}</p>
            <button onClick={()=>Dicriment()}>-</button>
        </div>
    );
}

export default Counter;