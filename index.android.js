import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import WeatherContainer from './app/components/Weather/container';

export default class WeatherApp extends Component {
    render() {
        return (
            <WeatherContainer/>
        );
    }
}

AppRegistry.registerComponent('WeatherApp', () => WeatherApp);
