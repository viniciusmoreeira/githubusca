import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Linking,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import api from '../../services/api';

import styles from './styles';
import langColors from '../../utils/langColors';
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
            <Text style={styles.headerTitle}>{user.name}</Text>
            <FontAwesome name='github-alt' size={30} color='#fff' />
          </View>

          <View style={styles.wrapper}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />

            <View style={styles.user}>
              <Text style={styles.userInfo}>{user.login}</Text>
              <Text style={styles.userInfo}>{user.location}</Text>
              <Text style={styles.userInfo}>Id: {user.id}</Text>
              <Text style={styles.userInfo}>Seguidores: {user.followers}</Text>
              <Text style={styles.userInfo}>
                Repositórios: {user.public_repos}
              </Text>
            </View>
          </View>

          <Text style={styles.reposListTitle}>Repositórios</Text>

          <FlatList
            style={styles.reposList}
            showsVerticalScrollIndicator='false'
            data={repos}
            keyExtractor={(repo) => String(repo.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`${item.html_url}`);
                }}
              >
                <View style={styles.repo}>
                  <Text style={styles.repoName}>{item.name}</Text>
                  <Text style={styles.description} numberOfLines={2}>
                    {item.description}
                  </Text>

                  <View style={styles.stats}>
                    <View
                      style={{
                        backgroundColor: langColors[item.language],
                        padding: 5,
                        borderRadius: 4,
                        alignSelf: 'center',
                      }}
                    >
                      <Text>{item.language}</Text>
                    </View>

                    <View style={styles.stars}>
                      <FontAwesome name='star' size={22} color='#F9D38D' />
                      <Text style={styles.starsNumbers}>
                        {item.stargazers_count}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.dates}>
                    <Text style={styles.created}>
                      Criado em:{' '}
                      {new Date(item.created_at).toLocaleDateString('pt-BR')}
                    </Text>
                    <Text style={styles.updated}>
                      Último update:{' '}
                      {new Date(item.updated_at).toLocaleDateString('pt-BR')}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </ImageBackground>
      </View>
    );
  }
}
