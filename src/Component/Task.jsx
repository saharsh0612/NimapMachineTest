import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import NavbarMenu from './Navbar';

// import { Link } from "react-router-dom";

// to get the data from LS

const getLocalItmes = () => {
    let list = localStorage.getItem('data');
    console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('data'));
    } else {
        return [];
    }
}

const Task = () =>  {
        
        const [data, setData] = useState([getLocalItmes])

  const columns = [
    { title: "ID", field: "id" },
    { title: "Title", field: "title" },
    { title: "Completed", field: "completed" },
    { title: "Action", field: "" },
  ]


  const dataList = []; //list for local state
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
        // console.log(resp)
        dataList.push(resp)
        console.log("this data", dataList) //data to be stored in localstorage
        localStorage.setItem(data, JSON.stringify(dataList))
      })
  }, [])

  return (
    <div className="App">
      <NavbarMenu />
      <MaterialTable
        title="Task Data"
        data = {data}
        columns={columns}
      />
      <button class="btn btn-primary">Add Task</button>
    </div>
  );
    
}

export default Task