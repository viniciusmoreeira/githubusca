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
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },

  main: {
    alignItems: 'center',
    backgroundColor: 'rgba(10, 10, 10, 1)',
    marginTop: 30,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },

  form: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 1,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    height: 35,
    paddingHorizontal: 15,
    borderRadius: 4,
    fontSize: 16,
  },
  inputButton: {
    backgroundColor: 'rgba(10, 10, 10, 1)',
    marginLeft: 15,
  },
  clearButton: {
    backgroundColor: '#dc4747',
    marginTop: 10,
    marginHorizontal: 30,
    padding: 5,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  clearButtonText: {
    color: '#fff',
    textAlign: 'center',
  },

  usersList: {
    marginTop: 10,
  },
  user: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 20,
    backgroundColor: 'rgba(10, 10, 10, 1)',
    borderRadius: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  username: {
    color: '#999',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 5,
    textAlign: 'center',
  },
  location: {
    color: '#999',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 5,
    textAlign: 'center',
  },
  profileButton: {
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
  },
  profileButtonText: {
    fontSize: 13,
    color: '#fff',
    textTransform: 'uppercase',
  },
});
