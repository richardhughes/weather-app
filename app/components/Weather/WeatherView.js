import React, {Component} from 'react'
import {
    Text,
    View,
    Image
} from 'react-native'

import styles from './style'

const WeatherView = (props) => {
    if (props.isLoading) {
        return (
            <Image
                source={{uri: 'http://match4shaadi.com/images/content-new3.png'}}
                style={styles.container}>
                <Text style={styles.loading}>
                    Fetching your location...
                </Text>
            </Image>
        )
    }
    return (
        <Image
            source={{uri: 'http://match4shaadi.com/images/content-new3.png'}}
            style={styles.container}>
            <Text style={styles.cityName}>
                { props.dataFromFetch.name }
            </Text>
            <Text style={styles.temperature}>
                { props.dataFromFetch.main.temp.toFixed(1) } &deg;C
            </Text>
            <Text style={styles.weather}>
                { props.dataFromFetch.weather[0].description.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                }) }
            </Text>
        </Image>
    );
}
export default WeatherView