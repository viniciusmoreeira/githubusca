import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import api from '../../services/api';

import styles from './styles';
const image = { uri: 'https://i.imgur.com/mm4PWx8.png' };

export default class User extends Component {
  state = {
    repos: [],
  };

  async componentDidMount() {
    const { route } = this.props;
    const user = route.params.user;

    const response = await api.get(`/users/${user.login}/repos`);

    this.setState({ repos: response.data });
  }

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  render() {
    const { route } = this.props;
    const { repos } = this.state;
    const user = route.params.user;

    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => this.handleNavigate()}
            >
              <FontAwesome name='arrow-left' size={22} color='#fff' />
            </TouchableOpacity>
            <Text style={styles.headerText}>{user.name}</Text>
            <FontAwesome name='github-alt' size={30} color='#fff' />
          </View>

          <View style={styles.user}>
            <Image source={{ uri: user.avatar }} style={styles.avatar}></Image>
            <Text style={styles.username}>{user.login}</Text>
            <Text style={styles.location}>{user.location}</Text>
            <Text style={styles.id}>Id: {user.id}</Text>
            <Text style={styles.followers}>Seguidores: {user.followers}</Text>
            <Text style={styles.repos}>Repositórios: {user.public_repos}</Text>
          </View>

          <Text style={styles.headerText}>Repositórios</Text>

          <FlatList
            style={styles.reposList}
            showsVerticalScrollIndicator='false'
            data={repos}
            keyExtractor={(repo) => String(repo.id)}
            renderItem={({ item }) => (
              <View style={styles.user}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.name}>{item.description}</Text>
                <Text style={styles.username}>{item.language}</Text>
                <Text style={styles.location}>{item.stargazers_count}</Text>
                <Text style={styles.location}>
                  Criado em{' '}
                  {new Date(item.created_at).toLocaleDateString('pt-BR')}
                </Text>
                <Text style={styles.location}>
                  Último update:{' '}
                  {new Date(item.updated_at).toLocaleDateString('pt-BR')}
                </Text>
              </View>
            )}
          />
        </ImageBackground>
      </View>
    );
  }
}
