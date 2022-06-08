import React, { useState } from 'react';

function FamousPlaces(props) {
    const [countryName,setCountry]=useState('India');
    const [placeName,setPlace]=useState('Taj Mahal');

    const changeCountry=()=>{
        setCountry('US');
        setPlace('Statue Of Liberty');
    }
    
    
   

    return (
        <div>
            <h1>Country & Famous Places</h1>
            <h3>{countryName}</h3>
            <h4>{placeName}</h4>
            <button onClick={()=>changeCountry()}>Change</button>
        </div>
    );
}

export default FamousPlaces;