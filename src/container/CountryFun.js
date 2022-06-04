import React, { useState } from 'react';

function CountryFun(props) {
    const [countryName,setCountry]=useState('India');

    const changeCountry= ()=>{
        setCountry('US');
    }
    return (
        <div>
            <h1>Function Based Component For Country</h1>
            <p>{countryName}</p>
            <button onClick={()=>changeCountry()}>Change Country</button>
        </div>
    );
}

export default CountryFun;