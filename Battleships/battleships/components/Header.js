import React, {Component} from 'react'
import { render } from 'react-dom'
import { Text, View } from 'react-native'
import styles from '../style/style'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>
                    Battleships
            </Text>
            </View>
        )
    }
}