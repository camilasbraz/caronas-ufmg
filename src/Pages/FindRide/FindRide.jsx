import React from "react";
import {getAllRides, getWithFilters } from '../../utils/db'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, DatePicker } from 'antd';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import { regions } from "../../utils/variables";

const FindRide = () => {
  const [rides, setRides] = useState([]);
  const [filters, setFilters] = useState({});
  const navigate = useNavigate();

  const fetchRides = async ()=> {
    try{
      const currRides = await getAllRides();
      setRides([...currRides]);
    }
    catch(e){
      console.error(e);
    }
  }

  const fetchFilteredRides = async (params)=> {
    try{
      console.log(params)
      const currRides = await getWithFilters(params);
      setRides(currRides);
    }
    catch(e){
      console.error(e);
    }
  }

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
    console.log("currFilters ", filters)
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    var params = []
    if(filters.to) {
      params.push({
        key: "to",
        op: "==",
        value: filters.to
      })
    }
    if(filters.from) {
      params.push({
        key: "from",
        op: "==",
        value: filters.from
      })
    }
    if(filters.hour || filters.day) {
      params.push({
        key: "time",
        op: ">=",
        value: new Date(
          filters.day ? filters.day.year() : (new Date()).getFullYear() ,
          filters.day ? filters.day.month() : (new Date()).getMonth() ,
          filters.day ? filters.day.date() : (new Date()).getDate() ,
          filters.hour ? filters.hour.hour() : 0,
          filters.hour ? filters.hour.minute() : 0
        ),
      })
    }
    fetchFilteredRides(params);
  };

  useEffect(()=>{
    fetchRides();
  },[])

  return (
    <div>
      <form onSubmit={handleFilterSubmit}>
      <Select
      placeholder="Partida"
      style={{
        width: 120,
      }}
      onChange={(value)=>handleFilterChange('from', value)}
      options={regions}
      allowClear
    />
    <Select
      placeholder="Destino"
      style={{
        width: 120,
      }}
      onChange={(value)=>handleFilterChange('to', value)}
      options={regions}
      allowClear
    />
     <DatePicker onChange={(value)=>handleFilterChange('day', value)} />
     <TimePicker onChange={(value)=>handleFilterChange('hour', value)} defaultOpenValue={dayjs('00:00', 'HH:mm')} />
        <button type="submit">Filtrar</button>
      </form>
      {
        rides.map( ride => {
          return(
            <button onClick={()=>navigate(`/informacoes/${ride.id}`)} style={{margin: "10px"}}>
              {ride.from} - {ride.to} ({ride.time.toUTCString()})
            </button>
          )
        })
      }
    </div>
  );
};

export default FindRide;