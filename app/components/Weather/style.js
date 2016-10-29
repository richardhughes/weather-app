import {
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FD6461',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityName: {
        fontSize: 14,
        fontWeight: "100",
        marginBottom: 20
    },
    temperature: {
        fontSize: 62,
        fontWeight: "100",
        marginBottom: 20
    },
    icon: {
        fontFamily: 'weathericons',
        fontSize: 130,
    },
    informationIcon: {
        fontFamily: 'weathericons',
        fontSize: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#666",
        height: 40,
        marginVertical: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5, width: 250
    }

});

export default styles;