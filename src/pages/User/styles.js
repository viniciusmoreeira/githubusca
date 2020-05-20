import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#000',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 30,
    padding: 15,
    backgroundColor: 'rgba(10, 10, 10, 1)',
    borderRadius: 8,
  },
  user: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#eee',
  },
  username: {
    fontSize: 14,
    color: '#999',
  },
  location: {
    color: '#999',
    fontSize: 14,
    marginTop: 5,
  },
  userInfo: {
    color: '#999',
    fontSize: 13,
    marginTop: 5,
  },

  reposListTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  reposList: {
    fontSize: 13,
    lineHeight: 18,
    margin: 30,
    textAlign: 'center',
  },
  repo: {
    backgroundColor: 'rgba(10, 10, 10, 1)',
    marginBottom: 20,
    borderRadius: 8,
    padding: 15,
  },
  repoName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#999',
    margin: 10,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 40,
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsNumbers: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
  },
  dates: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  created: {
    color: '#999',
    margin: 5,
  },
  updated: {
    color: '#999',
  },
});
