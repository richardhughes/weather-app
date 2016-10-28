import {
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityName: {
        fontSize: 50,
        color: 'white',
        fontFamily: 'sans-serif-condensed'
    },
    temperature: {
        fontSize: 125,
        color: 'white'
    },
    weather: {
        fontSize: 30,
        fontFamily: 'sans-serif-condensed',
        color: 'white'
    },
    loading: {
        fontSize: 25,
        color: 'white'
    }
});

export default styles;