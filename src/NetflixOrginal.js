import React, { useEffect } from 'react'
import Axios from 'axios'
import { API_key } from './API_key'
import { Image_Url } from './API_key'
 import Youtube from "react-youtube"
// import movietrailer from 'movie-trailer'
import './App.css'
import MovieDetail from './MovieDetail'
import MovieTrailer from 'movie-trailer'
import movieTrailer from 'movie-trailer'


export  function NetflixOrginal() {

    const [OrginalsData,setOrignalData]=React.useState([])
    const [myId,setMyId]=React.useState("")

React.useEffect(function(){
    // Logic to make request
    Axios.get(`https://api.themoviedb.org/3/discover/tv/?api_key=${API_key}&with_network=123 `)
    .then(function(output){
setOrignalData(output.data.results);
    })
    .catch(function(error){
console.log(error);
    })
},[])
function handleclick(MovieData){
    const movieName=MovieData.name
    movieTrailer(movieName)
    .then(function(output){
       // console.log(output);
 //console.log(new URLSearchParams(new URL(output).search).get("v"));
 setMyId(new URLSearchParams(new URL(output).search).get("v"))
    })
    .catch(function(error){
console.log(error);
    })
}
    

  return (
    <div>
        <h2 className='netflixorginal-heading'>NetFlix Orginal</h2>
    <div className='Images_Netflixorginal'>
        {
             OrginalsData.map(function(info){
                //console.log(info.poster_path);
                 return <img width="200px" height="250px" src={Image_Url+info.poster_path}  onClick={()=>handleclick(info)}></img> 
             })
        }

    </div>
   {myId ? <Youtube videoId={myId}></Youtube> : null}


    </div>
  )
}
