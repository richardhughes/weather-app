import React, {Component} from 'react'
import Keys from '../../config/api';
import WeatherView from './WeatherView';

export default class MyContainerComponent extends Component {
    constructor() {
        super()
        this.state = {
            data: '',
            isLoading: true
        }
    }

    componentWillMount = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.getWeatherData(position.coords.longitude, position.coords.latitude);
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
        );
    }

    getWeatherData = (longitude, latitude) => {
        fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&APPID=' + Keys.openWeatherMap, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <WeatherView
                dataFromFetch={this.state.data}
                isLoading={this.state.isLoading}
                getData={this.getData}
            />
        )
    }
}