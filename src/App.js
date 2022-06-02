import logo from './logo.svg';
import './App.css';

function App() {

  const person = {
    name: "Amit",
    age: 25
  }
  for (let k in person) {
    console.log(k + " : " + person[k]);
  }

  const persona = [
    {
      name: "Amit",
      age: 25,
    },
    {
      name: "Piyush",
      age: 40,
    },
  ];

  persona.map((p, i) => {
    for (let ka in p) {
      console.log(ka + " : " + p[ka]);
    }
  })

  const personb = {
    name: "Amit",
    age: 25,
    course: [
      "C",
      "HTML"
    ]
  }

  for (let kb in personb) {
    if (kb === "course") {
      personb.course.map((d, i) => {
        console.log(d);
      })
    } else {
      console.log(kb + " : " + personb[kb]);
    }
  }

  const personc = [
    {
      name: "Amit",
      age: 25,
      course: [
        "C",
        "HTML"
      ]
    },
    {
      name: "Ajay",
      age: 40,
      course: [
        "Java",
        "JavaScript"
      ]
    }
  ]

  personc.map((pc, ic) => {
   for(let kc in pc){

     if(kc === "course"){
      pc.course.map((d, i) => {
        console.log(d);
      })
     } else{
      console.log(kc + " : " + pc[kc]);
     }
   }
  })

  const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
  }

  for(let k in myObj){
    if(k === "cars"){
      for(let k1 in myObj[k]){
        console.log(myObj[k][k1]);
      }
    } else{
      console.log(k + " : " + myObj[k]);
    }
  }

  //--- Medicine Data ---
  let medicineData = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  //--- Employee Data ---
  let employeeData = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]
  let employeefilter = employeeData.filter((efd, efi) => efd.status === true);
  let totalExpense = employeefilter.reduce((acc, ed, ei) => acc + ed.salary + ed.bonus, 0);

  let medicinefilter = medicineData.filter((mfd, mfi) => mfd.status === true);
  let total = medicinefilter.reduce((acc, md, mi) => acc + md.price, 0);

  return (
    <div>
      <h1 align="center">Medicine Data</h1>
      <table border="1px" width="750px" cellSpacing="0" align="center" cellPadding="0">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Expiry</th>
          <th>Status</th>
          <th>Price</th>
          <th>Total Price</th>
        </tr>
        {
          medicinefilter.map((datam, index) => {
            let { id, name, quantity, expiry, status, price } = datam;
            return (
              <tr key={index}>
                <td align="center">{id}</td>
                <td align="center">{name}</td>
                <td align="center">{quantity}</td>
                <td align="center">{expiry}</td>
                <td align="center">{status.toString()}</td>
                <td align="center">{price}</td>
                {index === 0 ? <td align="center" rowSpan="6">{total}</td> : null}
              </tr>
            )
          })
        }
      </table>

      <>
        <br></br>
      </>
      <h1 align="center">Employee Data</h1>
      <table border="1px" width="750px" align="center" cellSpacing="0" cellPadding="0">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Bonus</th>
          <th>Status</th>
          <th>Total Salary</th>
          <th>Total Expense </th>
        </tr>
        {
          employeefilter.map((datae, indexe) => {
            let { name, age, salary, bonus, status } = datae;
            return (
              <tr key={indexe}>
                <td align="center">{name}</td>
                <td align="center">{age}</td>
                <td align="center">{salary}</td>
                <td align="center">{bonus}</td>
                <td align="center">{status.toString()}</td>
                <td align="center">{salary + bonus}</td>
                {indexe === 0 ? <td align="center" rowSpan="6">{totalExpense}</td> : null}
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
