import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
const image = { uri: 'https://i.imgur.com/mm4PWx8.png' };

export default class User extends Component {
  async componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.header}>
            {/* <Icon style={styles.arrow} name='arrow-left' size={22} color='#fff' /> */}

            <Icon name='github-alt' size={30} color='#fff' />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
