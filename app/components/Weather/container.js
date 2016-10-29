import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native'
import FetchWeather from './model';
import WeatherIcon from '../utils/icons';
import styles from './style';

export default class WeatherContainer extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            searchedCity: 'London',
            main: {
                temp: 12
            },
            sys: {
                country: 'GB'
            }
        };
        this.getWeather();
    }

    getWeather() {
        FetchWeather(this.state.searchedCity)
            .then(response => {
                response.icon = WeatherIcon(response.weather[0].icon);
                response.isLoading = false;
                response.weatherType = response.weather[0].main;
                this.setState(response);
            });
    }

    _getTime(timestamp) {
        let date = new Date(timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }

    onChangeText(city) {
        this.setState({
            searchedCity: city
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>Loading...</Text>
                </View>
            );
        }

        return (

            <View style={styles.container}>
                <Text style={styles.icon}>
                    {this.state.icon}
                </Text>
                <Text style={styles.temperature}>
                    {this.state.main.temp.toFixed(1)} &deg;C
                </Text>
                <Text style={styles.cityName}>
                    {this.state.name}, {this.state.sys.country}
                </Text>

                <View style={{
                    flexDirection: 'row', justifyContent: 'center',
                    alignItems: 'center', justifyContent: 'space-between', width: 350
                }}>
                    <View>
                        <Text style={styles.informationIcon}>
                            {'\uf051'}
                            { this._getTime(this.state.sys.sunrise) }
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.informationIcon}>
                            {'\uf052'}
                            { this._getTime(this.state.sys.sunset) }
                        </Text>
                    </View>
                </View>
                <TextInput style={styles.input}
                           placeholder={"Enter a city name"}
                           onChangeText={this.onChangeText.bind(this)}
                           onSubmitEditing={this.getWeather.bind(this)}
                           clearButtonMode={"always"}
                           clearTextOnFocus={true}
                           enablesReturnKeyAutomatically={true}
                           returnKeyType={"search"}/>
            </View>
        )
    }
}