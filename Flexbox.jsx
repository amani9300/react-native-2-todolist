import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flexbox = () => {
    return (
        <View style={styles.container} >
            <View style={styles.redBox}>
                <Text>1</Text>
            </View>

            <View style={styles.blueBox}>
                <Text>2</Text>
            </View>

            <View style={styles.greenBox}>
                <Text>3</Text>
            </View>
        </View>
    )
}

export default Flexbox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 5,
        // justifyContent:'space-evenly',
        // alignItems:'center',
        height: 300,
    },
    redBox: {
        // width: 100,
        // height: 100,
        backgroundColor: 'red',
        flex: 3,
    },
    blueBox: {  // 3 + 5 + 1 = 9
       
        // width: 100,
        // height: 100,
        backgroundColor: 'blue',
        flex: 5
    },
    greenBox: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        flex: 1
    }
})

