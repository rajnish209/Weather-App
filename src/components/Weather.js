import React ,{useEffect, useState} from 'react';
//import axios from "axios";
import "../App.css"


const Weather =()=> {
const[city , setCity] = useState(null);
const[search , setSearch] = useState("mumbai");

useEffect(()=>{
    // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ce287be747d1b018e20330862d49f5b2`)
    // .then((res)=>{
    //    // console.log(res);
    //    setCity(res);
    // })

    const fetchApi = async () => {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=54722c31af4b7055ab46ebbe1c41e621`
      const res = await fetch(url);
      const resyes = await res.json();

      setCity(resyes.main);
      console.log(city);
    };
    //console.log(city);
    fetchApi()
},[search])

  return (
    <div className="box">
    <div className="inputData"></div>
        <input type="text" className="inputFeild" placeholder='Enter city' value ={search}
        onChange={(e)=>{
            setSearch(e.target.value);
        }}></input>


{
  !city ? (
    <p className="errormsg">No data found</p>
  ):(
    <div>
    <div className="info">
                <h1 className="location">
               {/* <FontAwesomeIcon icon="fas fa-street-view" /> */}
                   {search}</h1>
                <h1 className="temp">{city.temp} * c</h1>
                <h3 className="tempmin_max"> Min :{city.temp_min}* C | Max :{city.temp_max}*C</h3>
                </div>
                <div className="wave1"></div>
                <div className="wave2"></div>
                <div className="wave3"></div>
            </div>
  )
}
           
    </div>
    
  )
}

export default Weather;