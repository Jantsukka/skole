import React, {Component} from 'react'
import { Text, View } from 'react-native'
import styles from '../style/style'

export default class footer extends Component {
    render() {
        return (
          <View style={styles.footer}>
              <Text style={styles.author}>
                  Author: Janne Heilala
              </Text>
          </View>
        )
    }
}