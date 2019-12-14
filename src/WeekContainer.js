import React from 'react';
import DayCard from './DayCard';
import Form from './formComponent'

class WeekContainer extends React.Component {
    state = {
        fullData: [],
        error: false
      }

    getWeather = async e => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        if(city&&country){
            const weatherURL =
        `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=06b5855c050a6ca202151690e28e07b7`
    
        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
          this.setState({
            fullData: data.list,
            error: false
          }, () => console.log(this.state))
        })
        }else{
            this.setState({error:true});
        }
      }

    formatDayCards = () => {
        return this.state.fullData.map((reading, index) => <DayCard reading={reading} key={index} />)
    }
    
    render() {
      return (
        <div>
        <h1 className="display-2 jumbotron" style={{backgroundColor:'#1c5e74'}}><Form loadweather={this.getWeather} error={this.state.error} /></h1>
          <div className="container">
          <div className="row justify-content-center">
  
            {this.formatDayCards()}
  
          </div>
          </div>
        </div>
      )
    }
  }

export default WeekContainer;