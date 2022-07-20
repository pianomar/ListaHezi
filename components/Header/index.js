import React from 'react'

import { View, Text, StyleSheet } from "react-native"
import Colors from '../../constants/colors'

const Header = props => {
    const { title } = props

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 180,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 22,
    }
})

export default Header