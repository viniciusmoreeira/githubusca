import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import { AsyncStorage } from 'react-native';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import api from '../../services/api';

import styles from './styles';
const image = { uri: 'https://i.imgur.com/mm4PWx8.png' };

class Main extends Component {
  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    this.setState({ loading: true });

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      avatar: response.data.avatar_url,
      location: response.data.location,
      id: response.data.id,
      followers: response.data.followers,
      public_repos: response.data.public_repos,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
      loading: false,
    });

    Keyboard.dismiss();
  };

  handleNavigate = (user) => {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  };

  render() {
    const { users, newUser, loading } = this.state;

    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.header}>
            <FontAwesome name='github-alt' size={30} color='#fff' />
            <Text style={styles.headerText}>GithuBusca</Text>
          </View>

          <View style={styles.main}>
            <Text style={styles.title}>Adicionar usuário</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='Nome do usuário'
                placeholderTextColor='#999'
                value={newUser}
                onChangeText={(text) => this.setState({ newUser: text })}
                returnKeyType='send'
                onSubmitEditing={this.handleAddUser}
              />
              <TouchableOpacity
                style={styles.inputButton}
                onPress={this.handleAddUser}
              >
                {loading ? (
                  <ActivityIndicator color='#fff' />
                ) : (
                  <FontAwesome name='plus' size={24} color='#fff' />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            style={styles.usersList}
            showsVerticalScrollIndicator='false'
            data={users}
            keyExtractor={(user) => user.login}
            renderItem={({ item }) => (
              <View style={styles.user}>
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.avatar}
                ></Image>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.username}>{item.login}</Text>
                <Text style={styles.location}>{item.location}</Text>

                <TouchableOpacity
                  style={styles.profileButton}
                  onPress={() => this.handleNavigate(item)}
                >
                  <Text style={styles.profileButtonText}>Ver perfil</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </ImageBackground>
      </View>
    );
  }
}

export default Main;
