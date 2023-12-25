import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "./../../redux/store/store.ts";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./../../components/Navbar/Navbar.tsx";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import axios  from "axios";
import "./Detail.scss"
function Detail() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://usersapitaskk.onrender.com/users").then((res)=>{
      setData(res.data)
    })
  }, []);


  const { id } = useParams();
console.log(id)
  const datas = useSelector((state: RootState) => state.users.users);
  let findUser = data.find((elem)=>elem.id ==id)
  console.log(findUser)
  console.log(data);
  console.log(datas)

  return (
    <div className="posts-head">
      <Navbar />
      <div className="head">
        <h1>User's Posts</h1>
        <div className="posts">
          {findUser.posts && findUser.posts.map((element)=>{
            return <Card sx={{ width: 345 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={element.imgSRC}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {element.tittle}

              </Typography>
              <Typography variant="body2" color="text.secondary">
              Post by {findUser.username}
                
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={()=>{
                console.log(element.id)
                let arr = findUser.posts.filter((elem)=> elem.id !== element.id)
                console.log(arr)
                findUser.posts = arr
                axios.patch("https://usersapitaskk.onrender.com/users" + id,findUser
                )
              }} color="error" size="small">Delete</Button>
            </CardActions>
          </Card>
          })}
        
   
        </div>
        

      </div>
    </div>
  );
}

export default Detail;
