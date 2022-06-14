import React from 'react';

function Loading(Component) {
    return function Load({isData,isLoading}){
        if(isLoading){
            return(
                <h1>Loading...</h1>
            )
        }else{
            return(
                <Component Data={isData}/>
            )
        }
    }
}

export default Loading;