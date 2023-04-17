import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataModal from './Modals/DataModal';
import EditModal from './Modals/EditModal';
import { useDispatch, useSelector } from 'react-redux'
import { DeleteData } from '../actions/userData.action';
import { getUData } from '../actions/getData.action';

function Home() {

  // const [Data, setData] = useState([]);
  const [Show, setShow] = useState(false);
  const [Eshow, setEshow] = useState(false);
  const [Edata, setEdata] = useState([]);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.getUData.data)

  useEffect(() => {
    getData()
  }, []);

  let getData = () => {
    dispatch(getUData())
    // axios({
    //   method: 'GET',
    //   url: "http://localhost:3000/user"
    // })
    //   .then((response) => {
    //     setData(response.data)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  let handleDelete = (data) => {

    if (window.confirm("Are you sure to delete this data?")) {

      dispatch(DeleteData(data))
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/user/${data.id}`
      })
        .then((response) => {
          getData()
        })
      
    }
    getData()
  }

  let handleEdit = (data) => {
    setEdata(data)
    setEshow(true)
  }

  let showModal = () => {
    setShow(true)
  }

  return (
    <div>
      <h1>CRUD OPRATION</h1>
      <DataModal Show={Show} setShow={setShow} callBack={getData} />
      <EditModal Show={Eshow} setShow={setEshow} callBack={getData} data={Edata}/>
      <Button variant="primary" onClick={() => showModal()}>Add User</Button>

      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d, i) => {
              return (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td><Button variant="danger" onClick={() => handleDelete(d)}>Delete</Button> <Button variant="primary" onClick={() => handleEdit(d)}>Edit</Button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Home;
