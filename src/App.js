import React, { useEffect, useState } from 'react';
import Home from './container/Home';
import Loading from './container/Loading';

const HomeWithLoading = Loading(Home);

function App(props) {

  const [loading,setLoading] = useState(false);
  const [data,setData] = useState([]);

  const EmployeeData =

[

    {

        id: 101,

        name: 'Amit',

        joining_date: "01-06-2021",

        salary: 50000

    },

    {

        id: 102,

        name: 'Piyush',

        joining_date: "01-01-2019",

        salary: 60000

    },

    {

        id: 103,

        name: 'Meet',

        joining_date: "01-03-2020",

        salary: 25000

    },

    {

        id: 104,

        name: 'Lalit',

        joining_date: "01-12-2021",

        salary: 30000

    }

];

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{setLoading(false); setData(EmployeeData)}, 2000)
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