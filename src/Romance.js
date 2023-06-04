import React, { useEffect } from 'react'
import Axios from 'axios'
import { API_key } from './API_key'
import { Image_Url } from './API_key'
import './App.css'

export  function Romance() {

    const [OrginalsData,setOrignalData]=React.useState([])

React.useEffect(function(){
    // Logic to make request
    Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=10749 `)
    .then(function(output){
setOrignalData(output.data.results);
    })
    .catch(function(error){
console.log(error);
    })
},[])
    

  return (
    <div>
        <h2 className='netflixorginal-heading'>Romance</h2>
    <div className='Images_Netflixorginal'>
        {
             OrginalsData.map(function(info){
                //console.log(info.poster_path);
                 return <img width="200px" height="250px" src={Image_Url+info.poster_path}></img> 
             })
        }

    </div>
    </div>
  )
}
