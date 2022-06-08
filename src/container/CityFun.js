import React, { useState } from 'react';

function CityFun(props) {

    const [cityName,setCity]=useState('Surat');

    const changeCity=()=>{
        setCity('Baroda')
    }

    return (
        <div>
             <h1>Function Based Component For City</h1>
             <p>{cityName}</p>
             <button onClick={()=>changeCity()}>Change</button>
        </div>
    );
}

export default CityFun;