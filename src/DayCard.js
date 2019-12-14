
import React from 'react';
var moment = require('moment');

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

  return (
    <div className="col-sm-2">
      <div class="shadow-none p-3 mb-5 bg-light rounded">
      <div className="card">
        <h3 className="card-title" style={{paddingLeft:'5px',paddingTop:'15px',color:'#5255b6'}}>{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
        <i className={imgURL}></i>
        <h2>{Math.round(reading.main.temp)} °C</h2>
        <span style={{color:'gray'}}>{reading.main.temp_min} °C</span>
        <span style={{color:'gray'}}>{reading.main.temp_max} °C</span>
        <h2><span style={{color:'#59c5cf'}}>{reading.main.humidity}&#37;</span></h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
      <br/>
    </div>
    </div>
  )
}

export default DayCard;