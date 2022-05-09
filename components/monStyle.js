import { StyleSheet } from 'react-native'
export default styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 10,
        flexWrap: 'wrap'
    },
    itemLeft: {
        flexDirection: 'row',
        maxWidth: '100%',

        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 4
    },
    itemText: {
        marginHorizontal: 10
    },
    circle: {
        borderColor: '#55BCF6',
        borderWidth: 3,
        width: 24,
        height: 24,
        borderRadius: 24
    },
});

