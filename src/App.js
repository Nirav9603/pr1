import React, { useEffect, useState } from 'react';
import Loading from './container/Loading';
import Home from './container/Home';

const HomeWithLoading = Loading(Home);

function App(props) {

  const [loading,setLoading] = useState(false);
  const [data,setData] = useState([]);

  const orgData = [
    {id:101,name:'nirav'},
    {id:102,name:'kishan'}
    
  ];

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{setLoading(false); setData(orgData)}, 2000)
  },[])
  return (
    <div>
        <HomeWithLoading
          isLoading={loading}
          isData={data}
        />
  </div>
  );
}

export default App;