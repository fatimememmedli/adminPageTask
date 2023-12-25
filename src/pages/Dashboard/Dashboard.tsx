import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import "./Dashboard.scss"
import { useState,useEffect } from "react";
import axios from "axios";
function Dashboard() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios.get("https://usersapitaskk.onrender.com/users").then((res) => {
      setData(res.data);
    });
  }, []);
  let count = 0 
  data.map((elem)=>{
    elem.posts.map((element)=>{
      return count +=1
    })
  })
  console.log(count)
  console.log(data);
  return (
    <div className="dashboard">
      <Navbar />
      <div className="right">
    <div className="box">
      <div className="circle">
      <FontAwesomeIcon icon={faUsers} />
        <h1>Users</h1>
        <p>{data.length}</p>

      </div>
    </div>
    <div className="box">
      <div className="circle">
      <FontAwesomeIcon icon={faImages} />
        <h1>Posts</h1>
        <p>{count}</p>
      </div>
    </div>
    <div className="analitics">
      <div className="item">
        <p>Posts</p>
        <div className="full1"> </div>
      </div>
      <div className="item">
        <p>Users</p>
        <div className="full2"> </div>
      </div>
      <div className="item">
        <p>Activity</p>
        <div className="full3"> </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Dashboard;
